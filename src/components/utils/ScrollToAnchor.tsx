import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToAnchor = () => {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    } else {
      lastHash.current = '';
    }

    if (lastHash.current) {
        // Use a slight delay to allow for page rendering/mounting
        setTimeout(() => {
            const element = document.getElementById(lastHash.current);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300); // 300ms is usually safe for most react apps
    }
  }, [location]);

  return null;
};
