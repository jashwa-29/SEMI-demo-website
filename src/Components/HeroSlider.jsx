import React, { useState, useEffect } from 'react';
import hero1 from '../assets/hero-1.png'

const slides = [
  {
    id: 1,
    image: hero1,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2070",
    title: "Advancing Emergency Medicine",
    subtitle: "Setting standards for critical care across India",
    cta: "Our Work"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80&w=2070",
    title: "Professional Development", 
    subtitle: "Training the next generation of emergency physicians",
    cta: "Our Courses"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[450px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Image Container */}
          <div className="w-full h-full flex items-center justify-center bg-blue-50">
            <img
              src={slide.image}
              alt={slide.title || "SEMI"}
              className={
                slide.id === 1 
                  ? 'h-full w-auto object-contain' 
                  : 'w-full h-full object-cover'
              }
            />
          </div>

          {/* Text Overlay - Only for slides with text */}
          {slide.title && (
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-28 w-full">
                <div className="max-w-2xl text-white">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                    {slide.title}
                  </h1>
                  <p className="text-lg mb-6 text-gray-200">
                    {slide.subtitle}
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;