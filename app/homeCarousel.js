import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ClientCarousel from './clientCarousel'; // Adjust the import path as needed.

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

        finalArticles.sort(() => Math.random() - 0.5);

        return finalArticles.slice(0, 8)
    } catch (error) {
        console.error("Error fetching or processing articles:", error);
        return [];
    }
}

export default async function HomeCarousel() {
  const articles = await getArticles();

  if (!articles || Object.keys(articles).length === 0) {
    return <p className="text-center mt-5" style={{ color: "black" }}>No articles available.</p>;
  }

  return <ClientCarousel articles={articles} />;

}
