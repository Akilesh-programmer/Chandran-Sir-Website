import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Placeholder images - using professional data science themed placeholders
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=80",
      title: "Transform Your Data Into Insights",
      tagline:
        "Empowering businesses with cutting-edge analytics and AI solutions",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=80",
      title: "Machine Learning Excellence",
      tagline:
        "Deploy intelligent models that drive measurable business growth",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&h=1080&fit=crop&q=80",
      title: "Advanced Data Analytics",
      tagline:
        "Unlock the full potential of your data with our expert solutions",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop&q=80",
      title: "Enterprise AI Solutions",
      tagline:
        "Scalable, secure, and intelligent systems for modern enterprises",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleContactClick = () => {
    navigate("/company/contact");
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-secondary-900"
      style={{ marginTop: "80px", height: "calc(100vh - 80px)" }}
    >
      {/* Carousel Images */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/80 via-secondary-900/60 to-secondary-900/40" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-16 sm:px-4">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"
                }`}
              >
                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-3 sm:mb-4 md:mb-6 drop-shadow-2xl px-2">
                  {slide.title}
                </h1>

                {/* Tagline */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 drop-shadow-lg px-2">
                  {slide.tagline}
                </p>

                {/* CTA Button */}
                <button
                  onClick={handleContactClick}
                  className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-brand-purple hover:bg-brand-deep text-white text-base sm:text-lg md:text-xl font-semibold rounded-lg sm:rounded-xl shadow-2xl hover:shadow-brand-purple/50 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10">Let's Talk</span>
                  <svg
                    className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/0 via-brand-accent/20 to-brand-accent/0 group-hover:via-brand-accent/30 transition-all duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 lg:left-6 xl:left-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 lg:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Previous slide"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:text-brand-accent transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 lg:right-6 xl:right-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 lg:p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Next slide"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:text-brand-accent transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-10 sm:w-12 h-2 sm:h-2.5 bg-brand-purple"
                : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div
          className="h-full bg-brand-purple transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;
