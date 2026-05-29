import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHashScroll = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');

    // Try immediately, then retry a few times in case the DOM isn't ready
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 80);
      }
    };

    tryScroll();
  }, [hash]);
};

export default useHashScroll;