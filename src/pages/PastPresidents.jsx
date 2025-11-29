import React from 'react';

const PastPresidents = () => {
  const presidents = [
    {
      term: "2020 – 2022",
      role: "IMMEDIATE PAST PRESIDENT",
      name: "Dr. A.N. Venkatesh",
      qualifications: "MBBS, FEM (RCGP), MRCEM",
      position: "Consultant and Head, Department of Emergency Medicine",
      organization: "Apollo Hospitals, Bangalore, India",
      hasMessage: true,
      image: "/images/presidents/dr-venkatesh.jpg"
    },
    {
      term: "2018 – 2020",
      role: "PAST PRESIDENT",
      name: "Dr. Sateesh Kumar Kailasam",
      qualifications: "MBBS, FEM (RCGP), MRCEM",
      position: "Consultant and Head, Department of Emergency Medicine",
      organization: "Maxcure Hospitals, Hyderabad, India",
      hasMessage: true,
      image: "/images/presidents/dr-kailasam.jpg"
    },
    {
      term: "2016 – 2018",
      role: "PAST PRESIDENT",
      name: "Dr. Imron Subhan",
      qualifications: "MBBS, FEM (CMC Vellore), MRCEM",
      position: "Consultant and Head, Department of Emergency Medicine",
      organization: "Apollo Health City, Hyderabad, India",
      hasMessage: true,
      image: "/images/presidents/dr-subhan.jpg"
    },
    {
      term: "2014 – 2016",
      role: "PAST PRESIDENT",
      name: "Dr. T. S. Srinath Kumar",
      qualifications: "MBBS, MD (A&E)",
      position: "Consultant and Head, Department of Emergency Medicine",
      organization: "Narayana Hospitals, Bangalore, India",
      hasMessage: false,
      image: "/images/presidents/dr-srinath-kumar.jpg"
    },
    {
      term: "2012 – 2014",
      role: "PAST PRESIDENT",
      name: "Dr. Tamorish Kole",
      qualifications: "MBBS, FEM (RCGP)",
      position: "Consultant and Head, Department of Emergency Medicine",
      organization: "Max Hospitals-Saket, New Delhi, India",
      hasMessage: false,
      image: "/images/presidents/dr-kole.jpg"
    },
    {
      term: "2010 – 2012",
      role: "PAST PRESIDENT",
      name: "Dr. V. P. Chandrasekaran",
      qualifications: "MBBS, MD (A&E)",
      position: "Consultant and Head, Department of Emergency Medicine",
      organization: "Vinayaka Mission University, Salem, India",
      hasMessage: false,
      image: "/images/presidents/dr-chandrasekaran.jpg"
    },
    {
      term: "2008 – 2010",
      role: "PAST PRESIDENT",
      name: "Dr. S. Sasikumar",
      qualifications: "MBBS, MD (A&E)",
      position: "Consultant and Head, Department of Emergency Medicine",
      organization: "Saveeta Medical College, Chennai, India",
      hasMessage: false,
      image: "/images/presidents/dr-sasikumar.jpg"
    },
    {
      term: "2006 – 2008",
      role: "PAST PRESIDENT",
      name: "Dr. T. V. Ramakrishnan",
      qualifications: "MBBS, MD (Anes)",
      position: "Professor and Head, Department of Emergency Medicine",
      organization: "Sri Ramachandra Medical College and Research Institute (SRIHER), Chennai, India",
      hasMessage: false,
      image: "/images/presidents/dr-ramakrishnan.jpg"
    },
    {
      term: "2004 – 2006",
      role: "PAST PRESIDENT",
      name: "Dr. Prasad Rajhans",
      qualifications: "MBBS, MD (Anes), FICCM, FCCM",
      position: "Consultant and Head, Department of Critical Care & Emergency Medicine",
      organization: "Deenanath Mageshkar Hospital, Pune, India",
      hasMessage: false,
      image: "/images/presidents/dr-rajhans.jpg"
    },
    {
      term: "2002 – 2004",
      role: "PAST PRESIDENT",
      name: "Dr. Mabel Vasnaik",
      qualifications: "MBBS, MD (Anes)",
      position: "Professor and Head, Department of Accident & Emergency Medicine",
      organization: "St. Johns Medical College Hospital, Bangalore, India",
      hasMessage: false,
      image: "/images/presidents/dr-vasnaik.jpg"
    },
    {
      term: "2000 – 2002",
      role: "PAST PRESIDENT",
      name: "Dr. Manimala Rao",
      qualifications: "MBBS, MD (Anes)",
      position: "Professor and Head, Department of Accident & Emergency Medicine",
      organization: "Nizams Institute of Medical Sciences, Hyderabad, India",
      hasMessage: false,
      image: "/images/presidents/dr-rao.jpg"
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
            <span className="text-blue-600 font-medium">Past Presidents</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Past Presidents
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-4">
            Past Presidents Advisory Board
          </p>
          <p className="text-lg text-gray-500">
            Society for Emergency Medicine India (2000 – 2020)
          </p>
        </div>
      </div>

      {/* Presidents Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-28">
          <div className="space-y-12">
            {presidents.map((president, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  {/* Left Section - Term and Image */}
                  <div className="lg:w-1/4 mb-8 lg:mb-0">
                    <div className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-blue-600 mb-4">{president.term}</div>
                      
                      {/* Profile Image */}
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto lg:mx-0 mb-4 bg-gray-100 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-gray-500 text-sm font-medium">
                              {president.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-blue-700 font-semibold text-sm">
                        {president.role}
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Details */}
                  <div className="lg:w-3/4 lg:pl-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{president.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{president.qualifications}</p>
                    
                    <div className="space-y-2 mb-6">
                      <p className="text-gray-700">{president.position}</p>
                      <p className="text-gray-600">{president.organization}</p>
                    </div>
                    
                    {president.hasMessage && (
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        Read Message →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Historical Information */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">SEMI Historical Foundation</h2>
            <p className="text-gray-700 leading-relaxed text-center mb-6">
              The first meeting of the Society for Emergency Medicine India was held on 8th May 1999, 
              during the First National Conference in Emergency Medicine (EMCON-1999), at Marriot Hotel, Hyderabad. 
              SEMI was officially registered on 20th April 2000 vide registration number 3602/2000. 
              SEMI Head Office was started on 24th April 2000.
            </p>
            <div className="flex justify-center space-x-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1999</div>
                <div className="text-sm text-gray-600">First Meeting</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2000</div>
                <div className="text-sm text-gray-600">Official Registration</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Links */}
      <div className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">National Board</h3>
              <p className="text-gray-600 mb-6">
                View the current National Board leadership team.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View National Board
              </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact SEMI</h3>
              <p className="text-gray-600 mb-6">
                Get in touch with SEMI Head Office.
              </p>
              <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Contact Head Office
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastPresidents;