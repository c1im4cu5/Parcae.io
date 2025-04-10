import Head from 'next/head';
import Script from 'next/script';
import HomeWrapperTwo from './mainWrapperTwo';
import HomeWrapperOne from './mainWrapperOne';
import HomeWrapper from './mainWrapper';

export const metadata = {
  title: "Parcae.io | Your Gateway to Comprehensive News and AI Analysis",
  description: "Parcae.io: Stay ahead with our curated daily news from diverse sources, complemented by unique AI commentary. Explore insights across Lifestyle, Finance, Crypto, Celebrity, Politics, and Sports.",
  keywords: "Bitcoin, Ethereum, Solana, Ripple, BTC, ETH, XRP, SOL, trading, crypto price, Daily News, Curated News, AI Commentary, Lifestyle News, Finance News, Crypto News, Celebrity News, Politics News, Sports News, Breaking News, In-Depth Analysis, Stay Informed, Comprehensive News, News Insights, AI Analysis, Diverse Perspectives, Innovative News Platform, Unique User Interface, Seamless News Experience, Latest Headlines, Current Events, Trending Stories, World News, Local News, News Aggregator, Personalized News, Reliable News Source, Expert Commentary, News and Updates, Real-Time News, News Digest, Informative News, Engaging Content, Trusted News Platform",
  openGraph: {
      title: "Parcae.io | Your Gateway to Comprehensive News and AI analysis",
      description: "Parcae.io: Stay ahead with our curated daily news from diverse sources, complemented by unique AI commentary. Explore insights across Lifestyle, Finance, Crypto, Celebrity, Politics, and Sports.",
      url: "https://parcae.io/",
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
    title: "Parcae.io | Your Gateway to Comprehensive News and AI Analysis",
    description: "Parcae.io: Stay ahead with our curated daily news from diverse sources, complemented by unique AI commentary. Explore insights across Lifestyle, Finance, Crypto, Celebrity, Politics, and Sports.",
    image: "https://parcae.io/logo1280.png",
  }
}

export default function HomePage(){
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://parcae.io/" />
        <link rel="icon" type="image/svg+xml" href="https://parcae.io/favicon.svg" />  {/* SVG support */}
        <link rel="apple-touch-icon" href="https://parcae.io/apple-touch-icon.png" /> {/* iOS icon */}
        <link rel="manifest" href="https://parcae.io/site.webmanifest" />  {/* Web App Manifest */}
        <meta name="monetag" content="c9b32c57707b03286363959fd0e9a339" />
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
      <div>
        <HomeWrapper />
        <HomeWrapperOne />
        <HomeWrapperTwo />
      </div>
    </>
  );
};
