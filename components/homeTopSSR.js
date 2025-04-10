
export default function HomeTopSSR(){
  const outlinedColumnStyle = {
    border: '2px solid #FFFFFF', // Adjust border style as needed
    padding: '20px', // Add padding for spacing
    borderRadius: '10px', // Add border radius for rounded corners
    margin: '6px', // Add margin on all sides
    backgroundColor: '#3034fa',
    overflowWrap: 'break-word',
    flex: 1,
    color: '#FFFFFF'
  };
  return (
    <>
      <div className="pl-5 pr-5">
        <div className="container" style={{ paddingTop: '80px', paddingBottom: '10px' }}>
          {/* First Row */}
          <div className="row">
            <div className="col-12 col-md-6" style={outlinedColumnStyle}>
              <h1 style={{ textAlign: 'center' }}>Lifestyle | Finance | Crypto | Celebrity | Sports | AI Commentary</h1>
              <p className="lead" style={{ textAlign: 'center' }}>
                Your Gateway to Comprehensive News and AI Analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
