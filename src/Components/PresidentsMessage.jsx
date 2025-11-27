import saravana from "../assets/Dr S Saravana Kumar.png";

const PresidentsMessage = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-12 py-10">
        {/* Heading */}
        <div className="flex items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1f4ba5]">
            President’s Message
          </h2>
          <div className="ml-4 flex-1 h-[2px] bg-[#1f4ba5]/60" />
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-8 md:grid-cols-[230px,1fr] items-start">
          {/* Left: President card */}
          <div className="flex flex-col ">
            <div className="w-[220px] h-[220px] overflow-hidden">
              {/* replace /president.jpg with actual image path */}
              <img
                src={saravana}
                alt="Dr S Saravana Kumar"
                className="w-full h-full object-cover rounded-none"
              />
            </div>

            <div className="mt-3 leading-tight">
              <p className="text-sm md:text-base font-semibold text-[#d0162c]">
                Dr S Saravana Kumar
              </p>
              <p className="text-[12px] md:text-[13px] text-[#555] mt-1">
                National President (2022–2024)
                <br />
                Society for Emergency Medicine India
              </p>
            </div>
          </div>

          {/* Right: scrollable message box */}
          <div className="relative">
            <div className="border border-slate-200 rounded-2xl shadow-sm px-6 md:px-8 py-6 h-[260px] md:h-[320px] lg:h-[340px] overflow-y-auto custom-scroll text-[14px] md:text-[15px] leading-relaxed text-[#222]">
              <h3 className="text-lg md:text-xl font-semibold text-[#002859] mb-4">
                Dear SEMI Members and Emergency Physicians of India
              </h3>

              <p className="mb-4">
                What a privilege to take over as the 12th National President of
                SEMI and lead SEMI to its 25th Silver Jubilee celebrations in
                the year 2023!
              </p>

              <p className="mb-4">
                Thank you to all the respected past presidents and my fellow
                board members who have been great mentors, colleagues and
                friends to me on my last 18 years of journey with the SEMI board
                in various positions and 16 years of EM career. Thanks to all
                the SEMI members who continued your trust, support and
                commitment over last 24 years in building SEMI to where we are
                today.
              </p>

              <p className="mb-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentsMessage;
