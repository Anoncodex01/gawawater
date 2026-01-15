import { Quote, CheckCircle } from 'lucide-react';

const benefits = [
  'Whole-home protection from a single device on the main line.',
  'No more dependence on expensive bottled water and charcoal.',
  'Safe water for drinking, cooking, showering and washing baby bottles.',
  'Monthly subscription that fits the family budget, paid via mobile money.',
  'Fewer plastic bottles, less household stress, more money for Takadini\'s future.',
];

export default function CustomerStory() {
  return (
    <section className="py-24 bg-gradient-to-b from-cyan-50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-6 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-6">
            Customer story
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            From fear to freedom:{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Marichui's family and Gawawater.
            </span>
          </h2>
        </div>

        <div className="backdrop-blur-lg bg-white/80 border border-white/40 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-10 lg:p-12">
              <Quote className="w-12 h-12 text-cyan-500 mb-6" />

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  After her youngest son Takadini spent a week in hospital with a severe water-borne infection,
                  Marichui turned to bottled water for everything she could — drinking, cooking, baby formula.
                  But the fear stayed: her family still brushed their teeth, showered, and washed vegetables
                  with unsafe tap water.
                </p>

                <p>
                  The cost of this "almost safe" solution quickly became unbearable. Towers of empty plastic
                  bottles grew by the door while a mountain of receipts quietly drained the family budget.
                </p>

                <p>
                  A whole-home system felt out of reach until Marichui saw a community poster:
                  <span className="font-semibold text-cyan-700">
                    {' '}"Gawawater – Clean water for life. Not just for drinking. Pay as you go."
                  </span>
                </p>

                <p>
                  For around 90% cheaper than what she was already spending on bottled water and charcoal,
                  a certified Gawawater technician installed a single unit at her main line. No power.
                  Minimal disruption. Paid via mobile money.
                </p>

                <p className="font-semibold text-gray-900">
                  Today, Takadini splashes in the bath without fear. Tunde brushes his teeth straight from
                  the tap. The constant clatter of plastic bottles has been replaced by quiet confidence in
                  every shower, every pot of rice, every glass of water.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-8">
                What changed with Gawawater
              </h3>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <p className="text-white text-lg leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
