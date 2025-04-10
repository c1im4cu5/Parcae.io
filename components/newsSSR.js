import Link from 'next/link';

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

const NewSSR = () => (
  <>
  <div className="pl-5 pr-5">
    <div className="container d-flex justify-content-center align-items-center min-vh-10">
      <div className="col-12 col-md-8" style={outlinedColumnStyle}>
        <h1 className="text-center mb-4">eVow.io | Blockchain, Web3, ML & AI News</h1>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td>{article.date}</td>
                <td>
                <Link href={`/article/${article.id}`}>{article.title}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </>
);

export default NewSSR;
