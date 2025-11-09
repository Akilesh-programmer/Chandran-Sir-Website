import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navigationData } from "../../constants/navigation";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);
  const scrollPosition = useScrollPosition();
  const navigate = useNavigate();

  const isScrolled = scrollPosition > 20;
  const safeNavHeight = navHeight || (isScrolled ? 80 : 96);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Measure navbar height (changes on scroll due to padding adjustments)
  useLayoutEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.getBoundingClientRect().height);
    }
  }, []);

  // Recalculate height when scroll position changes (padding shrinks/expands)
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.getBoundingClientRect().height);
    }
  }, [scrollPosition]);

  // Update on viewport resize
  useEffect(() => {
    const handleResize = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.getBoundingClientRect().height);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (item) => {
    if (item.path) {
      navigate(item.path);
      setIsOpen(false);
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        isScrolled
          ? "bg-white shadow-lg py-4"
          : "bg-white/95 backdrop-blur-sm py-6"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => {
              setIsOpen(false);
              setActiveDropdown(null);
            }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-brand-purple to-brand-accent rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-xl">DS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-display font-bold text-secondary-900 leading-tight">
                Data Science
              </span>
              <span className="text-sm font-display font-semibold text-brand-purple leading-tight">
                & ML Solutions
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationData.map((navItem) => (
              <div key={navItem.title} className="relative group/nav">
                {navItem.items ? (
                  <>
                    <button
                      onMouseEnter={() => setActiveDropdown(navItem.title)}
                      className="px-4 py-2 text-secondary-700 hover:text-brand-purple font-medium transition-colors flex items-center gap-1"
                      id={`menu-button-${navItem.title.replaceAll(" ", "-")}`}
                    >
                      {navItem.title}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === navItem.title ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeDropdown === navItem.title && (
                      <div
                        onMouseEnter={() => setActiveDropdown(navItem.title)}
                        onMouseLeave={() => setActiveDropdown(null)}
                        onFocus={() => setActiveDropdown(navItem.title)}
                        onBlur={() => setActiveDropdown(null)}
                        className="absolute top-full left-0 pt-2 z-50"
                        role="menu"
                        aria-labelledby={`menu-button-${navItem.title.replaceAll(
                          " ",
                          "-"
                        )}`}
                        tabIndex={-1}
                      >
                        <div className="w-64 bg-white rounded-lg shadow-xl border border-secondary-100 py-2">
                          {navItem.items.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-4 py-3 text-secondary-700 hover:bg-brand-purple/5 hover:text-brand-purple transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={navItem.path}
                    className="px-4 py-2 text-secondary-700 hover:text-brand-purple font-medium transition-colors"
                  >
                    {navItem.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-secondary-700 hover:text-brand-purple transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed left-0 right-0 bottom-0 bg-secondary-900/40 backdrop-blur-sm transition-opacity duration-150"
          style={{ top: safeNavHeight, zIndex: 900, opacity: isOpen ? 1 : 0 }}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile sliding panel */}
      <div
        className={`lg:hidden fixed left-0 right-0 bg-white overflow-y-auto shadow-lg border-t border-secondary-100 will-change-transform transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{
          top: safeNavHeight,
          height: `calc(100vh - ${safeNavHeight}px)`,
          zIndex: 1000,
        }}
        aria-hidden={!isOpen}
      >
        <div className="py-2 border-t border-secondary-100">
          {navigationData.map((navItem) => (
            <div key={navItem.title} className="border-b border-secondary-100">
              {navItem.items ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(navItem.title)}
                    className="w-full px-6 py-4 text-left text-secondary-900 font-medium flex items-center justify-between hover:bg-secondary-50 transition-colors"
                    aria-expanded={activeDropdown === navItem.title}
                  >
                    {navItem.title}
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        activeDropdown === navItem.title ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`bg-secondary-50 overflow-hidden transition-all ${
                      activeDropdown === navItem.title
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {navItem.items.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleNavClick(item)}
                        className="w-full px-10 py-3 text-left text-secondary-700 hover:bg-brand-purple/10 hover:text-brand-purple transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handleNavClick(navItem)}
                  className="w-full px-6 py-4 text-left text-secondary-900 font-medium hover:bg-secondary-50 transition-colors"
                >
                  {navItem.title}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
