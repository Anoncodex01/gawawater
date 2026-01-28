import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
