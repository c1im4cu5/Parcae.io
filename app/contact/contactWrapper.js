"use client";

import React, { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic'

//SSR Imports
import ContactSSR from './contactSSR';

//CSR Imports
const NavbarScroll = dynamic(() => import('../../components/navigation'), { ssr: false });
const Footer = dynamic(() => import('../../components/footer'), { ssr: false });
const Back = dynamic(() => import('../../components/back'), { ssr: false });

export default function ContactWrapper(){

  const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
     setIsVisible(true); // Or any client-only logic
   }, []);

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
    <Suspense fallback={<div>Loading client-side components...</div>}>
      {isVisible && <NavbarScroll />}
    </Suspense>
    <div className="pl-5 pr-5">
      <div className="w-100 d-flex justify-content-center align-items-center" style={{ paddingTop: '80px' }}>
        <Suspense fallback={<div></div>}>
          {isVisible && <Back />}
        </Suspense>
      </div>
      <ContactSSR />
      <Suspense fallback={<div>Loading client-side components...</div>}>
        {isVisible && <Footer />}
      </Suspense>
    </div>
  </>
  );
};
