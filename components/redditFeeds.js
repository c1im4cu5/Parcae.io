import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";

async function getRedditTrendingFeeds() {
    const url = "https://www.reddit.com/r/all/.rss";

    try {
        const response = await fetch(url);
        const xmlText = await response.text();

        // Parse XML to JSON
        const json = await parseStringPromise(xmlText);

        // Extract the feed entries
        const entries = json.feed.entry || [];

        // Process and clean up the top 10 entries
        const topFeeds = entries.slice(0, 10).map(entry => ({
            title: entry.title[0],
            link: entry.link[0].$.href,
            summary: entry.summary ? entry.summary[0]._ : "No summary available"
        }));

        return topFeeds;
    } catch (error) {
        console.error("Error fetching or parsing the RSS feed:", error);
        return [];
    }
}


export default async function RedditComponent() {
  const feeds = await getRedditTrendingFeeds();
  const outlinedColumnStyle = {
    border: '2px solid #FFFFFF', // Adjust border style as needed
    padding: '15px', // Add padding for spacing
    borderRadius: '15px', // Add border radius for rounded corners
    margin: '6px', // Add margin on all sides
    backgroundColor: '#3034fa',
    overflowWrap: 'break-word',
    flex: 1,
    color: '#FFFFFF',
    textAlign: 'center',
    paddingBottom: '10px'
  };

    return (
      <div className="pl-5 pr-5">
         <div className="container" style={{ paddingTop: "25px", paddingBottom: "20px", color: "black" }}>
             {feeds.length > 0 ? (
                 <div
                     className="p-4 border-l-4"
                     style={{
                         borderColor: "#3034fa",
                         backgroundColor: "#f8f9fa",
                         borderRadius: "5px",
                         border: "2px solid blue",
                         padding: "20px",
                         width: "100%",
                     }}
                 >
                     {/* Header Row - Centered Title */}
                     <div style={outlinedColumnStyle}>
                         <h1>Trending Reddit</h1>
                     </div>

                     {/* Two Columns in a Row */}
                     <div style={{ display: "flex", justifyContent: "space-between", paddingTop: '10px' }}>
                         {/* Left Column */}
                         <div style={{ width: "48%" }}>
                             {feeds.slice(0, 5).map((feed, index) => (
                                 <div key={index} className="mb-2">
                                     <a
                                         href={feed.link}
                                         target="_blank"
                                         rel="noopener noreferrer"
                                         className="font-semibold text-lg hover:underline"
                                         style={{ color: "black" }}
                                     >
                                         {feed.title}
                                     </a>
                                 </div>
                             ))}
                         </div>

                         {/* Right Column */}
                         <div style={{ width: "48%" }}>
                             {feeds.slice(5, 10).map((feed, index) => (
                                 <div key={index} className="mb-2">
                                     <a
                                         href={feed.link}
                                         target="_blank"
                                         rel="noopener noreferrer"
                                         className="font-semibold text-lg hover:underline"
                                         style={{ color: "black" }}
                                     >
                                         {feed.title}
                                     </a>
                                 </div>
                             ))}
                         </div>
                     </div>
                 </div>
             ) : (
                 <p className="text-red-500">⚠️ No feeds found.</p>
             )}
         </div>
     </div>
    );
}
