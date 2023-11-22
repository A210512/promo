'use client'
import React, { useEffect, useState } from 'react';

const HeaderImg = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <img src={isMobile ? '/mobileHeader.svg' : '/header.svg'} className="w-[100vh] md:w-auto" />
    </>
  );
};

export default HeaderImg;
