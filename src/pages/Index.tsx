import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<'sk' | 'en'>('sk');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <Calculator language={language} />
      <Services language={language} />
      <Contact language={language} />
      <Footer language={language} onLanguageChange={setLanguage} />
    </div>
  );
};

export default Index;
