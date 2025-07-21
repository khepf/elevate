// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Initialize gtag if not already available
export const initGA = (trackingId: string) => {
  if (typeof window !== 'undefined' && !window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }
  console.log(`Google Analytics initialized with tracking ID: ${trackingId}`);
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', 'button', `${buttonName} - ${location}`);
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent('form_submit', 'engagement', `${formName} - ${success ? 'success' : 'error'}`);
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll', 'engagement', `${percentage}%`);
};

// Track external link clicks
export const trackExternalLink = (url: string) => {
  trackEvent('click', 'external_link', url);
};

// Track when users reach the contact section
export const trackContactSectionView = () => {
  trackEvent('view', 'contact_section', 'contact_form_visible');
};

// Track when users spend significant time on services
export const trackServiceEngagement = (serviceName: string, timeSpent: number) => {
  if (timeSpent > 10000) { // 10 seconds
    trackEvent('engagement', 'service_interest', serviceName, timeSpent);
  }
};

// Track navigation clicks
export const trackNavigation = (sectionName: string) => {
  trackEvent('click', 'navigation', sectionName);
};
