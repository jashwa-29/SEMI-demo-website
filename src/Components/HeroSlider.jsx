import React, { useState, useEffect } from 'react';
import hero1 from '../assets/hero-1.png'

const slides = [
  {
    id: 1,
    image: hero1,
    title: "Advancing Emergency Medicine",
    subtitle: "Leading the way in critical care and emergency response across India.",
    cta: "Learn More"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2070",
    title: "World-Class Healthcare Facilities",
    subtitle: "State-of-the-art infrastructure for superior patient care.",
    cta: "Our Facilities"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80&w=2070",
    title: "Expert Medical Professionals",
    subtitle: "Dedicated team of doctors and specialists committed to saving lives.",
    cta: "Meet the Team"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSlides, setActiveSlides] = useState(slides);

  // Filter slides based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile: Hide first slide (id: 1)
        setActiveSlides(slides.filter((slide) => slide.id !== 1));
      } else {
        // Desktop: Show all slides
        setActiveSlides(slides);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset current slide if it goes out of bounds when switching views
  useEffect(() => {
    if (currentSlide >= activeSlides.length) {
      setCurrentSlide(0);
    }
  }, [activeSlides, currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === activeSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, activeSlides]); 

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === activeSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? activeSlides.length - 1 : prev - 1));
  };

  if (activeSlides.length === 0) return null;

  return (
    <div className="relative w-full h-[250px] sm:h-[400px] md:h-[600px] lg:h-[530px] overflow-hidden group">
      {/* Slides */}
      {activeSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full ${slide.id === 1 ? 'object-contain bg-[#e9f4ff]' : 'object-cover'} object-center`}
          />
          {/* Overlay - Only show for slides other than the first one (id: 1) */}
          {slide.id !== 1 && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center">
              <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
                <div className={`max-w-xl text-white transition-all duration-1000 transform ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-lg md:text-xl mb-4 sm:mb-8 text-gray-200 line-clamp-2 sm:line-clamp-none">
                    {slide.subtitle}
                  </p>
                  <button className="bg-[#d0162c] hover:bg-[#b01225] text-white px-4 py-2 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows - Hidden on very small screens, visible on sm+ */}
      <button
        onClick={prevSlide}
        className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {activeSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#d0162c] w-6 sm:w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
