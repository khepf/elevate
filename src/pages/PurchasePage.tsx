import React from 'react'
import StripeBuyButton from '../components/StripeBuyButton'

const PurchasePage: React.FC = () => {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Purchase Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get started? Choose from our service packages and let's bring your project to life.
          </p>
        </div>
        <StripeBuyButton />
      </div>
    </div>
  )
}

export default PurchasePage