import 'bootstrap/dist/css/bootstrap.min.css';
import localFont from "next/font/local";
import "./globals.css";
import "./App.css"
import { AgeProvider } from '../providers/ageProvider';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Parcae.io",
  description: "eVow.io | Smart Contracts for Finance, P2P, MEV, Employment and More!",
};

export default function RootLayout({ children }) {
  return (
    <AgeProvider>
      <html lang="en">
      <head>
      <meta name="robots" content="index, follow" />
      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      {/* Bootstrap JS Bundle (includes Popper) */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </head>
        <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning={true}>
          {children}
        </body>
      </html>
    </AgeProvider>
  );
}
