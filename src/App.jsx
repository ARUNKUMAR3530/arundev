import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProject from './components/FeaturedProject';
import SkillsBentoGrid from './components/SkillsBentoGrid';
import Contact from './components/Contact';

function App() {
  return (
    <div className="noise relative min-h-screen" style={{ background: '#020617' }}>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProject />
        <SkillsBentoGrid />
        <Contact />
      </main>
    </div>
  );
}

export default App;
