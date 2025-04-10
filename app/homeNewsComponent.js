import moment from "moment";

async function getArticles() {
    try {
        const res = await fetch("https://parcae.io/daily_news.json", { cache: "no-store" });
        if (!res.ok) {
            console.error("Failed to fetch daily_news.json");
            return [];
        }

        const fileData = await res.json();
        let allArticles = [];
        let parcaeArticles = [];

        // Iterate through each sublist in the fileData
        for (const sublist of fileData) {
            for (const article of sublist) {
                if (article.companyName === "Parcae") {
                    parcaeArticles.push(article);
                } else {
                    allArticles.push(article);
                }
            }
        }

        // Shuffle the combined list of non-Parcae articles
        for (let i = allArticles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allArticles[i], allArticles[j]] = [allArticles[j], allArticles[i]];
        }

        // Insert a "Parcae" article every five articles
        let finalArticles = [];
        let parcaeIndex = 0;

        for (let i = 0; i < allArticles.length; i++) {
            finalArticles.push(allArticles[i]);

            // Every 5th article, insert a "Parcae" article if available
            if ((i + 1) % 5 === 0 && parcaeIndex < parcaeArticles.length) {
                finalArticles.push(parcaeArticles[parcaeIndex]);
                parcaeIndex++;
            }
        }

        return finalArticles;
    } catch (error) {
        console.error("Error fetching or processing articles:", error);
        return [];
    }
}


const outlinedColumnStyle = {
  border: "2px solid #FFFFFF",
  padding: "20px",
  borderRadius: "10px",
  margin: "6px",
  backgroundColor: "#3034fa",
  overflowWrap: "break-word",
  flex: 1,
  color: "#FFFFFF",
};

export default async function HomeNewsSSR() {
  const allArticles = await getArticles();

  if (!allArticles || Object.keys(allArticles).length === 0) {
    return <p className="text-center mt-5" style={{ color: "black" }}>No articles available.</p>;
  }

  return (
    <div className="pl-5 pr-5">
      <div className="container" style={{ paddingTop: "30px", paddingBottom: "10px", color: "black" }}>
        {allArticles.length > 0 ? (
          allArticles.map((article, index) => (
            <div
              key={index}
              className="mb-4 p-4 border-l-4"
              style={{
                borderColor: "#3034fa",
                backgroundColor: "#f8f9fa",
                borderRadius: "5px",
                border: "2px solid blue",
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
                  style={{ color: "black" }}
                >
                  {article.title}
                </a> - {article.companyName}
                {/* Description */}
                <p className="text-sm mt-1" style={{ color: "black" }}>
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
