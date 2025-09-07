import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

interface CalculatorProps {
  language: 'sk' | 'en';
}

const Calculator = ({ language }: CalculatorProps) => {
  const [nightlyRate, setNightlyRate] = useState([80]);
  const [occupancy, setOccupancy] = useState([60]);
  const [hoursPerWeek, setHoursPerWeek] = useState([8]);

  const translations = {
    sk: {
      title: 'Skryté náklady správy prenájmu',
      subtitle: 'Správa krátkodobého prenájmu zaberá viac než len čas. Vypočítajte si, čo by ste mohli získať späť už za minútu.',
      nightlyRate: 'Priemerná nočná sadzba (€)',
      nightlyRateHint: 'Koľko v priemere účtujete za noc?',
      occupancy: 'Priemerná obsadenosť (%)',
      occupancyHint: 'Koľko nocí mesačne máte obsadených?',
      hoursPerWeek: 'Hodiny správy týždenne (h)',
      hoursPerWeekHint: 'Koľko hodín týždenne strávite správou prenájmu?',
      potentialUplift: 'Odhadovaný mesačný príjem',
      timeReclaimed: 'Čas, ktorý získate späť ročne',
      newRevenue: 'Ročný príjem (-25%)',
      currency: '€',
      days: 'Dní',
      hours: 'hodín'
    },
    en: {
      title: 'The Hidden Costs of Rental Management',
      subtitle: 'Managing a short-term rental takes more than just a time. Calculate what you could get back in just one minute.',
      nightlyRate: 'Average nightly rate (€)',
      nightlyRateHint: 'How much do you usually charge per night?',
      occupancy: 'Average occupancy rate (%)',
      occupancyHint: 'What number of nights are booked monthly?',
      hoursPerWeek: 'Weekly hours spent managing (h)',
      hoursPerWeekHint: 'How many hours per week do you spend managing?',
      potentialUplift: 'Estimated Monthly Income',
      timeReclaimed: 'Time You Reclaim Annually',
      newRevenue: 'Annual Income (-25%)',
      currency: '€',
      days: 'Days',
      hours: 'hours'
    }
  };

  const t = translations[language];

  // Calculations based on new logic
  const estimatedMonthlyIncome = Math.round((nightlyRate[0] * occupancy[0] / 100 * 30) / 10) * 10; // Based on nightly rate and occupancy
  const timeReclaimedDays = Math.round((hoursPerWeek[0] * 52) / 24);
  const timeReclaimedHours = hoursPerWeek[0] * 52;
  const annualIncome = Math.round((nightlyRate[0] * occupancy[0] / 100 * 365 * 0.75) / 100) * 100; // Annual income after costs (75%)

  return (
    <section id="calculator" className="py-12 bg-gradient-to-br from-secondary via-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Calculator Controls */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-medium">{t.nightlyRate}</span>
                  <span className="text-2xl font-bold text-primary">{t.currency}{nightlyRate[0]}</span>
                </div>
                <Slider
                  value={nightlyRate}
                  onValueChange={setNightlyRate}
                  max={300}
                  min={20}
                  step={10}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground mt-2">{t.nightlyRateHint}</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-medium">{t.occupancy}</span>
                  <span className="text-2xl font-bold text-primary">{occupancy[0]}%</span>
                </div>
                <Slider
                  value={occupancy}
                  onValueChange={setOccupancy}
                  max={100}
                  min={20}
                  step={5}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground mt-2">{t.occupancyHint}</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-medium">{t.hoursPerWeek}</span>
                  <span className="text-2xl font-bold text-primary">{hoursPerWeek[0]} hrs</span>
                </div>
                <Slider
                  value={hoursPerWeek}
                  onValueChange={setHoursPerWeek}
                  max={40}
                  min={2}
                  step={1}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground mt-2">{t.hoursPerWeekHint}</p>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <Card className="p-6 text-center border-primary/20 shadow-coral">
                <div className="text-sm text-muted-foreground mb-2">{t.potentialUplift}</div>
                <div className="text-3xl font-bold text-primary">{t.currency}{estimatedMonthlyIncome.toLocaleString()}</div>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">{t.timeReclaimed}</div>
                <div className="text-3xl font-bold">{timeReclaimedHours} {t.hours}</div>
              </Card>

              <Card className="p-6 text-center border-primary/20 shadow-coral">
                <div className="text-sm text-muted-foreground mb-2">{t.newRevenue}</div>
                <div className="text-3xl font-bold text-primary">{t.currency}{annualIncome.toLocaleString()}</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;