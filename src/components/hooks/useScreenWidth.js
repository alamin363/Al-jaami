"use client"
import { useEffect, useState } from 'react';

export default function useScreenWidth() {

  const [windowWidth, setWindowWidth] = useState(null);

  const isWindow = typeof window !== 'undefined';

  const getWidth = () => isWindow ? window.innerWidth : windowWidth;

  const resize = () => setWindowWidth(getWidth());

  useEffect(() => {
    if (isWindow) {
      setWindowWidth(getWidth());

      window.addEventListener('resize', resize);

      return () => window.removeEventListener('resize', resize);
    }
    //eslint-disable-next-line
  }, [isWindow, resize]);

  const mobile = 270 < windowWidth && windowWidth < 768;
  const tablet = 768 < windowWidth && windowWidth < 1024;
  const laptop = 1024 < windowWidth && windowWidth < 1440;
  const desktop = 1440 < windowWidth && windowWidth < 4000;
 

  return { mobile, tablet, laptop, desktop };
}