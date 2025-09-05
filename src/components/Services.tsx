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

const Services = () => {
  const services = [
    {
      title: "Revenue Share",
      subtitle: "Profit Share Program 75%/25%",
      description: "Maximize your income with our transparent profit-sharing system. You receive 75% of net profit.",
      icon: DollarSign,
      highlight: "Most Popular",
      features: [
        "75% profit share to you",
        "Complete property management",
        "Marketing & bookings",
        "Guest communication",
        "Cleaning & maintenance",
        "Dynamic pricing optimization"
      ]
    },
    {
      title: "Professional Management",
      subtitle: "Full-Service Property Management",
      description: "Complete care for your property through our short-term rental management service.",
      icon: FileText,
      features: [
        "Complete property management",
        "Professional guest services", 
        "Marketing & advertising",
        "Maintenance coordination",
        "Repairs up to 50 EUR monthly",
        "Corporate partnerships"
      ]
    },
    {
      title: "Fixed Rental",
      subtitle: "Guaranteed Monthly Income",
      description: "Fixed monthly income without the risk of vacancy periods.",
      icon: Shield,
      features: [
        "Guaranteed monthly payment",
        "No vacancy risk",
        "Possible contract upgrades",
        "Professional photography",
        "Regular cleaning",
        "Systematic maintenance"
      ]
    }
  ];

  const additionalServices = [
    { icon: Users, title: "Complete Property Management", description: "Property management without worries" },
    { icon: MessageCircle, title: "Guest Communication", description: "Before, during and after stay" },
    { icon: Camera, title: "Professional Photography", description: "Stunning presentation on platforms" },
    { icon: Wrench, title: "Maintenance & Repairs", description: "Repairs covered up to 50 EUR monthly" },
    { icon: Banknote, title: "Corporate Partnerships", description: "Long-term and short-term rentals" },
    { icon: Key, title: "Smartlock & Online Check-in", description: "Security and control for guests" },
    { icon: Gift, title: "Collaboration with Companies", description: "Extended timeframe accommodations" },
    { icon: Sparkles, title: "Regular Cleaning", description: "Hotel-quality cleaning with controls" }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete services for maximum profit from your property.
          </p>
        </div>

        {/* Main Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className={`p-8 relative ${index === 0 ? 'border-primary shadow-coral' : ''}`}>
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
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">What We Provide</h3>
          <p className="text-muted-foreground">
            Complete services for maximum profit from your property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
              Book Your Free Intro Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;