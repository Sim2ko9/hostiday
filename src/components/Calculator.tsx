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
      title: 'Už platíte náklady.',
      subtitle: 'Je to stres, čas a zmeškané príležitosti. Pozrite si, čo by ste mohli získať späť za 60 sekúnd.',
      nightlyRate: 'Priemerná nocná sadzba',
      occupancy: 'Priemerná obsadenosť',
      hoursPerWeek: 'Hodiny strávené správou za týždeň',
      potentialUplift: 'Potenciálne ročné zvýšenie',
      timeReclaimed: 'Čas, ktorý získate späť ročne',
      newRevenue: 'Nový potenciálny príjem',
      currency: '€',
      days: 'Dní',
      hours: 'hodín'
    },
    en: {
      title: 'You\'re already paying the cost.',
      subtitle: 'It\'s in stress, time, and missed opportunities. See what you could reclaim in 60 seconds.',
      nightlyRate: 'Average Nightly Rate',
      occupancy: 'Average Occupancy',
      hoursPerWeek: 'Hours Spent Managing Per Week',
      potentialUplift: 'Potential Annual Uplift',
      timeReclaimed: 'Time You Reclaim Annually',
      newRevenue: 'New Potential Revenue',
      currency: '£',
      days: 'Days',
      hours: 'hours'
    }
  };

  const t = translations[language];

  // Calculations based on the image
  const potentialAnnualUplift = Math.round((nightlyRate[0] * occupancy[0] / 100 * 365 * 0.25) / 10) * 10;
  const timeReclaimedDays = Math.round((hoursPerWeek[0] * 52) / 24);
  const timeReclaimedHours = hoursPerWeek[0] * 52;
  const newPotentialRevenue = Math.round((nightlyRate[0] * occupancy[0] / 100 * 365 * 1.25) / 100) * 100;

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-secondary via-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
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
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <Card className="p-6 text-center border-primary/20 shadow-coral">
                <div className="text-sm text-muted-foreground mb-2">{t.potentialUplift}</div>
                <div className="text-3xl font-bold text-primary">{t.currency}{potentialAnnualUplift.toLocaleString()}</div>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">{t.timeReclaimed}</div>
                <div className="text-3xl font-bold">{timeReclaimedDays} {t.days}</div>
                <div className="text-sm text-muted-foreground">({timeReclaimedHours} {t.hours})</div>
              </Card>

              <Card className="p-6 text-center border-primary/20 shadow-coral">
                <div className="text-sm text-muted-foreground mb-2">{t.newRevenue}</div>
                <div className="text-3xl font-bold text-primary">{t.currency}{newPotentialRevenue.toLocaleString()}</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;