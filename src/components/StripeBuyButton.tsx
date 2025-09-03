import React, { useEffect, useRef } from 'react';

interface BuyButtonOption {
  id: string;
  title: string;
  description: string;
  period: string;
}

interface StripeBuyButtonProps {
  className?: string;
}

const StripeBuyButton: React.FC<StripeBuyButtonProps> = ({ 
  className = '' 
}) => {
  const monthlyContainerRef = useRef<HTMLDivElement>(null);
  const annualContainerRef = useRef<HTMLDivElement>(null);
  // const testContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef<boolean>(false);

  const buyButtonOptions: BuyButtonOption[] = [
    {
      id: 'buy_btn_1S3KMcK2XNix66Gb3GBqLMiq',
      title: 'Monthly Plan',
      description: 'Monthly solution for your business needs',
      period: 'per month'
    },
    {
      id: 'buy_btn_1S3KauK2XNix66GbHg8gZ5zk',
      title: 'Annual Plan',
      description: 'Annual solution for your business needs',
      period: 'per year'
    }
    // {
    //   id: 'buy_btn_1S3KoEK2XNix66GbRwn8jmbB',
    //   title: 'Test Purchase',
    //   description: 'Test option for development',
    //   period: 'test'
    // }
  ];

  useEffect(() => {
    const loadStripeScript = () => {
      // Check if the script is already loaded
      if (scriptLoadedRef.current || document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')) {
        scriptLoadedRef.current = true;
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/buy-button.js';
      script.async = true;
      script.onload = () => {
        scriptLoadedRef.current = true;
      };
      document.head.appendChild(script);
    };

    loadStripeScript();
  }, []);

  useEffect(() => {
    // Clean up and create stripe-buy-button elements
    const createBuyButton = (container: HTMLDivElement | null, buyButtonId: string) => {
      if (container) {
        container.innerHTML = '';
        
        const stripeBuyButton = document.createElement('stripe-buy-button');
        stripeBuyButton.setAttribute('buy-button-id', buyButtonId);
        stripeBuyButton.setAttribute('publishable-key', import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');
        
        container.appendChild(stripeBuyButton);
      }
    };

    // Use hardcoded IDs to avoid dependency issues
    createBuyButton(monthlyContainerRef.current, 'buy_btn_1S3KMcK2XNix66Gb3GBqLMiq');
    createBuyButton(annualContainerRef.current, 'buy_btn_1S3KauK2XNix66GbHg8gZ5zk');
    // createBuyButton(testContainerRef.current, 'buy_btn_1S3KoEK2XNix66GbRwn8jmbB');
  }, []);

  return (
    <section id="purchase" className={`py-16 bg-gradient-to-br from-blue-50 to-indigo-100 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the next step in transforming your business with our premium services. 
            Choose the plan that best fits your needs.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {buyButtonOptions[0].title}
              </h3>
              <p className="text-gray-600 mb-2">
                {buyButtonOptions[0].description}
              </p>
              <p className="text-sm text-gray-500">
                Billed {buyButtonOptions[0].period}
              </p>
            </div>
            
            <div ref={monthlyContainerRef} className="flex justify-center mb-6">
              {/* Monthly stripe buy button will be inserted here */}
            </div>
            
            <div className="text-center text-sm text-gray-500">
              <p>✓ All premium features included</p>
              <p>✓ Dedicated support</p>
              <p>✓ Cancel anytime</p>
            </div>
          </div>

          {/* Annual Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {buyButtonOptions[1].title}
              </h3>
              <p className="text-gray-600 mb-2">
                {buyButtonOptions[1].description}
              </p>
              <p className="text-sm text-gray-500">
                Billed {buyButtonOptions[1].period}
              </p>
            </div>
            
            <div ref={annualContainerRef} className="flex justify-center mb-6">
              {/* Annual stripe buy button will be inserted here */}
            </div>
            
            <div className="text-center text-sm text-gray-500">
              <p>✓ All premium features included</p>
              <p>✓ Dedicated support</p>
              <p>✓ Save time with annual billing</p>
            </div>
          </div>

          {/* Test Purchase */}
          {/* <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Test Purchase
              </h3>
              <p className="text-gray-600 mb-2">
                Test option for development
              </p>
              <p className="text-sm text-gray-500">
                test
              </p>
            </div>
            
            <div ref={testContainerRef} className="flex justify-center mb-6">
              {/* Test stripe buy button will be inserted here */}
            {/* </div>
            
            <div className="text-center text-sm text-gray-500">
              <p>✓ Test environment</p>
              <p>✓ Development purposes</p>
              <p>✓ No actual charges</p>
            </div>
          </div> */}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500 max-w-2xl mx-auto">
          <p className="mb-2">Secure payment powered by Stripe</p>
          <p>✓ 30-day money-back guarantee • ✓ SSL encrypted • ✓ PCI compliant</p>
        </div>
      </div>
    </section>
  );
};

export default StripeBuyButton;
