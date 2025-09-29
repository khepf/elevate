import React from 'react'
import { Monitor, Printer, Home, CheckCircle, Clock, Phone } from 'lucide-react'

const InstallsPage: React.FC = () => {
  const services = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "New Computer Setup",
      description: "Complete setup and configuration of your new desktop or laptop computer",
      features: [
        "Unboxing and physical setup",
        "Operating system configuration",
        "Software installation and updates",
        "Data transfer from old computer",
        "Security software installation",
        "User account and password setup"
      ]
    },
    {
      icon: <Printer className="h-8 w-8" />,
      title: "Printer Installation",
      description: "Professional printer setup and network configuration",
      features: [
        "Printer unboxing and assembly",
        "Driver installation and configuration",
        "Network/WiFi connectivity setup",
        "Mobile printing setup",
        "Test printing and calibration",
        "User training and documentation"
      ]
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Wireless Network Setup",
      description: "Optimize your home network for all connected devices",
      features: [
        "Router and modem configuration",
        "WiFi network setup and security",
        "Device connectivity assistance",
        "Network speed optimization",
        "Smart home device integration",
        "Troubleshooting and support"
      ]
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Mobile Device Setup",
      description: "Complete setup and configuration of smartphones and tablets",
      features: [
        "Phone and tablet activation",
        "Account setup and configuration",
        "App installation and organization",
        "Data transfer from old device",
        "Email and cloud setup",
        "Security and privacy settings"
      ]
    }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "No More Tech Headaches",
      description: "Stop struggling with confusing setup guides and error messages. We handle all the technical stuff."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: "We Come to You",
      description: "No need to pack up your equipment or wait in store lines. We work in your home at your convenience."
    },
    {
      icon: <Phone className="h-8 w-8 text-red-500" />,
      title: "Personal Service You Can Trust",
      description: "Local technicians who explain everything in plain English and treat your home with respect."
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Stress-Free Computer & Technology Setup
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              Skip the frustration. Our experts come to your home and set up everything for you.
            </p>
            <p className="text-lg mb-8 opacity-80">
              ✓ No technical knowledge required ✓ Same-day service available ✓ 100% satisfaction guaranteed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+15134946777"
                className="bg-white text-blue-600 px-10 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors"
              >
                📞 Call Now: (513) 494-6777
              </a>
              <a 
                href="#pricing"
                className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                See Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-blue-50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">Same Day</div>
              <div className="text-sm text-gray-600">Service Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">20+ Years</div>
              <div className="text-sm text-gray-600">Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Setup Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From unboxing to final configuration, we handle everything so you can start using your new technology immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Setup Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we transform your technology setup experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Placeholder images - replace with actual images later */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src="/home-office.jpg" 
                  alt="Complete Home Office Setup" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Complete Home Office Setup</h3>
                <p className="text-sm text-gray-600">Computer, Printer, Wireless Router</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src="/printer.jpg" 
                  alt="Printer Setup Process" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Printer Installation</h3>
                <p className="text-sm text-gray-600">Complete printer setup and testing</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src="/mobile-device.jpg" 
                  alt="Mobile Device Setup Process" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Mobile Device Setup</h3>
                <p className="text-sm text-gray-600">Smartphone and tablet configuration</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src="/wireless-router.jpg" 
                  alt="Wireless Router Setup Process" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Wireless Router Setup</h3>
                <p className="text-sm text-gray-600">Network configuration and optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Setup Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees. Pay only for the services you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">New Computer Setup</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$200</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Desktop or Laptop setup</li>
                <li>• Security & Updates installation</li>
                <li>• Data transfer included</li>
                <li>• Network configuration</li>
                <li>• Bloatware Removal</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Wireless Router Setup</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$200</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Connect to your Internet Service Provider</li>
                <li>• Connect up to 5 devices to Wi-Fi</li>
                <li>• Internal network configuration</li>
                <li>• Secure network from intruders</li>
                <li>• Speed optimization & testing</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Printer Setup</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$100</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Printer unboxing & assembly</li>
                <li>• Driver installation & updates</li>
                <li>• Wi-Fi & USB connectivity</li>
                <li>• Mobile printing setup</li>
                <li>• Test printing & calibration</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Device Setup</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">$200</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Phone & tablet activation</li>
                <li>• Account setup & configuration</li>
                <li>• App installation & organization</li>
                <li>• Data transfer from old device</li>
                <li>• Email & cloud setup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to End Your Tech Frustration?
          </h2>
          <p className="text-xl mb-4 opacity-90">
            Call now and we can often schedule same-day service
          </p>
          <p className="text-lg mb-8 opacity-80">
            Free consultation • No obligation • 100% satisfaction guaranteed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <a 
              href="tel:+15134946777" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              📞 Call (513) 494-6777
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Online
            </a>
          </div>
          <p className="text-sm mt-4 opacity-75">Available 7 days a week</p>
        </div>
      </section>
    </div>
  )
}

export default InstallsPage