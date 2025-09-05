import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactProps {
  language: 'sk' | 'en';
}

const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const translations = {
    sk: {
      getInTouch: 'Kontaktujte nás',
      description: 'Pripravení premeniť vašu nehnuteľnosť na ziskový podnik? Pohovorme si.',
      sendMessage: 'Pošlite nám správu',
      yourName: 'Vaše meno',
      yourEmail: 'Váš email',
      yourPhone: 'Váš telefón (nepovinné)',
      message: 'Povedzte nám o vašej nehnuteľnosti a cieľoch...',
      sendBtn: 'Odoslať správu',
      sending: 'Odosielam...',
      contactInfo: 'Kontaktné informácie',
      email: 'Email',
      freeConsultation: 'Bezplatná konzultácia',
      bookCall: 'Rezervovať hovor',
      scheduleNow: 'Naplánovať teraz',
      serviceArea: 'Oblasť služieb',
      serviceDesc: 'Služby správy nehnuteľností',
      readyToStart: 'Pripravení začať?',
      opportunity: 'Momentálne prijímame našich prvých 3 klientov. Nevynechajte túto príležitosť.',
      bookFreeCall: 'Rezervovať bezplatný hovor',
      messagePrepared: 'Správa pripravená!',
      emailWillOpen: 'Váš emailový klient sa otvorí na odoslanie správy.',
      error: 'Chyba',
      errorMessage: 'Niečo sa pokazilo. Skúste to znova.'
    },
    en: {
      getInTouch: 'Get In Touch',
      description: 'Ready to transform your property into a profitable venture? Let\'s talk.',
      sendMessage: 'Send us a message',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      yourPhone: 'Your Phone (Optional)',
      message: 'Tell us about your property and goals...',
      sendBtn: 'Send Message',
      sending: 'Sending...',
      contactInfo: 'Contact Information',
      email: 'Email',
      freeConsultation: 'Free Consultation',
      bookCall: 'Book your intro call',
      scheduleNow: 'Schedule Now',
      serviceArea: 'Service Area',
      serviceDesc: 'Property management services',
      readyToStart: 'Ready to get started?',
      opportunity: 'We\'re currently onboarding our first 3 clients. Don\'t miss out on this opportunity.',
      bookFreeCall: 'Book Free Intro Call',
      messagePrepared: 'Message prepared!',
      emailWillOpen: 'Your email client will open to send the message.',
      error: 'Error',
      errorMessage: 'Something went wrong. Please try again.'
    }
  };

  const t = translations[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, you would send this to your backend
      // For now, we'll simulate the email functionality
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
      `;

      // Create mailto link
      const mailtoLink = `mailto:kostka.smn@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      toast({
        title: t.messagePrepared,
        description: t.emailWillOpen,
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: t.error,
        description: t.errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.getInTouch}</h2>
            <p className="text-lg text-muted-foreground">
              {t.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">{t.sendMessage}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder={t.yourName}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t.yourEmail}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder={t.yourPhone}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder={t.message}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 shadow-coral"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t.sending : t.sendBtn}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">{t.contactInfo}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t.email}</h4>
                      <p className="text-muted-foreground">kostka.smn@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t.freeConsultation}</h4>
                      <p className="text-muted-foreground">{t.bookCall}</p>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-primary hover:text-primary/80"
                        asChild
                      >
                        <a href="https://calendar.app.google/E1pQYouK2gbYs2ZR7" target="_blank" rel="noopener noreferrer">
                          {t.scheduleNow}
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t.serviceArea}</h4>
                      <p className="text-muted-foreground">{t.serviceDesc}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6 border-primary/20 bg-gradient-hero text-white">
                <h4 className="font-bold mb-2">{t.readyToStart}</h4>
                <p className="mb-4 text-white/90">
                  {t.opportunity}
                </p>
                <Button 
                  variant="secondary" 
                  className="bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <a href="https://calendar.app.google/E1pQYouK2gbYs2ZR7" target="_blank" rel="noopener noreferrer">
                    {t.bookFreeCall}
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;