
import Head from 'next/head';
import Script from 'next/script';

import PrivacyWrapper from './privacyWrapper';

export const metadata = {
  title: "Parcae.io | Privacy Agreement",
  description: "Review Parcae's Privacy Agreement to understand how we protect your data and privacy. Learn about our policies regarding data collection, usage, and security.",
  keywords: "Parcae, Parcae.io, contact Parcae, Parcae support, AI news analysis, media bias, journalism integrity, reporting styles, news site analysis, customer service, collaboration, media insights",
  openGraph: {
      title: "Parcae.io | Privacy Agreement",
      description: "Review Parcae's Privacy Agreement to understand how we protect your data and privacy. Learn about our policies regarding data collection, usage, and security.",
      url: "https://parcae.io/privacy",
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
    title: "Parcae.io | Privacy Agreement",
    description: "Review Parcae's Privacy Agreement to understand how we protect your data and privacy. Learn about our policies regarding data collection, usage, and security.",
    image: "https://parcae.io/logo1280.png",
  }
}

export default function  Privacy(){

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://parcae.io/privacy" />
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
      <PrivacyWrapper />
    </>
  );
}
