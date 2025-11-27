import React, { useEffect, useState } from "react";

const announcements = [
  {
    id: 1,
    title:
      "IFCCM Course registration date has been extended till 12ᵗʰ November 2025",
    description:
      "IFCCM Course registration date has been extended till 12ᵗʰ November 2025",
    link: "https://semi.org.in/admin-control/#/login",
  },
  {
    id: 2,
    title:
      "SEMI Annual Conference – Early bird registrations open till 30ᵗʰ December 2025",
    description:
      "Register now to avail early bird benefits and secure your seat.",
    link: "https://semi.org.in",
  },
  {
    id: 3,
    title:
      "Workshop on Emergency Ultrasound – limited seats available for 2025 batch",
    description:
      "Advanced hands-on workshop open for emergency physicians across India.",
    link: "https://semi.org.in/workshops",
  },
];

const AboutSemiSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic upward slider
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === announcements.length - 1 ? 0 : prev + 1
      );
    }, 3000); // changes every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="w-full bg-[#e9f4ff] py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-12 py-10">
        <div className="grid gap-8 lg:grid-cols-[52%,48%]">
          {/* ================= LEFT SIDE ================= */}
          <div>
            {/* About heading */}
            <div className="flex items-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0040a8]">
                About SEMI
              </h2>
              <div className="ml-4 flex-1 h-[2px] bg-[#0040a8]" />
            </div>

            {/* subheading */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-[#333]">Who we are</h3>
              <div className="mt-2 h-[3px] w-24 bg-[#d63c32]" />
            </div>

            {/* description paragraphs */}
            <div className="mt-6 text-[15px] leading-relaxed text-[#1c1c1c]">
              <p className="mb-5 text-justify">
                What a privilege to take over as the 12th National president of
                SEMI and lead SEMI to its 25th Silver Jubilee celebrations in
                the year 2023!
              </p>
              <p className="mb-5 text-justify">
               
Thank you to all the respected past presidents and my fellow board members who have been great mentors, colleagues and friends to me on my last 8 years of journey with the SEMI board in various positions and 16 years of EM career. Thanks to all the SEMI members who continued your trust, support and commitment over last 24 years in building SEMI to where we are today.
              </p>
              <p className="text-justify">
              We have seen many ups and downs in the last 24 years and had many success stories, especially around academics, Collaborations and partnerships, and tie-ups and in our ability to produce more leaders within and gain visibility and recognition as a genuine, democratic and respectful clinical society in India and beyond.

              </p>
            </div>
          </div>

          {/* ================= RIGHT SIDE ANNOUNCEMENTS ================= */}
          <div className="bg-[#0b61c8] rounded-none relative overflow-hidden text-white">
            <div className="relative px-6 md:px-10 py-8">
              {/* Headings */}
              <p className="text-sm font-semibold text-white/90">
                Updates you should know
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#ffd521] leading-tight">
                Important Announcements
              </h3>

              {/* Slider Box */}
              <div
                className="mt-6 h-[250px] overflow-hidden relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div
                  className="transition-transform duration-700 ease-out"
                  style={{
                    transform: `translateY(-${currentIndex * 260}px)`,
                  }}
                >
                  {announcements.map((item) => (
                    <div
                      key={item.id}
                      className="w-full h-[250px] mb-3 flex-shrink-0"
                    >
                      {/* Card */}
                      <div className="relative w-full h-full bg-[#e0f4ff] border-4 border-white rounded-3xl shadow-lg px-6 py-6">
                        {/* NEW Badge */}
                        <div className="absolute -top-4 left-6">
                          <div className="bg-[#d52027] text-white font-bold px-4 py-1 rounded-md shadow-md">
                            NEW
                          </div>
                        </div>

                        <h4 className="mt-5 text-lg font-semibold text-[#003060]">
                          {item.title}
                        </h4>

                        <p className="mt-3 text-[#333] text-sm">
                          {item.description}
                        </p>

                        {/* Link */}
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#a5dcff] px-4 py-2 text-xs text-[#0040a8] hover:bg-[#8ed3ff] transition"
                        >
                          <span className="flex items-center justify-center h-6 w-6 bg-white text-blue-500 rounded-full text-lg">
                            ↗
                          </span>
                          {item.link}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots */}
              <div className="mt-4 flex justify-center gap-2">
                {announcements.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-2 w-2 rounded-full ${
                      currentIndex === idx ? "bg-white" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSemiSection;
