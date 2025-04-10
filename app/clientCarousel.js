'use client'; // This directive tells Next.js to treat this as a client component.
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ClientCarousel({ articles }) {
    return (
      // Carousel section
      <div className="pl-5 pr-5">
          <div className="container" style={{
              paddingTop: "30px",
              paddingBottom: "10px",
              maxWidth: "800px",
              margin: "0 auto",
              background: "#3034fa",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "20px"
          }}>
              <Carousel showThumbs={false} autoPlay infiniteLoop>
                  {articles.map((article, index) => (
                      <div key={index} style={{ position: 'relative' }}>
                          <img src={article.imageUrl} alt={article.title} style={{ maxHeight: '400px', objectFit: 'cover', borderRadius: '10px' }} />
                          <div style={{
                              position: 'absolute',
                              bottom: '20px',
                              left: '20px',
                              color: 'white',
                              textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                          }}>
                              <a
                                  href={article.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                      fontSize: '24px',
                                      fontWeight: 'bold',
                                      textDecoration: 'none',
                                      color: 'white'
                                  }}
                              >
                                  {article.title}
                              </a>
                          </div>
                      </div>
                  ))}
              </Carousel>
          </div>
      </div>
    );
}

export default ClientCarousel;
