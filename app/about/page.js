
import Head from 'next/head';
import Script from 'next/script';

import AboutWrapper from './aboutWrapper';

export const metadata = {
  title: "About Parcae.io | Your gateway to comprehensive news and AI analysis",
  description: "Learn about Parcae.io, your portal to real-time news insights and powerful AI-driven analysis. Discover how we connect users with timely information and innovative data solutions.",
  keywords: "Parcae, Parcae.io, AI news analysis, blockchain, data aggregation, web3 insights, DeFi, socialfi, real-time news, smart data solutions, AI-powered analysis, information exchange",
  openGraph: {
      title: "About Parcae.io | Your gateway to comprehensive news and AI analysis",
      description: "Learn about Parcae.io, your portal to real-time news insights and powerful AI-driven analysis. Discover how we connect users with timely information and innovative data solutions.",
      url: "https://parcae.io/about",
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
    title: "About Parcae.io | Your gateway to comprehensive news and AI analysis",
    description: "Learn about Parcae.io, your portal to real-time news insights and powerful AI-driven analysis. Discover how we connect users with timely information and innovative data solutions.",
    image: "https://parcae.io/logo1280.png",
  }
}

export default function About() {
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
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://parcae.io/about" />
        <link rel="icon" type="image/svg+xml" href="https://parcae.io/favicon.svg" />  {/* SVG support */}
        <link rel="apple-touch-icon" href="https://parcae.io/apple-touch-icon.png" /> {/* iOS icon */}
        <link rel="manifest" href="https://parcae.io/site.webmanifest" />  {/* Web App Manifest */}
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

      <AboutWrapper />
    </>
  );
};
