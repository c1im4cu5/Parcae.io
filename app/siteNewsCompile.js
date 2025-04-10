const fs = require("fs");
const path = require("path");

// Directory where JSON files are stored
const DIRECTORY_PATH = './articles';

// Get timestamp for 7 days ago
const SEVEN_DAYS_AGO = Date.now() - 7 * 24 * 60 * 60 * 1000;

async function processDailySiteNews() {
    const files = fs.readdirSync(DIRECTORY_PATH);
    let allSiteNewsData = {};

    for (const file of files) {
        // Match "daily_site_news_<TIMESTAMP>.json"
        const match = file.match(/^daily_site_news_(\d+)\.json$/);
        if (!match) continue;

        const timestamp = parseInt(match[1], 10);
        const filePath = path.join(DIRECTORY_PATH, file);

        // Delete files older than 7 days
        if (timestamp < SEVEN_DAYS_AGO) {
            console.log(`🗑️ Deleting old file: ${file}`);
            fs.unlinkSync(filePath);
            continue;
        }

        // Read and parse the JSON file
        console.log(`📂 Processing: ${file}`);
        const fileData = JSON.parse(fs.readFileSync(filePath, "utf8"));

        // Merge data into `allSiteNewsData`, keeping commentary sorted by timestamp
        for (const category in fileData) {
            if (!allSiteNewsData[category]) {
                allSiteNewsData[category] = { entries: [] };
            }

            // Store commentary and image along with timestamp
            allSiteNewsData[category].entries.push({
                timestamp,
                commentary: fileData[category].commentary,
                image: fileData[category].image || null
            });
        }
    }

    // Sort each category's entries by timestamp (oldest to newest)
    for (const category in allSiteNewsData) {
        allSiteNewsData[category].entries.sort((a, b) => a.timestamp - b.timestamp);
    }

    console.log(`✅ Processed ${Object.keys(allSiteNewsData).length} categories.`);

    // ✅ Return the compiled dictionary
    return allSiteNewsData;
}
