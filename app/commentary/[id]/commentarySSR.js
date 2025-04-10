
// app/articles/[id]/page.js
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Script from 'next/script';

async function getArticles() {
    try {
        const res = await fetch("https://parcae.io/daily_news.json", { cache: "no-store" });
        if (!res.ok) {
            console.error("Failed to fetch daily_news.json");
            return [];
        }

        const fileData = await res.json();
        let allArticles = [];

        // Iterate through each sublist in the fileData
        for (const sublist of fileData) {
          // Filter out articles where companyName is "Parcae" and add the rest to allArticles
          const filteredArticles = sublist.filter(article => article.companyName === "Parcae");
          allArticles.push(...filteredArticles);
        }

        // Transform the allArticles array into an object with article ids as keys
        const articlesById = allArticles.reduce((accumulator, article) => {
          accumulator[article.id] = article;
          return accumulator;
        }, {});

        return articlesById;

    } catch (error) {
        console.error("Error fetching or processing articles:", error);
        return [];
    }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const articleData = await getArticles();
  const article = articleData[id];

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
      url: `https://parcae.io/commentary/${article.id}`,
      type: 'article',
      article: {
        published_time: article.datePublished,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      image: article.image,
    },
  };
}

export async function generateStaticParams() {
  const articleData = await getArticles();
  return Object.keys(articleData).map((id) => ({ id }));
}

export default async function CommentarySSR({ params }) {
  const outlinedColumnStyle = {
    border: '2px solid #0000FF',  // Blue outline
    padding: '20px',
    borderRadius: '10px',
    margin: '6px',
    backgroundColor: '#FFFFFF',  // White background
    color: '#000000',  // Black text
    overflowWrap: 'break-word',
    flex: 1,
  };

  const { id } = await params;
  const articleData = await getArticles();
  const article = articleData[id];

  if (!article) {
    return notFound();
  }

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="monetag" content="c9b32c57707b03286363959fd0e9a339" />
        <link rel="canonical" href={`https://parcae.io/commentary/${article.id}`} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-whatever-integrity-key"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-S8E88TQL9P"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S8E88TQL9P');
        `}
      </Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-rbsA2VBKQ3zXUFTzHEbklxyF06N+AL1jXGc9czpXHL5RsZlFdfglQfwLkBEVWQFf"
        crossOrigin="anonymous"
        defer
      />
      <Script
        src="https://kulroakonsu.net/88/tag.min.js"
        data-zone="139037"
        async data-cfasync="false"
      />
      <div className="pl-5 pr-5">
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="col-12 col-md-8" style={outlinedColumnStyle}>
          {/* Display Image */}
                {article.imageUrl && (
                  <div className="mb-4 flex justify-center">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-auto max-h-96 object-cover rounded-lg border border-blue-300"
                      style={{
                        width: '100%', // Ensures the image takes up full width of its container
                        height: 'auto', // Maintains aspect ratio
                        objectFit: 'cover', // Ensures the image covers the container without overflow
                        maxHeight: '300px', // Limits the maximum height to ensure it stays within the container
                      }}
                    />
                  </div>
                )}
            {/* Article Content */}
            <h1>{article.title}</h1>
            <div
              className="text-black"
              dangerouslySetInnerHTML={{ __html: article.commentary }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
