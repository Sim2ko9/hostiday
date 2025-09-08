import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import hostidayLogo from "@/assets/NewLogo.png";

interface NavigationProps {
  language: 'sk' | 'en';
  onLanguageChange: (lang: 'sk' | 'en') => void;
}

const Navigation = ({ language, onLanguageChange }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const translations = {
    sk: {
      services: 'Služby',
      howItWorks: 'Ako to funguje',
      pricing: 'Cenník',
      bookCall: 'Rezervovať hovor',
      language: 'Jazyk'
    },
    en: {
      services: 'Services',
      howItWorks: 'How it Works',
      pricing: 'Pricing',
      bookCall: 'Book Intro Call',
      language: 'Language'
    }
  };

  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 w-1/3">
            <img 
              src={hostidayLogo} 
              alt="Hostiday Logo" 
              className="h-8 w-auto"
            />
            <span className="text-white font-bold text-xl">Hostiday</span>
          </div>

          {/* Navigation Items - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-6 w-1/3">
            <button 
              onClick={() => scrollToSection('our-services')}
              className="text-white hover:text-white/80 transition-colors"
            >
              {t.services}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-white/80 transition-colors"
            >
              {t.pricing}
            </button>
          </div>
          
          {/* Right Section - Language Toggle and Call Button */}
          <div className="hidden md:flex items-center justify-end space-x-4 w-1/3">
            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onLanguageChange('sk')}
                className={`text-sm px-2 py-1 rounded ${language === 'sk' ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'}`}
              >
                SK
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`text-sm px-2 py-1 rounded ${language === 'en' ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            <Button 
              size="sm"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a href="https://calendar.app.google/E1pQYouK2gbYs2ZR7" target="_blank" rel="noopener noreferrer">
                {t.bookCall}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-gray-900 text-white">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Navigation Links */}
                  <div className="space-y-4">
                    <button 
                      onClick={() => scrollToSection('our-services')}
                      className="block w-full text-left text-lg font-medium hover:text-white/80 transition-colors"
                    >
                      {t.services}
                    </button>
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="block w-full text-left text-lg font-medium hover:text-white/80 transition-colors"
                    >
                      {t.pricing}
                    </button>
                  </div>

                  {/* Language Selection */}
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-sm font-semibold text-gray-300 mb-4">{t.language}</h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => onLanguageChange('sk')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          language === 'sk' 
                            ? 'bg-white text-gray-900' 
                            : 'bg-gray-800 text-white hover:bg-gray-700'
                        }`}
                      >
                        SK
                      </button>
                      <button
                        onClick={() => onLanguageChange('en')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          language === 'en' 
                            ? 'bg-white text-gray-900' 
                            : 'bg-gray-800 text-white hover:bg-gray-700'
                        }`}
                      >
                        EN
                      </button>
                    </div>
                  </div>

                  {/* Call to Action Button */}
                  <div className="border-t border-gray-700 pt-6">
                    <Button 
                      className="w-full bg-white text-gray-900 hover:bg-white/90"
                      asChild
                    >
                      <a href="https://calendar.app.google/E1pQYouK2gbYs2ZR7" target="_blank" rel="noopener noreferrer">
                        {t.bookCall}
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;