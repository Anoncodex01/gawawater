import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import CustomerStory from './components/CustomerStory';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <CustomerStory />
      <CTASection />
    </div>
  );
}

export default App;
