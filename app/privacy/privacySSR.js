
export default function  PrivacySSR(){

  return (
    <>
      <div className="pl-5 pr-5">
        <div className="container d-flex min-vh-100"
               style={{
                  borderColor: "#3034fa",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "5px",
                  border: "2px solid blue",
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  overflowWrap: 'break-word',
                  flex: 1,
                  textAlign: "left",
                }}>
          <h1 className="section-description">Privacy Policy</h1>
          <p>
            This Privacy Policy applies to the website parcae.io and outlines the types of information we collect and how we use it.
          </p>
          <h3>Consent</h3>
          <p>
            By using our website, you consent to our Privacy Policy and agree to its terms.
          </p>

          <h3>Information We Collect</h3>
          <p>
            We do not collect any personal information on our users.
          </p>

          <h3>How We Use Your Information</h3>
          <p>
            We use the information we collect for various purposes, including providing and improving our website, communicating with you, and preventing fraud.
          </p>

          <h3>Log Files</h3>
          <p>
            Like many websites, we use log files to collect information such as IP addresses, browser type, and pages visited. This information helps us analyze trends and administer the site.
          </p>

          <h3>Cookies and Web Beacons</h3>
          <p>
            We use cookies to customize content based on visitors' preferences and browser type. You can manage cookies through your browser settings.
          </p>

          <h3>Google DoubleClick DART Cookie</h3>
          <p>
            Google may use DART cookies to serve ads based on visitors' interactions with our site. You can opt out of these cookies through Google's Privacy Policy.
          </p>

          <h3>Third-Party Privacy Policies</h3>
          <p>
            Our Privacy Policy does not apply to third-party advertisers or websites. We encourage you to review their privacy policies.
          </p>

          {/* Add more sections as needed */}
        </div>
    </div>
  </>
  );
}
