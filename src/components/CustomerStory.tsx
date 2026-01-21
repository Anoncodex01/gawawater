<<<<<<< HEAD
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
=======
import { CheckCircle, Quote } from 'lucide-react';
import diagonalImage from '../../assets/2.png';

export default function CustomerStory() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-32 text-white">
      <div
        className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 -rotate-6 opacity-30"
        style={{
          backgroundImage: `url(${diagonalImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/70 to-neutral-950/90"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Customer Story
          </span>
          <h2 className="mt-8 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            From fear to freedom:
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Marichui&apos;s family and Gawawater
>>>>>>> 46768df (Initial Gawawater landing page design)
            </span>
          </h2>
        </div>

<<<<<<< HEAD
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
=======
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column - Story */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quote Card */}
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-xl">
              <Quote className="absolute -top-4 -left-4 h-12 w-12 text-cyan-400/30" />
              <div className="relative space-y-6 text-lg leading-relaxed text-white/80">
                <p className="text-xl text-white/90">
                  After her youngest son Takadini spent a week in hospital with a severe water-borne infection,
                  Marichui turned to bottled water for everything she could — drinking, cooking, baby formula. But the
                  fear stayed: her family still brushed their teeth, showered, and washed vegetables with unsafe tap water.
>>>>>>> 46768df (Initial Gawawater landing page design)
                </p>
              </div>
            </div>

<<<<<<< HEAD
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
=======
            {/* Problem Card */}
            <div className="rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent p-8 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-xl bg-red-500/20 p-3">
                  <span className="text-2xl">⚠️</span>
                </div>
                <div className="space-y-4 text-lg leading-relaxed text-white/80">
                  <p>
                    The cost of this "almost safe" solution quickly became unbearable. Towers of empty plastic bottles grew
                    by the door while a mountain of receipts quietly drained the family budget.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution Card */}
            <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-8 backdrop-blur-xl">
              <div className="space-y-6 text-lg leading-relaxed text-white/80">
                <p>
                  A whole-home system felt out of reach until Marichui saw a community poster:
                </p>
                <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-6">
                  <p className="text-xl font-semibold text-cyan-200 italic">
                    &ldquo;Gawawater – Clean water for life. Not just for drinking. Pay as you go.&rdquo;
                  </p>
                </div>
                <p>
                  For around <span className="font-bold text-cyan-300">90% cheaper</span> than what she was already
                  spending on bottled water and charcoal, a certified Gawawater technician installed a single unit at her
                  main line. <span className="font-semibold text-white">No power. Minimal disruption. Paid via mobile money.</span>
                </p>
              </div>
            </div>

            {/* Success Card */}
            <div className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent p-8 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-xl bg-green-500/20 p-3">
                  <span className="text-2xl">✨</span>
                </div>
                <div className="space-y-4 text-lg leading-relaxed text-white/80">
                  <p className="text-xl font-semibold text-white">
                    Today, Takadini splashes in the bath without fear. Tunde brushes his teeth straight from the tap.
                  </p>
                  <p>
                    The constant clatter of plastic bottles has been replaced by quiet confidence in every shower, every pot of
                    rice, every glass of water.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 p-2">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">What changed with Gawawater</h3>
              </div>
              <div className="space-y-5">
                {[
                  'Whole-home protection from a single device on the main line.',
                  'No more dependence on expensive bottled water and charcoal.',
                  'Safe water for drinking, cooking, showering and washing baby bottles.',
                  'Monthly subscription that fits the family budget, paid via mobile money.',
                  'Fewer plastic bottles, less household stress, more money for Takadini\'s future.',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-400" />
                    <p className="text-base leading-relaxed text-white/80">{benefit}</p>
>>>>>>> 46768df (Initial Gawawater landing page design)
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
