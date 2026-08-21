import { useEffect, useRef } from "react"

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Focus management when menu opens/closes
  useEffect(() => {
    if (menuOpen) {
      // Focus first link when menu opens
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 100);
    }
  }, [menuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen, setMenuOpen]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div
      ref={menuRef}
      id="mobile-menu"
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.95)] backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      <button
        ref={closeButtonRef}
        onClick={() => setMenuOpen(false)}
        className="absolute top-5 right-6 w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
        aria-label="Close menu"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {navItems.map((item, index) => (
        <a
          key={item.id}
          ref={index === 0 ? firstLinkRef : null}
          href={`#${item.id}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-medium text-white my-4 transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded px-4 py-2
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{
            transitionDelay: menuOpen ? `${index * 100}ms` : "0ms"
          }}
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}
