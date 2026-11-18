import { useState } from 'react'
import "./index.css"
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home'
import { KampusPlugShowcase } from './components/sections/KampusPlugShowcase'
import { AlumniConnectShowcase } from './components/sections/AlumniConnectShowcase'
import { OtherWork } from './components/sections/OtherWork'
import { HowIWork } from './components/sections/HowIWork'
import { Experience } from './components/sections/Experience'
import { Toolbox } from './components/sections/Toolbox'
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';



function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div className={`min-h-screen transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`} style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text-primary)' }}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Home />
        <KampusPlugShowcase />
        <AlumniConnectShowcase />
        <OtherWork />
        <HowIWork />
        <Experience />
        <Toolbox />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
