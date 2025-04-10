import { FiTwitter } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { TbBrandTelegram } from "react-icons/tb";
import React from "react";

const Footer = () => {
  const outlinedColumnStyle = {
    border: "1px solid white",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "8px",
    backgroundColor: '#3034fa',
    color: "white",
    a: { color: '#white', //
        textDecoration: 'none', // No underline
      },
    'a:hover': { color: 'white', // Link color on hover
                textDecoration: 'underline' // Underline on hover
  }
  };

  return (
    <div
      className="container-fluid"
      style={{ paddingTop: "5px", paddingBottom: "15px", backgroundColor: "#3034fa" }}
    >
      {/* All Columns in One Row */}
      <div className="row gx-0 justify-content-center">
        {/* Column 1 */}
        <div className="col-12 col-sm-6 col-md-3" style={outlinedColumnStyle}>
          <h5>About Us</h5>
          <ul className="list-unstyled">
            <li><a href="/about" className="text-light">Mission</a></li>
            <li><a href="/advertise" className="text-light">Advertise</a></li>
            <li><a href="/careers" className="text-light">Careers</a></li>
            <li><a href="/privacy" className="text-light">Privacy</a></li>
            <li><a href="/terms" className="text-light">Terms</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="col-12 col-sm-6 col-md-3" style={outlinedColumnStyle}>
          <h5>Signup to Telegram</h5>
          <ul className="list-unstyled d-flex justify-content-start">
            <li>
              <a href="https://t.me/ParcaeOfficialDiscussion" className="text-light">
                <TbBrandTelegram size={24} />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="col-12 col-sm-6 col-md-3" style={outlinedColumnStyle}>
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li><a href="/contact" className="text-light">Customer Service</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="col-12 col-sm-6 col-md-3" style={outlinedColumnStyle}>
          <h5>Social Media</h5>
          <ul className="list-unstyled d-flex justify-content-start">
            <li className="mr-3">
              <a href="https://x.com/parc4e" className="text-light">
                <FiTwitter size={24} />
              </a>
            </li>
            <li className="mr-3">
              <a href="https://github.com/eVowIO" className="text-light">
                <SiGithub size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      {/* Footer Bottom Section */}
      <div className="text-center">
        <h6 style={{ color: "white" }}>Parcae: News & AI Commentary</h6>
        <h6 style={{ color: "white" }}>&copy; 2025 parcae.io - All rights reserved.</h6>
      </div>
    </div>
  );
};

export default Footer;
