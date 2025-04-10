"use client";

import React, { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../components/footer'), { ssr: false });

export default function HomeWrapperTwo(){

  const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
     setIsVisible(true); // Or any client-only logic
   }, []);


  return (
    <>
      <Suspense fallback={<div>Loading client-side components...</div>}>
        {isVisible && <Footer />}
      </Suspense>
    </>
  );
};
