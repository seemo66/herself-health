import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import MembershipSection from './components/MembershipSection';
import WaitingListSection from './components/WaitingListSection';
import FaqSection from './components/FaqSection';

function App() {
  return (
    <div className="mx-auto mt-[78px]">
      <Header />
      <main className="max-w-[1728px] mx-auto" role="main">
        <HeroSection />
        <ServicesSection />
        <MembershipSection />
        <WaitingListSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
