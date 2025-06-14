import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  },[menuOpen])

    return (
      <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg navbar">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <a href="#home" className="font-mono text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent navbar">
                Daniel <span className="text-0"> Brownsky</span>
              </a>
              {!menuOpen && (
                <div onClick={() => setMenuOpen(true)} className="w-7 h-8 text-[20px] relative cursor-pointer z-40 md:hidden font-bold">
                  &#9776;
                </div>
              )}


              <div className="hidden md:flex items-center space-x-8 text-xl">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
                 <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
                 <a href="#project" className="text-gray-300 hover:text-white transition-colors">
                  Project
                </a>
                 <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>
        </div>
      </nav>  
    )
}