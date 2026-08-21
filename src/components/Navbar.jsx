import { useEffect, useState, useRef } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const hamburgerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Set up intersection observer for active section tracking
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
      rootMargin: "-100px 0px -100px 0px"
    });

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-40 backdrop-blur-lg border-b transition-all duration-300 ${
        scrolled 
          ? "bg-[rgba(10,10,10,0.9)] border-white/5" 
          : "bg-[rgba(10,10,10,0.8)] border-white/10"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#home" 
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-blue-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
          >
            Ayeku Daniel
          </a>
          
          {!menuOpen && (
            <button
              ref={hamburgerRef}
              onClick={() => setMenuOpen(true)}
              className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors relative cursor-pointer z-40 md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded px-2 py-1 ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
