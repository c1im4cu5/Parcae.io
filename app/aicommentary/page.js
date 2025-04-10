import NewsWrapper from './newsWrapper';
import NewsWrapperOne from './wrapper';
import NewsWrapperTwo from './wrapperTwo';
import Head from 'next/head';
import Script from 'next/script';

export const metadata = {
  title: "Parcae.io | Your gateway to comprehensive news and AI analysis",
  description: "Explore Parcae.io's curated articles analyzing news sites' reporting styles, bias, and integrity. Stay informed with deep insights into media dynamics and journalistic practices.",
  keywords: "Parcae, Parcae.io, AI news analysis, media bias, journalism integrity, reporting styles, news site analysis, Web3, AI commentary, digital media, information integrity, article insights",
  openGraph: {
      title: "Parcae.io | Your gateway to comprehensive news and AI analysis",
      description: "Explore Parcae.io's curated articles analyzing news sites' reporting styles, bias, and integrity. Stay informed with deep insights into media dynamics and journalistic practices.",
      url: "https://parcae.io/aicommentary",
      type: "website",
      images: [
        {
          url: "https://parcae.io/logo1280.png",
          width: 1280,
          height: 720,
          alt: "Parcae.io Logo",
        },
      ],
    },
  twitter: {
    card: "summary_large_image",
    title: "Parcae.io | Your gateway to comprehensive news and AI analysis",
    description: "Explore Parcae.io's curated articles analyzing news sites' reporting styles, bias, and integrity. Stay informed with deep insights into media dynamics and journalistic practices.",
    image: "https://parcae.io/logo1280.png",
  }
}

const News = () => (
  <>
  <Head>
    <meta name="robots" content="index, follow" />
    <meta name="monetag" content="c9b32c57707b03286363959fd0e9a339" />
    <link rel="canonical" href="https://parcae.io/aicommentary" />
    <link rel="icon" type="image/svg+xml" href="https://parcae.io/favicon.svg" />  {/* SVG support */}
    <link rel="apple-touch-icon" href="https://parcae.io/apple-touch-icon.png" /> {/* iOS icon */}
    <link rel="manifest" href="https://parcae.io/site.webmanifest" />  {/* Web App Manifest */}
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
  <NewsWrapper />
  <NewsWrapperOne />
  <NewsWrapperTwo />
  </>
);

export default News;
