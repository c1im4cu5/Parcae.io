"use client";

import React, { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic'

//SSR Imports
import CommentarySSR from './commentarySSR';

//CSR Imports
const NavbarScroll = dynamic(() => import('../../../components/navigation'), { ssr: false });
const Footer = dynamic(() => import('../../../components/footer'), { ssr: false });
const Back = dynamic(() => import('../../../components/back'), { ssr: false });

export default function CommentaryWrapper({ params }) {

  const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
     setIsVisible(true); // Or any client-only logic
   }, []);

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

      <Suspense fallback={<div>Loading article...</div>}>
        <CommentarySSR params={params} />
      </Suspense>

      <Suspense fallback={<div></div>}>
        {isVisible && <Footer />}
      </Suspense>

    </div>
    </>
  );
}
