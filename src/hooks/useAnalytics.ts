import { useEffect } from 'react';
import { initGA, trackPageView } from '../utils/analytics';

export const useAnalytics = () => {
  useEffect(() => {
    const trackingId = import.meta.env.VITE_GA_TRACKING_ID;
    if (trackingId) {
      initGA(trackingId);
      trackPageView(window.location.pathname + window.location.search);
    }
  }, []);
};
