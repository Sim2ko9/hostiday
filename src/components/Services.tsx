import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  FileText, 
  Shield,
  Users,
  MessageCircle,
  Wrench,
  Camera,
  Banknote,
  Key,
  Gift,
  Sparkles
} from "lucide-react";

interface ServicesProps {
  language: 'sk' | 'en';
}

const Services = ({ language }: ServicesProps) => {
  const translations = {
    sk: {
      ourServices: 'Výhody krátkodobého prenájmu',
      servicesDescription: 'Prečo si vybrať krátkodobý prenájom s Hostiday.',
      whatWeProvide: 'Naše služby',
      bookCall: 'Rezervovať bezplatný hovor',
      mostPopular: 'Najobľúbenejšie',
      services: [
        {
          title: "Vyššie výnosy",
          subtitle: "O 30 % vyšší výnos ako pri dlhodobom prenájme",
          description: "",
          icon: DollarSign,
          features: [
            "Podľa všeobecných dát su výnosy pri krátkodobom prenájme až o 30% vyššie",
            "Dynamické oceňovanie",
            "Analýza trhu a konkurencie"
          ]
        },
        {
          title: "Bezstarostná správa",
          subtitle: "My spravujeme, vy zarábate – bez starostí a stresu",
          description: "",
          icon: FileText,
          features: [
            "Kompletná správa nehnuteľnosti",
            "Komunikácia s hosťami 24/7", 
            "Marketing a rezervácie",
            "Upratovanie a údržba",
            "Profesionálne fotografie",
            "Online check-in a smartlock"
          ]
        },
        {
          title: "Transparentný systém odmeňovania",
          subtitle: "Čisté a férové podmienky spolupráce",
          description: "",
          icon: Shield,
          features: [
            "75 % čistého príjmu pre vás",
            "25 % pre nás za kompletnú správu",
            "Žiadne skryté poplatky",
            "Transparentné účtovníctvo",
            "Mesačné reporty",
            "Férové podmienky spolupráce"
          ]
        }
      ],
      additionalServices: [
        { icon: Users, title: "Kompletná správa nehnuteľnosti", description: "Od prenájmu až po odovzdanie kľúčov – všetko vybavíme za vás." },
        { icon: MessageCircle, title: "Komunikácia s hosťami", description: "Profesionálna starostlivosť o hostí 24/7." },
        { icon: Camera, title: "Profesionálne fotografie", description: "Vyniknite na Airbnb a Bookingu kvalitnými fotkami." },
        { icon: Wrench, title: "Údržba a opravy", description: "Rýchle riešenie problémov, opravy do 50 € mesačne v cene." },
        { icon: Key, title: "Smartlock a online check-in", description: "Bezpečný vstup a jednoduchý príchod hostí." },
        { icon: Sparkles, title: "Pravidelné upratovanie", description: "Upratovanie na hotelovej úrovni s kontrolami kvality." }
      ]
    },
    en: {
      ourServices: 'Benefits of Short Term Rental',
      servicesDescription: 'Why choose short-term rental with Hostiday.',
      whatWeProvide: 'Our Services',
      bookCall: 'Book Your Free Intro Call',
      mostPopular: 'Most Popular',
      services: [
        {
          title: "Higher Returns",
          subtitle: "30% higher revenue compared to long-term rentals",
          description: "",
          icon: DollarSign,
          features: [
            "According to general data, short-term rental yields are up to 30% higher",
            "Dynamic pricing",
            "Market and competition analysis"
          ]
        },
        {
          title: "Stress-Free Management",
          subtitle: "We manage, you earn – hassle-free",
          description: "",
          icon: FileText,
          features: [
            "Complete property management",
            "Guest communication 24/7", 
            "Marketing & bookings",
            "Cleaning & maintenance",
            "Professional photography",
            "Online check-in & smartlock"
          ]
        },
        {
          title: "Transparent Revenue Sharing",
          subtitle: "Clear and fair partnership model",
          description: "",
          icon: Shield,
          features: [
            "75% net profit to you",
            "25% to us for complete management",
            "No hidden fees",
            "Transparent accounting",
            "Monthly reports",
            "Fair partnership terms"
          ]
        }
      ],
      additionalServices: [
        { icon: Users, title: "Complete Property Management", description: "From listing to check-out – we handle everything." },
        { icon: MessageCircle, title: "Guest Communication", description: "Professional care for your guests, 24/7." },
        { icon: Camera, title: "Professional Photography", description: "Stand out on Airbnb and Booking with stunning photos." },
        { icon: Wrench, title: "Maintenance & Repairs", description: "Fast solutions, repairs up to €50/month included." },
        { icon: Key, title: "Smartlock & Online Check-in", description: "Secure and seamless guest arrivals." },
        { icon: Sparkles, title: "Regular Cleaning", description: "Hotel-level cleaning with quality control." }
      ]
    }
  };

  const t = translations[language];
  const services = t.services;
  const additionalServices = t.additionalServices;

  return (
    <section id="services" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ourServices}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.servicesDescription}
          </p>
        </div>

        {/* Main Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="p-8 relative border-primary shadow-coral">
              {service.highlight && (
                <Badge className="absolute -top-3 left-4 bg-primary text-primary-foreground">
                  {service.highlight}
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-primary font-semibold mb-3">{service.subtitle}</p>
                <p className="text-muted-foreground">{service.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div id="our-services" className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.whatWeProvide}</h2>
          <p className="text-muted-foreground">
            {t.servicesDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {additionalServices.map((service, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{service.title}</h4>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-coral"
            asChild
          >
            <a href="https://calendar.app.google/E1pQYouK2gbYs2ZR7" target="_blank" rel="noopener noreferrer">
              {t.bookCall}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;