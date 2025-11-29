import React from 'react';

const NationalBoard = () => {
  const boardMembers = [
    {
      role: "EXECUTIVE CHAIRMAN",
      name: "Dr. Hariprasad. K",
      qualifications: "MBBS, MD (Anes), FRCEM (Hon)",
      position: "President – Hospitals Division",
      organization: "Apollo Hospitals Group",
      image: "/images/board/dr-hariprasad.jpg"
    },
    {
      role: "EXECUTIVE CO-CHAIRMAN",
      name: "Dr. Mahesh Joshi",
      qualifications: "MBBS, FEM (RCGP), FRCEM (Hon)",
      position: "Chief Executive Officer – Apollo Homecare",
      organization: "Apollo Hospitals Group",
      image: "/images/board/dr-mahesh-joshi.jpg"
    },
    {
      role: "PRESIDENT",
      name: "Dr. S. Saravana Kumar",
      qualifications: "MBBS, MD (A&E)",
      position: "Consultant and Head, Department of Emergency Medicine",
      organization: "Mehta's Multispecialty Hospitals, Chennai, India",
      image: "/images/board/dr-saravana-kumar.jpg"
    },
    {
      role: "GENERAL SECRETARY",
      name: "Dr. M. Rajadurai",
      qualifications: "MBBS, MD (A&E)",
      position: "Consultant and Head, Department of Emergency Medicine",
      organization: "Apollo Hospitals, Melvisharam, India",
      image: "/images/board/dr-rajadurai.jpg"
    },
    {
      role: "JOINT SECRETARY",
      name: "Dr. Sudip Chakraborty",
      qualifications: "MBBS, MEM",
      position: "Consultant and Head, Department of Emergency Medicine",
      organization: "B. P. Poddar Hospital, Kolkota, India",
      image: "/images/board/dr-sudip-chakraborty.jpg"
    },
    {
      role: "TREASURER",
      name: "Dr. Sree Sowjanya Patibandla",
      qualifications: "MBBS, MD (A&E)",
      position: "Consultant and Head, Department of Emergency Medicine",
      organization: "Continental Hospital, Hyderabad, Telangana, India",
      image: "/images/board/dr-sowjanya-patibandla.jpg"
    },
    {
      role: "IMMEDIATE PAST PRESIDENT",
      name: "Dr. A N Venkatesh",
      qualifications: "MBBS, FEM (RCGP), MRCEM",
      position: "Consultant and Head, Department of Emergency Medicine",
      organization: "Apollo Hospitals, Bangalore, India",
      image: "/images/board/dr-venkatesh.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-28 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <span>You are here</span>
            <span className="text-gray-400">›</span>
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <span className="text-gray-400">›</span>
            <a href="/about/semi" className="hover:text-blue-600 transition-colors">About SEMI</a>
            <span className="text-gray-400">›</span>
            <span className="text-blue-600 font-medium">National Board</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            National Board
          </h1>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 mb-2">
            Society for Emergency Medicine India
          </p>
          <p className="text-lg text-gray-500 font-medium">
            2022 – 2024 Term
          </p>
        </div>
      </div>

      {/* Board Members */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-28">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8 text-center hover:shadow-sm transition-all duration-300 group">
                {/* Profile Image Container */}
                <div className="mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-blue-50 transition-colors duration-300">
                      {/* Profile Image - Replace with actual images */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-gray-600 text-sm font-semibold">
                              Profile Image
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">Upload {member.name.split(' ')[1]}'s photo</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Role Indicator */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        {member.role.split(' ')[0]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Member Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium text-sm">{member.qualifications}</p>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 font-medium text-sm leading-relaxed mb-2">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Zonal Vice Presidents */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-sm transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Zonal Vice Presidents</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                View the complete list of zonal vice presidents representing different regions across India.
              </p>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
                View Zonal Vice Presidents
              </button>
            </div>

            {/* Contact SEMI */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-sm transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Contact SEMI</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get in touch with SEMI Head Office for inquiries and information.
              </p>
              <button className="w-full bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm">
                Contact Head Office
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Term Information */}
      <div className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white rounded-lg border border-gray-200 p-8 inline-block">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Leadership Term</h3>
            <div className="text-3xl font-bold text-blue-600">2022 – 2024</div>
            <div className="text-gray-500 text-sm mt-2">Society for Emergency Medicine India</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalBoard;