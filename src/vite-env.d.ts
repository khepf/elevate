/// <reference types="vite/client" />

// Extend the global JSX namespace to include Stripe custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': {
        'buy-button-id': string;
        'publishable-key': string;
      };
    }
  }
}

interface ImportMetaEnv {
  readonly VITE_STRIPE_PUBLISHABLE_KEY: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_CONTACT_EMAIL: string;
  readonly VITE_GA_TRACKING_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
