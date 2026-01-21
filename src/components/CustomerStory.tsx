import { CheckCircle, Quote } from 'lucide-react';
import diagonalImage from '../../assets/2.png';

export default function CustomerStory() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-16 sm:py-24 lg:py-32 text-white">
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
        <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 sm:px-5 py-1.5 sm:py-2 text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-cyan-300">
            Customer Story
          </span>
          <h2 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
            From fear to freedom:
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Marichui&apos;s family and Gawawater
            </span>
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-3">
          {/* Left Column - Story */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quote Card */}
            <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 sm:p-8 backdrop-blur-xl">
              <Quote className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 h-8 w-8 sm:h-12 sm:w-12 text-cyan-400/30" />
              <div className="relative space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-white/80">
                <p className="text-lg sm:text-xl text-white/90">
                  After her youngest son Takadini spent a week in hospital with a severe water-borne infection,
                  Marichui turned to bottled water for everything she could — drinking, cooking, baby formula. But the
                  fear stayed: her family still brushed their teeth, showered, and washed vegetables with unsafe tap water.
                </p>
              </div>
            </div>

            {/* Problem Card */}
            <div className="rounded-2xl sm:rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent p-6 sm:p-8 backdrop-blur-xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 rounded-xl bg-red-500/20 p-2 sm:p-3">
                  <span className="text-xl sm:text-2xl">⚠️</span>
                </div>
                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed text-white/80">
                  <p>
                    The cost of this "almost safe" solution quickly became unbearable. Towers of empty plastic bottles grew
                    by the door while a mountain of receipts quietly drained the family budget.
                  </p>
                </div>
              </div>
            </div>

            {/* Solution Card */}
            <div className="rounded-2xl sm:rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-6 sm:p-8 backdrop-blur-xl">
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-white/80">
                <p>
                  A whole-home system felt out of reach until Marichui saw a community poster:
                </p>
                <div className="rounded-xl sm:rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-4 sm:p-6">
                  <p className="text-lg sm:text-xl font-semibold text-cyan-200 italic">
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
            <div className="rounded-2xl sm:rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent p-6 sm:p-8 backdrop-blur-xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 rounded-xl bg-green-500/20 p-2 sm:p-3">
                  <span className="text-xl sm:text-2xl">✨</span>
                </div>
                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed text-white/80">
                  <p className="text-lg sm:text-xl font-semibold text-white">
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
            <div className="rounded-2xl sm:rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-white/10 to-white/5 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <div className="rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 p-1.5 sm:p-2">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">What changed with Gawawater</h3>
              </div>
              <div className="space-y-3 sm:space-y-5">
                {[
                  'Whole-home protection from a single device on the main line.',
                  'No more dependence on expensive bottled water and charcoal.',
                  'Safe water for drinking, cooking, showering and washing baby bottles.',
                  'Monthly subscription that fits the family budget, paid via mobile money.',
                  'Fewer plastic bottles, less household stress, more money for Takadini\'s future.',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 backdrop-blur-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-cyan-400" />
                    <p className="text-sm sm:text-base leading-relaxed text-white/80">{benefit}</p>
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
