
export default function AboutSSR() {

  return (
    <>
      <div className="pl-5 pr-5">
        <div className="container">
          <div className="row">
            <div className="mb-4 p-4 border-l-4"
                style={{
                  borderColor: "#3034fa",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "5px",
                  border: "2px solid blue",
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%', // Ensure div takes up full width
                }}>
              <div className="about-container">
                <section>
                    <h2>Explore the Power of Parcae.io</h2>
                    <p>Parcae.io is designed to revolutionize the way people engage with news. By integrating AI analysis and scoring mechanisms, we empower users with:</p>
                    <ul>
                        <li><strong>Unbiased Information:</strong> AI reviews and scores news sources to highlight potential bias and integrity issues.</li>
                        <li><strong>In-Depth Analysis:</strong> News is categorized and analyzed for deeper insights.</li>
                        <li><strong>AI-Powered Commentary:</strong> Automated insights offer alternative perspectives.</li>
                        <li><strong>Public Transparency:</strong> The scoring system evaluates factual reporting and analysis depth.</li>
                    </ul>
                </section>

                <section>
                    <h2>AI Scoring Criteria</h2>
                    <p>Each news source is evaluated based on:</p>
                    <ul>
                        <li><strong>Bias/Integrity:</strong> Measures potential bias and journalistic ethics.</li>
                        <li><strong>In-Depth Analysis:</strong> Evaluates the depth and thoroughness of the reporting.</li>
                        <li><strong>Reputation & Source Validation:</strong> Checks credibility based on historical accuracy.</li>
                    </ul>
                </section>

                <section>
                    <h2>How It Works</h2>
                    <ol>
                        <li><strong>News Compilation:</strong> Aggregates news feeds from various sources.</li>
                        <li><strong>AI Processing:</strong> Analyzes content for patterns, bias, and information depth.</li>
                        <li><strong>Scoring & Commentary:</strong> Each source receives a score and AI-generated insights.</li>
                        <li><strong>Public Access:</strong> Users explore categorized news, compare bias scores, and read AI summaries.</li>
                    </ol>
                </section>

                <section>
                    <h2>Future Enhancements</h2>
                    <ul>
                        <li><strong>User Customization:</strong> Personalized news feeds based on preferences.</li>
                        <li><strong>Community Feedback:</strong> Users contribute to improve AI analysis.</li>
                        <li><strong>Integration with Web3:</strong> Secure data storage using blockchain technology.</li>
                    </ul>
                </section>

                <section>
                    <p>Parcae.io is redefining media consumption by leveraging AI for transparency and insight. Join us as we revolutionize news analysis.</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
        );
      };
