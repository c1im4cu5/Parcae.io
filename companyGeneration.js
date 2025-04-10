const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");

// API Keys (Replace with yours)
const OPENAI_API_KEY = "REPLACE WITH YOUR OPEN API KEY";
const ARTICLES_DIR = path.join(__dirname, "public");

// Initialize OpenAI
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

const filePath = path.join(__dirname, "public", "daily_news.json");
//const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function fetchAICommentary(descriptions, companyName) {
    const prompt = `Analyze the news reporting style of ${companyName} based on these articles:\n\n${descriptions.join("\n\n")}\n\nProvide a 6-8 paragraph commentary with unique, truthful (perhaps a bit disruptive) insights into their tone and rhetorical style. Also provide a 0-100 rating for Biad/Integrity and Depth/Quality of analysis. Provide in html format. `;

    try {
        const response = await openai.chat.completions.create({
          model: "gpt-4-0613",
          messages: [{ role: "system", content: "You are a philosopher and extremely wise." },
                     { role: "user", content: prompt }],
            temperature: 0.6,
            max_tokens: 1000
        });

        return response.choices[0].message.content.trim();
    } catch (error) {
        console.error("❌ AI API Error:", error);
        return null;
    }
}

async function processDailySiteNews() {
    let fileData = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // Create a new array for all commentaries
    let newCommentaries = [];
    let commentaryId = 1; // Start with 1 for the ID

    for (const sublist of fileData) {
        if (!sublist.length) continue;

        const companyName = sublist[0].companyName;
        const descriptions = sublist.map(article => article.description);
        let image = "";

        if (companyName === "Gizmodo"){
          image = "https://parcae.io/gizmodo.jpg";
        }
        if (companyName === "CNN Money"){
          image = "https://parcae.io/cnn.jpg";
        }
        if (companyName === "Fortune"){
          image = "https://parcae.io/fortune.png";
        }
        if (companyName === "Forbes"){
          image = "https://parcae.io/forbes.jpg";
        }
        if (companyName === "Huffington Post"){
          image = "https://parcae.io/huff.png";
        }
        if (companyName === "Fox News"){
          image = "https://parcae.io/foxNews.png";
        }
        if (companyName === "New York Times"){
          image = "https://parcae.io/nytimes.jpg";
        }
        if (companyName === "NBC News"){
          image = "https://parcae.io/nbcNews.jpg";
        }
        if (companyName === "ABC News"){
          image = "https://parcae.io/abcNews.jpg";
        }
        if (companyName === "Variety"){
          image = "https://parcae.io/Variety.png";
        }
        if (companyName === "RSS.com"){
          image = "https://parcae.io/rss.png";
        }
        if (companyName === "thehill.com"){
          image = "https://parcae.io/thehill.png";
        }
        if (companyName === "bitcoinmagazine.com"){
          image = "https://parcae.io/btcMagazine.jpg";
        }

        console.log(`🔍 Generating commentary for: ${companyName}`);
        const aiResponse = await fetchAICommentary(descriptions, companyName);
        if (!aiResponse) continue;

        // Add commentary objects to the newCommentaries array
        newCommentaries.push({
            id: commentaryId,
            title: `AI Analysis of ${companyName}'s News Reporting`,
            link: `https://parcae.io/commentary/${commentaryId}`,
            author: "Parcae AI",
            companyName: "Parcae",
            commentaryCompany: companyName,
            commentary: aiResponse,
            imageUrl: image,
            description: `An in-depth articial intelligence analysis of editorial reporting from ${companyName}'s News Reporting`,
            keywords: "NY Times, bitcoinmagazine, Forbes, NBC News, ABC News, Fox News, Analysis, Artificial Intelligence Analysis, AI Analysis, News Analysis, news reporting, thehill.com, rss.com, rss, celebrity, politics, finance, banking, world news, usa news"
        });

        commentaryId++; // Increment the commentary ID for the next iteration
    }

    // Append the new commentaries array to the existing file data
    fileData.push(newCommentaries);

    // Create a new file name with a timestamp
    const newFileName = `daily_news.json`;
    const newFilePath = `./public/${newFileName}`;

    // Save the updated list to the file
    fs.writeFileSync(newFilePath, JSON.stringify(fileData, null, 2), "utf8");
    console.log(`✅ Successfully updated ${filePath}`);
}

// Run the function
processDailySiteNews().catch(console.error);
