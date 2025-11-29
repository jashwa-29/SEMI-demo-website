import React from 'react';

const OurMission = () => {
  const visionPoints = [
    "To bring recognition on to all academic training programs that are creating emergency physicians for India, and integrate those under one single standardized board certification.",
    "To spread awareness about emergency medicine specialty among healthcare & non-healthcare professionals, and general public.",
    "To maintain unity among the different groups of emergency physicians in India, and to channel their strengths towards EM development.",
    "To improve emergency medical care in non-urban and rural communities.",
    "To incorporate appropriate emergency medicine training within MBBS and postgraduate curriculum.",
    "To create standardized patient treatment and emergency department process guidelines.",
    "To promote gender equality in EM training, employment & governance; to remove gender bias and discrimination from patient care.",
    "To promote research in EM and publication of research.",
    "To promote more conferences & CMEs in emergency medicine.",
    "To provide free first-aid & BLS training to the public.",
    "To facilitate EM faculty development and leadership activities.",
    "To develop pre-hospital emergency care and pediatric emergency medicine."
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
            <span className="text-blue-600 font-medium">SEMI Vision 2020</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            SEMI Vision 2020
          </h1>
          <div className="w-20 h-0.5 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            A strategic framework for advancing emergency medicine in India through 
            standardized training, public awareness, and healthcare excellence.
          </p>
          <div className="text-gray-700 font-medium">
            Effective: November 2016 – November 2020
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-28">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Strategic Objectives
                </h2>
                
                <div className="space-y-8">
                  {visionPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-6 pb-8 border-b border-gray-100 last:border-b-0 last:pb-0">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white font-semibold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Timeline</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Nov 2016</span>
                    <span>Nov 2020</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="w-full bg-blue-600 h-1 rounded-full"></div>
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    4-Year Implementation
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Framework</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Objectives</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">4 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Scope</span>
                    <span className="font-semibold">National</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 hover:bg-gray-50 rounded border border-gray-200 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">Vision Document</div>
                        <div className="text-sm text-gray-500">PDF • 1.2MB</div>
                      </div>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </button>
                  
                  <button className="w-full text-left p-3 hover:bg-gray-50 rounded border border-gray-200 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">Contributors</div>
                        <div className="text-sm text-gray-500">Team List</div>
                      </div>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <div className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Continuing the Legacy
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            SEMI Vision 2020 established the foundation for emergency medicine excellence in India. 
            Our work continues to build upon these strategic objectives.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Learn About Current Initiatives
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurMission;