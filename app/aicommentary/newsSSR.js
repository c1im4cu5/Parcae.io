import moment from 'moment';

async function getArticles() {
  try {
    const res = await fetch('https://parcae.io/daily_news.json', { cache: 'no-store' });
    if (!res.ok) {
      console.error('Failed to fetch daily_news.json');
      return [];
    }

    const fileData = await res.json();
    let allArticles = [];

    // Iterate through each sublist in the fileData
    for (const sublist of fileData) {
      // Filter out articles where companyName is "Parcae" and add the rest to allArticles
      const filteredArticles = sublist.filter((article) => article.companyName === 'Parcae');
      allArticles.push(...filteredArticles);
    }

    return allArticles;
  } catch (error) {
    console.error('Error fetching or processing articles:', error);
    return [];
  }
}

export default async function NewsSSR() {
  const articleData = await getArticles();

  return (
    <div className="pl-5 pr-5">
      <div className="container" style={{ paddingTop: '10px', paddingBottom: '20px', color: 'black' }}>
        {articleData.length > 0 ? (
          articleData.map((article, index) => (
            <div
              key={index}
              className="mb-4 p-4 border-l-4"
              style={{
                borderColor: '#3034fa',
                backgroundColor: '#f8f9fa',
                borderRadius: '5px',
                border: '2px solid blue',
                display: 'flex',
                alignItems: 'center',
                width: '100%', // Ensure div takes up full width
              }}
            >
              {/* Article Image */}
              <img
                src={article.imageUrl}
                alt={article.title}
                style={{
                  width: '150px',
                  height: 'auto',
                  marginRight: '16px', // Ensure margin is on the right
                  borderRadius: '5px',
                }}
              />

              {/* Article Content */}
              <div style={{ flex: 1 }}>
                {/* Title as Link */}
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-lg hover:underline"
                  style={{ color: 'black' }}
                >
                  {article.title}
                </a>{' '}
                - {article.companyName}
                {/* Description */}
                <p className="text-sm mt-1" style={{ color: 'black' }}>
                  {article.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-500">⚠️ No articles found.</p>
        )}
      </div>
    </div>
  );
}
