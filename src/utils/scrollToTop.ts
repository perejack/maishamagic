import { useEffect } from 'react';

// Utility to scroll to top when navigating to new pages
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

// Hook to automatically scroll to top on route changes
export const useScrollToTop = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
};
