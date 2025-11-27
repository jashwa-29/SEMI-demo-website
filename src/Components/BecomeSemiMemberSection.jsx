import React from "react";
import members from "../assets/semi-members.jpg"

const BecomeSemiMemberSection = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          {/* LEFT – GROUP IMAGE */}
          <div className="w-full md:w-[45%]">
            <div className="border border-[#e5e5e5] bg-white p-2">
              {/* Replace src with actual image path */}
              <img
                src={members}
                alt="SEMI Members"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* RIGHT – TEXT + BUTTON */}
          <div className="w-full md:w-[55%] text-center md:text-left">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#0040a8]">
              How To Become SEMI Member
            </h2>
            <div className="mt-2 mb-4 flex justify-center md:justify-start">
              <div className="h-[3px] w-28 bg-[#e6544f]" />
            </div>

            {/* Description */}
            <p className="text-sm md:text-[15px] leading-relaxed text-[#333] text-justify">
              The Society for Emergency Medicine India is the LARGEST group of
              trained &amp; qualified emergency physicians in India, with over
              2000 members, including postgraduate trainees, residents,
              registrars, consultants, professors, tutors, lecturers, advisors
              and pioneers, working in various hospitals &amp; medical colleges.
              ALL WORKING TOWARDS BRINGING BETTER EMERGENCY CARE FOR THE PEOPLE
              OF INDIA.
            </p>

            {/* Button */}
            <div className="mt-7 flex justify-center md:justify-start">
              <a
                href="#membership-enroll"
                className="inline-flex items-center justify-center px-8 md:px-10 py-3 rounded-lg bg-gradient-to-r from-[#0054c6] to-[#5a0bb5] text-white text-sm md:text-base font-semibold shadow-md hover:opacity-95 transition"
              >
                Enroll as a SEMI Member Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeSemiMemberSection;
