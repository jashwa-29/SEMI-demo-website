import React from 'react';

const StateChapters = () => {
  const stateChapters = [
    {
      state: "ANDHRA PRADESH",
      status: "to be updated",
      president: "",
      vicePresident: "",
      secretary: "",
      jointSecretary: "",
      treasurer: ""
    },
    {
      state: "BIHAR",
      status: "active",
      president: "Dr Syed Faiz Ahmed",
      vicePresident: "Dr Md Mohsin Rehan",
      secretary: "to be updated",
      jointSecretary: "to be updated",
      treasurer: "to be updated"
    },
    {
      state: "CHHATTISGARH",
      status: "active",
      president: "Dr Santosh Kumar Singh",
      vicePresident: "Dr Ajitesh Roy",
      secretary: "Dr Jitendra Kumar Chandrakar",
      jointSecretary: "Dr Vinay Kumar Soni",
      treasurer: "Dr Sanskriti Kamran"
    },
    {
      state: "DELHI",
      status: "active",
      president: "Dr Ankur Verma",
      vicePresident: "Dr Sharaang Sachdev",
      secretary: "Dr Abbas Ali Khatai",
      jointSecretary: "Dr Asif Q Beig",
      treasurer: "Dr Kamalpreet Palta"
    },
    {
      state: "GUJARAT",
      status: "to be updated",
      president: "",
      vicePresident: "",
      secretary: "",
      jointSecretary: "",
      treasurer: ""
    },
    {
      state: "KARNATAKA",
      status: "active",
      president: "Dr Naga Nischal",
      vicePresident: "Dr. Harshitha Sridhar",
      secretary: "Dr Nilu Sunil",
      jointSecretary: "Dr Viju Wilben",
      treasurer: "Dr Jagan Mohan Reddy B"
    },
    {
      state: "KERALA",
      status: "active",
      president: "Dr Shiju Stanley",
      vicePresident: "Dr Prem Kiran",
      secretary: "to be updated",
      jointSecretary: "to be updated",
      treasurer: "to be updated"
    },
    {
      state: "MAHARASHTRA",
      status: "active",
      president: "Dr Nitin Jagasia",
      vicePresident: "Dr Priyanka Mahale",
      secretary: "Dr Sujay S Patil",
      jointSecretary: "Dr Bharat Patidar",
      treasurer: "Dr Sunil B Jain"
    },
    {
      state: "ODISHA",
      status: "active",
      president: "Dr Debasis Mishra",
      vicePresident: "Dr K Srinivasulu Reddy",
      secretary: "Dr Susmeet Mishra",
      jointSecretary: "Dr Savantika Sarkar",
      treasurer: "Dr Abinash Mohanty"
    },
    {
      state: "PONDICHERRY",
      status: "to be updated",
      president: "",
      vicePresident: "",
      secretary: "",
      jointSecretary: "",
      treasurer: ""
    },
    {
      state: "PUNJAB",
      status: "active",
      president: "Dr Rohani Malhotra",
      vicePresident: "to be updated",
      secretary: "to be updated",
      jointSecretary: "Dr Kanika Bhardwaj",
      treasurer: "Dr Manoranjan R Gottra"
    },
    {
      state: "RAJASTHAN",
      status: "to be updated",
      president: "",
      vicePresident: "",
      secretary: "",
      jointSecretary: "",
      treasurer: ""
    },
    {
      state: "TAMIL NADU",
      status: "active",
      president: "Dr A Saravanavel",
      vicePresident: "to be updated",
      secretary: "Dr Karthikeyan Nataramoorthy",
      jointSecretary: "Dr Annamalai Periyanan",
      treasurer: "Dr Dinesh Kannan E S"
    },
    {
      state: "TELANGANA",
      status: "active",
      president: "Dr Sudhakar Reddy K",
      vicePresident: "Dr P Sreelaxmi",
      secretary: "Dr Seema Sunil Pulla",
      jointSecretary: "Dr Praneeth Oladri",
      treasurer: "Dr Reshma"
    },
    {
      state: "UTTAR PRADESH",
      status: "active",
      president: "Dr Sujit Singh",
      vicePresident: "Dr Haider Abbas",
      secretary: "Dr Shefali Sharma",
      jointSecretary: "Dr Rahul Kumar",
      treasurer: "Dr Ekika Singh"
    },
    {
      state: "WEST BENGAL",
      status: "active",
      president: "Dr Kumar Raj",
      vicePresident: "Dr Avishek Chatterjee",
      secretary: "Dr Bodhisatwa Choudhuri",
      jointSecretary: "Dr Purusatyam Chakraborty",
      treasurer: "Dr Nishant Agarwal"
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
            <span className="text-blue-600 font-medium">State Chapters</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-28">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              State Chapters
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Regional implementation of SEMI's vision and mission across India
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                State Chapters under SEMI
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Society for Emergency Medicine India (SEMI) ensures various parameters of its vision & mission 
                are achieved, and implemented, via dedicated SEMI members working within its individual state chapters. 
                The SEMI National Board continuously guides and supports every state chapter towards regional development 
                of emergency care, by working closely with its elected State-specific Board members.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Regional Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                Every state chapter actively promotes emergency medicine specialty within its cities and towns, 
                working with medical colleges & private hospitals to upgrade emergency care systems, supporting 
                residency training programs, and conducting state-level conferences, CMEs & workshops.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* State Chapters List */}
      <div className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              LIST OF SEMI STATE CHAPTERS (2022-2024)
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stateChapters.map((chapter, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{chapter.state}</h3>
                  {chapter.status === "to be updated" && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                      Updating
                    </span>
                  )}
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">President</span>
                    <span className={`${chapter.president ? 'text-gray-900' : 'text-gray-400'}`}>
                      {chapter.president || "To be updated"}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Vice President</span>
                    <span className={`${chapter.vicePresident ? 'text-gray-900' : 'text-gray-400'}`}>
                      {chapter.vicePresident || "To be updated"}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Secretary</span>
                    <span className={`${chapter.secretary ? 'text-gray-900' : 'text-gray-400'}`}>
                      {chapter.secretary || "To be updated"}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Joint Secretary</span>
                    <span className={`${chapter.jointSecretary ? 'text-gray-900' : 'text-gray-400'}`}>
                      {chapter.jointSecretary || "To be updated"}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Treasurer</span>
                    <span className={`${chapter.treasurer ? 'text-gray-900' : 'text-gray-400'}`}>
                      {chapter.treasurer || "To be updated"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">State Chapter Development</h2>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                The State Chapters facilitate individual members to send grass-root level feedback, share innovative 
                ideas & regional best practices, not only locally, but also with the National Board, for further 
                dissemination across the country.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                In states where chapters have not yet formed, the National Board works directly with individuals 
                and institutes to develop their emergency care systems.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p className="text-blue-800 font-medium">
                  For application & details to form/amend a state chapter – Contact SEMI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Start a State Chapter</h3>
          <p className="text-gray-600 mb-8">
            Interested in forming a SEMI State Chapter in your region? Contact us for more information.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact SEMI
          </button>
        </div>
      </div>
    </div>
  );
};

export default StateChapters;