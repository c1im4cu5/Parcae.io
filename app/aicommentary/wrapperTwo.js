"use client";

import React, { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../../components/footer'), { ssr: false });

const NewsWrapperTwo = () => {

  const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
     setIsVisible(true); // Or any client-only logic
   }, []);


  return (
    <>
    <div className="pl-5 pr-5">
      <div className="w-100 d-flex justify-content-center align-items-center" style={{ paddingTop: '80px' }}>
        <Suspense fallback={<div>Loading client-side components...</div>}>
          {isVisible && <Footer />}
        </Suspense>
      </div>
    </div>
    </>
);

};

export default NewsWrapperTwo;
