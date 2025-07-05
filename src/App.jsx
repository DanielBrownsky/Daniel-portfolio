import { useState } from 'react'
import "./index.css"
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home'
import { About } from './components/sections/About';
import { Project } from './components/sections/Project';
import { Contact } from './components/sections/Contact';



function App() {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <>
    {!loading && <LoadingScreen  onComplete={() => setLoading(true)}/>}

      <div className={`min-h-screen transition-opacity duration-700 ${loading ? "opacity-100" : "opacity-0"} bg-black text-gray-200`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  )
}

export default App
