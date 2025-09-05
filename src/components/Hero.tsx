import { Button } from "@/components/ui/button";
import hostidayLogo from "@/assets/NewLogo.png";
import heroBackground from "@/assets/New background.png";

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
      headline: 'Profesionálna správa Airbnb a krátkodobých prenájmov v Bratislave',
      description: 'Zvýšte svoje príjmy a zbavte sa starostí s prenájmom. Kompletná správa apartmánov a bytov – od hostí až po upratovanie.',
      bookCall: 'Rezervovať bezplatný hovor',
      viewServices: 'Zobraziť naše služby'
    },
    en: {
      title: 'Hostiday',
      headline: 'Professional Airbnb and Short-Term Rental Management in Bratislava',
      description: 'Boost your rental income and enjoy peace of mind. Full property management – from guest communication to cleaning and maintenance.',
      bookCall: 'Book a Free Intro Call',
      viewServices: 'View Our Services'
    }
  };

  const t = translations[language];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={hostidayLogo} 
              alt="Hostiday Logo" 
              className="h-20 w-auto mx-auto mb-6"
            />
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t.title}
            </h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-xl md:text-3xl font-semibold text-white/90 mb-4">
            {t.headline}
          </h2>
          
          <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
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