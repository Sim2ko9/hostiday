import hostidayLogo from "@/assets/NewLogo.png";
import { Link } from "react-router-dom";

interface FooterProps {
  language: 'sk' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const translations = {
    sk: {
      description: 'Zlepšujeme správu vašich krátkodobých prenájmov oslobodením vášho času.',
      serviceArea: 'Služby správy nehnuteľností na Slovensku',
      navigation: 'Navigácia',
      services: 'Služby',
      pricing: 'Cenník',
      howItWorks: 'Ako to funguje',
      legal: 'Právne',
      privacyPolicy: 'Zásady ochrany súkromia',
      termsOfService: 'Podmienky služby',
      connect: 'Kontakt',
      rightsReserved: 'Všetky práva vyhradené.'
    },
    en: {
      description: 'Improving your short-term rental management by freeing your time.',
      serviceArea: 'Property management services in Slovakia',
      navigation: 'Navigation',
      services: 'Services',
      pricing: 'Pricing',
      howItWorks: 'How it Works',
      legal: 'Legal',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      connect: 'Connect',
      rightsReserved: 'All rights reserved.'
    }
  };

  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1 pl-8 pr-16">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={hostidayLogo} 
                alt="Hostiday Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">Hostiday</span>
            </div>
            <p className="text-gray-300 mb-4">
              {t.description}
            </p>
            <p className="text-gray-400 text-sm">
              {t.serviceArea}
            </p>
          </div>

          {/* Navigation */}
          <div className="pr-4">
            <h3 className="text-lg font-semibold mb-4">{t.navigation}</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.services}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.pricing}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.howItWorks}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="pr-4">
            <h3 className="text-lg font-semibold mb-4">{t.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  {t.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  {t.termsOfService}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="pr-8">
            <h3 className="text-lg font-semibold mb-4">{t.connect}</h3>
            <div className="flex space-x-4">
              <a 
                href="mailto:kostka.smn@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Hostiday. {t.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;