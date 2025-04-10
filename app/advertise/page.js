import Head from 'next/head';
import Script from 'next/script';

import ContactWrapper from './contactWrapper'

export const metadata = {
  title: "Advertise with Parcae.io",
  description: "Elevate your brand with strategic advertising on Parcae.io. Reach a diverse and engaged audience with our dynamic news platform.",
  keywords: "daily news, celebrity news, finance news, banking news, politics news, money news, democrats, republicans, USA news, world news, American news, national news, local news, up-to-date news, RSS feeds, digital advertising, marketing, brand exposure, audience reach",
  openGraph: {
    title: "Advertise with Parcae.io",
    description: "Unlock powerful advertising opportunities on Parcae.io and connect with a discerning readership.",
    url: "https://parcae.io/advertise",
    type: "website",
    images: [
      {
        url: "https://parcae.io/logo1280.png",
        width: 1280,
        height: 720,
        alt: "Parcae.io Logo - Driving Engagement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advertise with Parcae.io",
    description: "Maximize your marketing impact! Inquire about advertising and partnership opportunities with Parcae.io.",
    image: "https://parcae.io/logo1280.png",
  },
};

export default function Contact(){

  return (
    <>
    <Head>
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://parcae.io/advertise" />
      <link rel="icon" type="image/svg+xml" href="https://parcae.io/favicon.svg" />  {/* SVG support */}
      <link rel="apple-touch-icon" href="https://parcae.io//apple-touch-icon.png" /> {/* iOS icon */}
      <link rel="manifest" href="/site.webmanifest" />  {/* Web App Manifest */}
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

    <ContactWrapper />
  </>
  );
};
