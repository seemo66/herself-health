import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="mx-auto mt-[78px]">
      <Header />
      <main className="max-w-[1728px] mx-auto" role="main">
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
