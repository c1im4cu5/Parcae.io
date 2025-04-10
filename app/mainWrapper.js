"use client";

import React, { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';

//SSR Imports
import HomeBottomSSR from '../components/homeBottomSSR';
import HomeTopSSR from '../components/homeTopSSR';
import Header from '../components/header';

//CSR Imports
const NavbarScroll = dynamic(() => import('../components/navigation'), { ssr: false });
const HomeCarousel = dynamic(() => import('./homeCarousel'), { ssr: false });

export default function HomeWrapper(){

  const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
     setIsVisible(true); // Or any client-only logic
   }, []);


  return (
    <>
    <Suspense fallback={<div>Loading client-side components...</div>}>
      {isVisible && <Header />}
    </Suspense>
    <Suspense fallback={<div>Loading client-side components...</div>}>
      {isVisible && <NavbarScroll />}
    </Suspense>
      <HomeTopSSR />
    <Suspense fallback={<div>Loading client-side components...</div>}>
      {isVisible && <HomeCarousel />}
    </Suspense>
    </>
  );
};
