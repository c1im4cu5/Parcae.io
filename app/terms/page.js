
import Head from 'next/head';
import Script from 'next/script';

import TermsWrapper from './termsWrapper';

export const metadata = {
  title: "Parcae.io | Terms and Conditions",
  description: "Review Parcae's Terms of Service to better understand the site. Learn about our cookie policies, general policies and terms of service.",
  keywords: "Parcae, Parcae.io, contact Parcae, Parcae support, AI news analysis, media bias, journalism integrity, reporting styles, news site analysis, customer service, collaboration, media insights",
  openGraph: {
      title: "Parcae.io | Terms and Conditions",
      description: "Review Parcae's Terms of Service to better understand the site/app. Learn about our cookie policies, general policies and terms of service.",
      url: "https://parcae.io/terms",
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
    title: "Parcae.io | Terms and Conditions",
    description: "Review Parcae's Terms of Service to better understand the site/app. Learn about our cookie policies, general policies and terms of service.",
    image: "https://parcae.io/logo1280.png",
  }
}

export default function Terms(){

  return (
    <>
    <Head>
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://parcae.io/terms" />
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
    <TermsWrapper />
  </>
  );
}
