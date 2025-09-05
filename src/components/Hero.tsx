import { Button } from "@/components/ui/button";
import hostidayLogo from "@/assets/hostiday-logo-new.png";

interface HeroProps {
  language: 'sk' | 'en';
}

const Hero = ({ language }: HeroProps) => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const translations = {
    sk: {
      title: 'Hostiday',
      headline: 'Správa nehnuteľností, ktorá skutočne funguje',
      description: 'Prijímame našich prvých 3 klientov. Premeňte svoj krátkodobý prenájom na bezstarostný príjmový tok.',
      bookCall: 'Rezervovať bezplatný hovor',
      viewServices: 'Zobraziť naše služby'
    },
    en: {
      title: 'Hostiday',
      headline: 'Property Management That Actually Works',
      description: 'We\'re onboarding our first 3 clients. Transform your short-term rental into a hands-free income stream.',
      bookCall: 'Book a Free Intro Call',
      viewServices: 'View Our Services'
    }
  };

  const t = translations[language];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={hostidayLogo} 
              alt="Hostiday Logo" 
              className="h-20 w-auto mx-auto mb-6"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {t.title}
            </h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl md:text-4xl font-semibold text-white/90 mb-8">
            {t.headline}
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-lg"
              asChild
            >
              <a href="https://calendar.app.google/E1pQYouK2gbYs2ZR7" target="_blank" rel="noopener noreferrer">
                {t.bookCall}
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/80 text-white hover:bg-white/10 hover:border-white text-lg px-8 py-6 bg-transparent"
              onClick={scrollToServices}
            >
              {t.viewServices}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;