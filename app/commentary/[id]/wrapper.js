// app/articles/[id]/page.js
import ReactMarkdown from 'react-markdown';
import CommentaryWrapper from './commentaryWrapper';

async function getArticles() {
    try {
        const res = await fetch("https://parcae.io/daily_news.json", { cache: "no-store" });
        if (!res.ok) {
            console.error("Failed to fetch daily_news.json");
            return [];
        }

        const fileData = await res.json();
        let allArticles = [];

        // Iterate through each sublist in the fileData
        for (const sublist of fileData) {
          // Filter out articles where companyName is "Parcae" and add the rest to allArticles
          const filteredArticles = sublist.filter(article => article.companyName !== "Parcae");
          allArticles.push(...filteredArticles);
        }

        // Transform the allArticles array into an object with article ids as keys
        const articlesById = allArticles.reduce((accumulator, article) => {
          accumulator[article.id] = article;
          return accumulator;
        }, {});

        console.log("ID: ", articlesById);

        return articlesById;

    } catch (error) {
        console.error("Error fetching or processing articles:", error);
        return [];
    }
}

export async function generateStaticParams() {
  const articleData = await getArticles();
  return Object.keys(articleData).map((id) => ({ id }));
}

export default async function Article({ params }) {
  const articleData = await getArticles();
  const { id } = await params;
  const article = articleData[id];

  // Render 404 if article is not found
  if (!article) {
    return notFound();
  }

  const outlinedColumnStyle = {
    border: '2px solid #000000', // Adjust border style as needed
    padding: '20px', // Add padding for spacing
    borderRadius: '10px', // Add border radius for rounded corners
    margin: '6px', // Add margin on all sides
    backgroundColor: '#FEAE67',
    overflowWrap: 'break-word',
    flex: 1,
    color: '#000000'
  };

  return (
    <>
      <CommentaryWrapper params={params} />
    </>
  );
}
