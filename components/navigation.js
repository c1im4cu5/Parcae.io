"use client";

import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BootstrapClientWrapper from "./bootstrapComponent";

const NavbarScroll = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);

  return (
    <BootstrapClientWrapper>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          backgroundColor: '#3034fa',
          color: 'white',
          width: '100%',
          maxWidth: '100vw',
          overflowX: 'hidden',
        }}
      >
        <div className="container">
          <Link href="/" className="navbar-brand" style={{ color: 'white' }}>
            <Image src="/logo192.png" width={50} height={50} alt="Logo" />
            <span style={{ paddingLeft: '10px' }}>Parcae</span>
          </Link>

          {isSmallScreen ? (
            <button className="navbar-toggler" type="button" onClick={toggleNav}>
              <span className="navbar-toggler-icon" style={{ color: 'white' }}/>
            </button>
          ) : (
            <div className="collapse navbar-collapse justify-content-end" >
              <ul className="navbar-nav">
                {[
                  { path: '/', label: 'News' },
                  { path: '/about', label: 'About' },
                  { path: '/aicommentary', label: 'AI Commentary' },
                  { path: '/contact', label: 'Contact' },
                ].map((item) => (
                  <li key={item.path} className="nav-item">
                    <Link href={item.path} className="nav-link nav-link-shrink" style={{ color: 'white' }} onClick={closeNav}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {isSmallScreen && isNavOpen && (
            <div className="navbar-collapse" style={{ color: 'white' }}>
              <ul className="navbar-nav" style={{ color: 'white' }}>
                {[
                  { path: '/', label: 'News' },
                  { path: '/about', label: 'About' },
                  { path: '/aicommentary', label: 'AI Commentary' },
                  { path: '/contact', label: 'Contact' },
                ].map((item) => (
                  <li key={item.path} className="nav-item">
                    <Link href={item.path} className="nav-link" style={{ color: 'white' }} onClick={closeNav}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </BootstrapClientWrapper>
  );
};

export default NavbarScroll;
