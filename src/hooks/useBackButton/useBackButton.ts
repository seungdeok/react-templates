import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useBackButton = (callback: () => void) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleBackButton = (event: PopStateEvent) => {
      event.preventDefault();
      callback();
    };

    window.addEventListener('popstate', handleBackButton);
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [callback, pathname]);
};
