import Link from 'next/link'; // Use Link from 'next/link'
import { FaArrowLeft, FaHome, FaUser, FaTelegram } from 'react-icons/fa'; // Import the desired icons from react-icons
import { BiSolidLogOutCircle } from 'react-icons/bi';
import { MdOutlineEmail } from "react-icons/md";

export default function ContactSSR(){
  const emailAddress = "info@evow.io"; // Replace with the actual email address
  const subject = "eVow.io Inquiry"; // Replace with the desired email subject
  const body = ""; // Replace with the desired email body

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <>
    <div className="pl-5 pr-5" style={{paddingBottom: '15px'}}>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row w-100"
                style={{
                    borderColor: "#3034fa",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "5px",
                    border: "2px solid blue",
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%', // Ensure div takes up full width
                  }}>
            <div className="col-12 col-md-8 text-left">
              <h3>Thank you</h3>
              <p>
                Please contact us via our Telegram channel. Our representatives will be available to help with your request.
              </p>
              <p>
                <Link href="https://t.me/ParcaeOfficialDiscussion" passHref>
                  <button className="profile-button" style={{ marginRight: '10px', backgroundColor: '#3034fa', padding: '10px 20px' }}>
                    <FaTelegram style={{ fontSize: '24px' }} /> Telegram
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
    </div>
  </>
  );
};
