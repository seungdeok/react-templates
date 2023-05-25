import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [coordi, setCoordi] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    setCoordi({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return coordi;
};
