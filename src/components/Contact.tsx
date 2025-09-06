import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from '@emailjs/browser';

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
      messageSent: 'Správa odoslaná!',
      messageSentSuccess: 'Ďakujeme za vašu správu. Čoskoro vás budeme kontaktovať.',
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
      messageSent: 'Message sent!',
      messageSentSuccess: 'Thank you for your message. We will get back to you soon.',
      error: 'Error',
      errorMessage: 'Something went wrong. Please try again.'
    }
  };

  const t = translations[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if environment variables are loaded
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      console.log('EmailJS Config:', { publicKey, serviceId, templateId });

      if (!publicKey || !serviceId || !templateId) {
        throw new Error('EmailJS configuration is missing. Please check your .env file.');
      }

      // Initialize EmailJS with your public key
      emailjs.init(publicKey);

      // Send email using EmailJS with minimal parameters first
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      console.log('Template params:', templateParams);
      console.log('Sending to service:', serviceId, 'template:', templateId);

      // Try to send the email
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      ).catch((emailError) => {
        console.error('EmailJS send error:', emailError);
        console.error('Error type:', typeof emailError);
        console.error('Error keys:', Object.keys(emailError || {}));
        throw new Error(`EmailJS send failed: ${emailError?.message || emailError?.text || JSON.stringify(emailError)}`);
      });

      console.log('EmailJS Result:', result);

      if (result.status === 200) {
        toast({
          title: t.messageSent,
          description: t.messageSentSuccess,
        });

        // Reset form
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      console.error('Error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        error: error
      });
      
      let errorMessage = t.errorMessage;
      if (error instanceof Error) {
        errorMessage = `${t.errorMessage} Error: ${error.message}`;
      } else if (typeof error === 'string') {
        errorMessage = `${t.errorMessage} Error: ${error}`;
      } else if (error && typeof error === 'object') {
        errorMessage = `${t.errorMessage} Error: ${JSON.stringify(error)}`;
      }
      
      toast({
        title: t.error,
        description: errorMessage,
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