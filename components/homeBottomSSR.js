import Link from 'next/link';
import { FaTwitter, FaTelegram } from 'react-icons/fa';
import { IoLogoBitcoin } from 'react-icons/io';
import { SiSololearn } from 'react-icons/si';
import { RiQuestionAnswerLine } from 'react-icons/ri';

export default function HomeBottomSSR(){
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
      <div className="pl-5 pr-5">
        <div className="container" style={{ paddingBottom: '10px' }}>

          {/* Tokenomics Section */}
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4" style={outlinedColumnStyle}>
              <h1>EVOW Tokenomics</h1>
              <p className="lead">Total Supply: 25 Million EVOW</p>
              <p className="lead">Burn Mechanism via Subscriptions</p>
              <p className="lead">
                Airdrop and Presale Bonus: 7% (1.75 Million EVOW with further breakdown as 1.25M Presale Bonus & 500K Airdrop)
              </p>
              <p className="lead">Smart Contract Development, Pool Funding, and Marketing Fund: 48% (12 Million EVOW)</p>
              <p className="lead">Burn and Mint CCIP Bridge for Polygon and Avalanche blockchains</p>
              <Link href="/tokenomics" className="profile-button" style={{ display: 'flex', alignItems: 'center' }}>
                <SiSololearn style={{ fontSize: '24px', marginRight: '8px' }} /> Learn More
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="col-12 col-sm-6 col-md-4" style={outlinedColumnStyle}>
              <div className="row">
                <h2>Join Our Community</h2>
                <p className="lead">
                  <Link href="https://twitter.com/eVowIO" target="_blank" rel="noopener noreferrer">
                    <FaTwitter style={{ fontSize: '48px', color: '#b103fc' }} />
                  </Link>
                  <Link href="https://t.me/OfficialEvowDiscussion" target="_blank" rel="noopener noreferrer">
                    <FaTelegram style={{ fontSize: '48px', color: '#b103fc' }} />
                  </Link>
                </p>
              </div>

              <div className="row">
                <h2>Q & A - Deployable Contracts</h2>
                <p className="lead">
                  <Link href="/how">
                    <RiQuestionAnswerLine style={{ fontSize: '48px' }} />
                  </Link>
                </p>
              </div>

              {/* External Links Section */}
              <div className="col-12 col-md-6">
                <h2>Learn about Polygon and Avalanche</h2>
                <p className="lead">
                  <Link href="https://polygon.technology/" target="_blank" rel="noopener noreferrer">
                    <img
                      style={{ width: '30%', height: '30%', marginRight: '20px' }}
                      src="/images/polygonPrimary.png"
                      alt="Polygon Logo"
                    />
                  </Link>
                  <Link href="https://www.avax.network/" target="_blank" rel="noopener noreferrer">
                    <img
                      style={{ width: '30%', height: '30%' }}
                      src="/images/avalanche_long.png"
                      alt="Avalanche Logo"
                    />
                  </Link>
                </p>
              </div>

              <div className="col-12 col-md-6">
                <h2>Buy Polygon and Avalanche on Coinbase!</h2>
                <p className="lead">
                  <Link href="https://coinbase.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      style={{ width: '25%', height: '25%' }}
                      src="/images/coinbase_logo.png"
                      alt="Coinbase Logo"
                    />
                  </Link>
                </p>
              </div>

              <div className="col-12 col-md-6">
                <h2>Support Decentralization! Purchase POL or AVAX from a DEX!</h2>
                <p className="lead">
                  <Link href="https://matcha.xyz/" target="_blank" rel="noopener noreferrer">
                    <img
                      style={{ width: '25%', height: '25%', marginRight: '20px' }}
                      src="/images/matchaLogo.png"
                      alt="Matcha Logo"
                    />
                  </Link>
                  <Link href="https://traderjoe.xyz/" target="_blank" rel="noopener noreferrer">
                    <img
                      style={{ width: '23%', height: '23%' }}
                      src="/images/trader.jpg"
                      alt="Trader Joe Logo"
                    />
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Airdrop and Pre-sale Section */}
          <div className="row">
            <div className="col-12 col-md-6" style={outlinedColumnStyle}>
              <h1>Airdrop Allocation</h1>
              <p className="lead">We've designated 2% of our funds for an exclusive airdrop program.</p>
              <p className="lead">Date: To Be Announced</p>

              <h1>Pre-Sale and Bonus</h1>
              <p className="lead">A portion of our funds is reserved for a pre-sale phase, totaling 3.75M tokens.</p>
              <ul>
                <li>Stage One: 750K Tokens</li>
                <li>Stage Two: 1.125M Tokens</li>
                <li>Stage Three: 1.875M Tokens</li>
              </ul>
              <p className="lead">
                <IoLogoBitcoin style={{ fontSize: '24px', color: 'gold' }} /> Create a Free Account
                <IoLogoBitcoin style={{ fontSize: '24px', color: 'gold' }} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
