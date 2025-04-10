import Head from 'next/head';
import Script from 'next/script';

import ContactWrapper from './contactWrapper'

export const metadata = {
  title: "Parcae.io Careers | Join Our Mission for Media Integrity",
  description: "Discover career opportunities at Parcae.io. Join our team dedicated to analyzing media bias, enhancing journalism integrity, and empowering readers with unbiased AI-driven insights.",
  keywords: "Parcae, Parcae.io, AI news analysis, media bias, journalism integrity, careers, job openings, media research, Web3, AI commentary, digital media, information integrity, work with us",
  openGraph: {
      title: "Parcae.io Careers | Join Our Mission for Media Integrity",
      description: "Discover career opportunities at Parcae.io. Join our team dedicated to analyzing media bias, enhancing journalism integrity, and empowering readers with unbiased AI-driven insights.",
      url: "https://parcae.io/careers",
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
    title: "Parcae.io Careers | Join Our Mission for Media Integrity",
    description: "Discover career opportunities at Parcae.io. Join our team dedicated to analyzing media bias, enhancing journalism integrity, and empowering readers with unbiased AI-driven insights.",
    image: "https://parcae.io/logo1280.png",
  }
}

export default function Contact(){

  return (
    <>
    <Head>
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://parcae.io/careers" />
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

    <ContactWrapper />
  </>
  );
};
