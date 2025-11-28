import React from "react";
import saravana from "../assets/Dr S Saravana Kumar.png";

const PresidentsMessage = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-28">
        {/* Enhanced Heading */}
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            President's Message
          </h2>
          <div className="ml-6 flex-1 h-[2px] bg-gradient-to-r from-blue-600 to-blue-400" />
        </div>

        {/* Enhanced Content Grid */}
        <div className="grid gap-10 md:grid-cols-[280px,1fr] items-start">
          {/* Enhanced President Card */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-64 h-64 overflow-hidden rounded-lg shadow-md mb-4">
              <img
                src={saravana}
                alt="Dr S Saravana Kumar"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="text-center md:text-left">
              <p className="text-lg font-semibold text-gray-900 mb-1">
                Dr S Saravana Kumar
              </p>
              <div className="w-12 h-0.5 bg-blue-600 mx-auto md:mx-0 my-2"></div>
              <p className="text-blue-600 font-medium text-sm">
                National President (2022–2024)
              </p>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Society for Emergency Medicine India
              </p>
            </div>
          </div>

          {/* Enhanced Message Box */}
          <div className="relative">
            <div className="border border-gray-200 rounded-xl shadow-sm px-8 py-8 h-[340px] overflow-y-auto custom-scroll text-gray-700 leading-relaxed">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Dear SEMI Members and Emergency Physicians of India,
              </h3>

              <div className="space-y-5">
                <p>
                  What a privilege to take over as the 12th National President of
                  SEMI and lead SEMI to its 25th Silver Jubilee celebrations in
                  the year 2023!
                </p>

                <p>
                  Thank you to all the respected past presidents and my fellow
                  board members who have been great mentors, colleagues and
                  friends to me on my last 18 years of journey with the SEMI board
                  in various positions and 16 years of EM career. Thanks to all
                  the SEMI members who continued your trust, support and
                  commitment over last 24 years in building SEMI to where we are
                  today.
                </p>

                <p>
                  We have seen many ups and downs in the last 24 years and had
                  many success stories, especially around academics, collaborations
                  and partnerships, and tie-ups and in our ability to produce more
                  leaders within and gain visibility and recognition as a genuine,
                  democratic and respectful clinical society in India and beyond.
                </p>

                <p>
                  Over last two decades we focused on getting our specialty
                  recognized in India and building the capacity of emergency
                  physicians through various academic programs, skill-building our
                  doctors, nurses and paramedics, and building strong
                  collaborations with like-minded leaders, associations and
                  organisations.
                </p>

                {/* Signature Section */}
                <div className="pt-6 mt-6 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">With warm regards,</p>
                  <p className="text-blue-600 font-semibold mt-1">Dr S Saravana Kumar</p>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center text-xs text-gray-400">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              Scroll to read
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scroll {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e0 #f8fafc;
        }
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #f8fafc;
          border-radius: 3px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #cbd5e0;
          border-radius: 3px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: #a0aec0;
        }
      `}</style>
    </section>
  );
};

export default PresidentsMessage;