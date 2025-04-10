const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");

// Get timestamp for 7 days ago
const SEVEN_DAYS_AGO = Date.now() - 7 * 24 * 60 * 60 * 1000;

const rssFeeds = [["https://gizmodo.com/rss","Gizmodo"], ["http://rss.cnn.com/rss/money_topstories.rss", "CNN Money"], ["http://fortune.com/feed/", "Fortune"], ["https://www.forbes.com/real-time/feed2/", "Forbes"], ["https://www.huffingtonpost.com/section/front-page/feed", "Huffington Post"], ["http://feeds.foxnews.com/foxnews/latest", "Fox News"], ["http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml", "New York Times"],  ["http://feeds.nbcnews.com/feeds/topstories", "NBC News"], ["http://abcnews.go.com/abcnews/topstories", "ABC News"], ["http://variety.com/feed/", "Variety"], ["http://rss.cnn.com/rss/money_topstories.rss", "RSS.com"], ["http://thehill.com/rss/syndicator/19110", "thehill.com"], ["https://bitcoinmagazine.com/feed", "bitcoinmagazine.com"]];

function cleanDescription(description, companyName) {

    // Function to decode HTML entities
    function decodeHtmlEntities(text) {
        return text.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))
                   .replace(/&quot;/g, '"')
                   .replace(/&amp;/g, '&')
                   .replace(/&apos;/g, "'");
    }

    if (!description) return { text: "", imageUrl: null };

    let imageUrl = null;
    let cleanText = description;

    if (companyName === 'bitcoinmagazine.com') {
      // Extract image URL
      const imageMatch = description.match(/<img[^>]+src=["']([^"']+)["']/);
      imageUrl = imageMatch ? imageMatch[1] : null;

      // Clean the text
      cleanText = description
          .replace(/<p><a[^>]+>Bitcoin Magazine<\/a><br \/>/, "") // Remove Bitcoin Magazine branding at start
          .replace(/<img[^>]+>/g, "")                              // Remove image tags
          .replace(/<a[^>]+href=["'][^"']+["'][^>]*>(.*?)<\/a>/g, "$1") // Keep link text, remove tags
          .replace(/<br\s*\/?>/g, " ")                           // Replace <br> with space
          .replace(/<p>(.*?)<\/p>/g, "$1\n")                     // Keep paragraph content, add line break
          .replace(/This post .*?first appeared on Bitcoin Magazine.*?/gi, "") // Remove repeated branding
          .replace(/<[^>]+>/g, "")                                  // Remove remaining HTML tags
          .replace(/\n{2,}/g, "\n")                               // Remove excess new lines
          .trim();
    }
    else if (companyName === 'Variety' || companyName === "Fox News") {
          // Extract and remove image
          const imageMatch = description.match(/<img[^>]+src=["']([^"']+)["']/);
          imageUrl = imageMatch ? imageMatch[1] : null;

          cleanText = description
              .replace(/<img[^>]+>/g, "")
              .replace(/<br\s*\/?>( )?/g, " ")
              .replace(/<[^>]+>/g, "")
              .replace(/\s+/g, " ") // Collapse multiple spaces into one
              .trim();

          // Decode HTML entities
          cleanText = decodeHtmlEntities(cleanText);
        }
    else {
        // General case
        const imageMatch = description.match(/<img[^>]+src=["']([^"']+)["']/);
        imageUrl = imageMatch ? imageMatch[1] : null;

        cleanText = description
            .replace(/<img[^>]+>/g, "")
            .replace(/<br\s*\/?>/g, "")
            .replace(/<\/i>/g, "")
            .replace(/<i>/g, "")
            .replace(/<[^>]+>/g, "")
            .trim();
    }
    return { text: cleanText, imageUrl };
}

async function fetchRSS(url, companyName) {
  try {
    const response = await axios.get(url);
    const feedData = response.data;
    const articles = [];

    // Parse the RSS feed data with cheerio
    const $ = cheerio.load(feedData, {
      normalizeWhitespace: true,
      xmlMode: true,
    });

    // Now you can access the RSS feed items using Cheerio
    $('item').each((index, element) => {
      const title = $(element).find('title').text();// IDEA:
      const link = $(element).find('link').text();
      let description = $(element).find('description').text(); // Fetch description
      let imageUrl = $(element).find('enclosure').attr('url') || $(element).find("media\\:content, content").attr("url") || $(element).find("media\\:thumbnail, thumbnail").attr("url");

      if (companyName === "Gizmodo" || companyName === "Variety" || companyName === "bitcoinmagazine.com"){
        result = cleanDescription(description, companyName)
        description = result.text
        imageUrl = result.imageUrl
      }
      if (companyName === "Fox News"){
        result = cleanDescription(description, companyName)
        description = result.text
      }

      articles.push({
         title,
         link,
         description,
         imageUrl,
         companyName
       });
    });

    return articles

  } catch (error) {
    console.error('Error fetching RSS feed:', error);
  }
}

// Function to compile and save the news data to a new file
async function compileNewsData() {
  const allNewsData = [];

  // Fetch and process articles from each feed
  for (const feedData of rssFeeds) {
    const articles = await fetchRSS(feedData[0], feedData[1]);
        allNewsData.push(articles);
  }

  // Create a new file name with a timestamp
  const newFileName = `daily_news.json`;
  const newFilePath = `./public/${newFileName}`;

  // Write the compiled data to the file
  fs.writeFileSync(newFilePath, JSON.stringify(allNewsData, null, 2), 'utf8');
  console.log(`🎉 News data saved to: ${newFileName}`);

  return allNewsData;
}

// Run the function
compileNewsData().then((data) => {
  console.log("Finished processing news data.");
});
