import React, { useState, useEffect } from "react";

const quickLinks = [
  {
    label: "Registration",
    href: "#registration",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7h8M8 11h4M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.5L14 3h-4L9.5 5H6A2 2 0 0 0 4 7v12a2 2 0 0 0 1 1.732"
        />
      </svg>
    ),
  },
  {
    label: "Abstract Submission",
    href: "#abstract-submission",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h3" />
      </svg>
    ),
  },
  {
    label: "Conference Brochure",
    href: "#conference-brochure",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 3h7l5 5v13H6z" />
        <path d="M13 3v5h5" />
      </svg>
    ),
  },
];

const newsEvents = [
  { title: "NCR Mega Event", href: "#" },
  { title: "Criticalcare 2026, Chennai", href: "#" },
];

const courses = [
  {
    id: 1,
    title: "IDCCN",
    description:
      "The sole aim of these training programs is to enhance the skills of care providers who are working in the field of critical care medicine so that patient care can be standardized and good quality care can be provided to patients. These courses are not recognized by Medical Council of India.",
    link: "#",
  },
  {
    id: 2,
    title: "IDCCN – Advanced",
    description:
      "Advanced level training aimed at practitioners with prior experience in critical care medicine, focusing on complex cases and leadership skills.",
    link: "#",
  },
  {
    id: 3,
    title: "IDCCN – Online Module",
    description:
      "Flexible online modules designed to provide foundational skills in critical care, with virtual case discussions and assessments.",
    link: "#",
  },
  {
    id: 4,
    title: "IDCCN – Online Module",
    description:
      "Flexible online modules designed to provide foundational skills in critical care, with virtual case discussions and assessments.",
    link: "#",
  },
];

const HomeNewsEducationSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Enhanced responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet
      } else {
        setCardsPerView(2); // Desktop
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(courses.length - cardsPerView, 0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="w-full bg-white">
      {/* ---------- QUICK LINKS ---------- */}
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-28 py-8 sm:py-10 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#333]">
          Quick Links
        </h2>
        <div className="mt-2 h-[3px] w-24 bg-[#f15a5a] mx-auto" />

        {/* Grid layout for quick links */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {quickLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-center gap-3 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-white font-semibold text-sm sm:text-base shadow-md bg-gradient-to-r from-[#0e2a9d] to-[#5407a8] hover:opacity-95 transition transform hover:scale-105"
            >
              <span className="flex items-center justify-center rounded-full bg-white/10 p-1 sm:p-1.5">
                {item.icon}
              </span>
              <span className="text-xs sm:text-sm md:text-base">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ---------- NEWS + EDUCATION SECTION ---------- */}
      <div className="bg-[#e5f4ff] py-8 sm:py-10">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-28">
          {/* Main grid container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* NEWS & EVENTS - Left Column */}
            <div className="w-full">
              <div className="flex items-center">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0040a8] whitespace-nowrap">
                  News &amp; Events
                </h3>
                <div className="ml-3 flex-1 h-[2px] bg-[#0040a8]" />
              </div>

              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                {newsEvents.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#0040a8] text-white flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M3 10h18M8 2v4M16 2v4" />
                        </svg>
                      </div>
                      <a
                        href={item.href}
                        className="text-[#0040a8] text-base sm:text-lg md:text-xl font-medium hover:underline break-words"
                      >
                        {item.title}
                      </a>
                    </div>
                    {idx !== newsEvents.length - 1 && (
                      <div className="mt-3 sm:mt-4 h-px w-full bg-[#b5cce5]" />
                    )}
                  </div>
                ))}
              </div>

              <button className="mt-6 sm:mt-8 text-[#0040a8] font-semibold text-sm sm:text-base hover:underline">
                + See All Events
              </button>
            </div>

            {/* EDUCATION & COURSES - Right Column */}
            <div className="w-full">
              <div className="flex items-center justify-between lg:justify-center">
                <div className="flex-1 lg:hidden" />
                <h3 className="text-xl sm:text-2xl font-bold text-[#0040a8] text-left lg:text-center whitespace-nowrap">
                  Education &amp; Courses
                </h3>
                <div className="flex-1 lg:hidden" />
              </div>

              <div className="mt-6 sm:mt-8 relative">
                {/* Desktop arrows */}
                <button
                  onClick={handlePrev}
                  className="hidden lg:flex items-center justify-center absolute -left-4 xl:-left-6 top-1/2 -translate-y-1/2 h-8 w-8 xl:h-10 xl:w-10 rounded-full bg-[#0040a8] text-white shadow-md hover:bg-[#002f7a] z-10 transition-colors"
                  aria-label="Previous courses"
                >
                  ‹
                </button>

                <button
                  onClick={handleNext}
                  className="hidden lg:flex items-center justify-center absolute -right-4 xl:-right-6 top-1/2 -translate-y-1/2 h-8 w-8 xl:h-10 xl:w-10 rounded-full bg-[#0040a8] text-white shadow-md hover:bg-[#002f7a] z-10 transition-colors"
                  aria-label="Next courses"
                >
                  ›
                </button>

                {/* Slider Container */}
                <div className="overflow-hidden">
                  <div
                    className="flex gap-4 sm:gap-5 transition-transform duration-500 ease-out"
                    style={{
                      transform: `translateX(-${
                        (100 / cardsPerView) * currentIndex
                      }%)`,
                    }}
                  >
                    {courses.map((course) => (
                      <div
                        key={course.id}
                        className="w-full sm:w-1/2 flex-shrink-0 bg-gradient-to-b from-[#1273d8] to-[#0056a2] text-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl px-4 sm:px-6 py-4 sm:py-6 relative min-h-[200px] sm:min-h-[240px]"
                      >
                        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top,_#ffffff_0,_transparent_60%)] pointer-events-none rounded-lg sm:rounded-xl" />
                        <div className="relative h-full flex flex-col">
                          <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
                            {course.title}
                          </h4>
                          <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 flex-grow line-clamp-4">
                            {course.description}
                          </p>
                          <button className="text-xs sm:text-sm font-semibold underline underline-offset-2 hover:no-underline self-start mt-auto">
                            Read More
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile arrows and indicators */}
                <div className="flex lg:hidden justify-between items-center mt-4 sm:mt-6">
                  <button
                    onClick={handlePrev}
                    className="flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-[#0040a8] text-white shadow-md hover:bg-[#002f7a] transition-colors"
                    aria-label="Previous courses"
                  >
                    ‹
                  </button>
                  
                  {/* Dots indicator for mobile */}
                  <div className="flex gap-2">
                    {courses.slice(0, Math.min(courses.length, 3)).map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 w-2 rounded-full ${
                          index === currentIndex ? 'bg-[#0040a8]' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-[#0040a8] text-white shadow-md hover:bg-[#002f7a] transition-colors"
                    aria-label="Next courses"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsEducationSection;