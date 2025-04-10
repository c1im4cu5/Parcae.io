import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Header = () => {
  return (
      <head className="header">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8933756894844393"
             crossorigin="anonymous"></script>
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
    );
};

export default Header;
