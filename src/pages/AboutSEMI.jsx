import React from 'react';

const AboutSEMI = () => {
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
            <span className="text-blue-600 font-medium">About SEMI</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-28">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About Society for Emergency Medicine India
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              The premier organization representing emergency physicians and paramedics across India, 
              setting standards for emergency medical care since 1999.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Society for Emergency Medicine India (SEMI)
                </h2>
                
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    The <strong>Society for Emergency Medicine India (SEMI)</strong> is the first and only organization 
                    representing trained and qualified emergency physicians and paramedics in India. Established in 1999 
                    with registration number 3602/2000, SEMI operates from its headquarters in Hyderabad, setting the 
                    standard for emergency medical care throughout the nation.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    As a distinguished full member of the <strong>International Federation of Emergency Medicine (IFEM)</strong>, 
                    SEMI serves as the sole representative of India on the global emergency care platform, fostering 
                    international collaboration and maintaining the highest standards of emergency medical practice.
                  </p>
                </div>

                {/* Key Information */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Key Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Established</h4>
                        <p className="text-2xl font-bold text-blue-600 mt-1">1999</p>
                        <p className="text-sm text-gray-600 mt-1">Pioneering emergency medicine in India</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Registration</h4>
                        <p className="text-lg font-bold text-gray-700 mt-1">3602/2000</p>
                        <p className="text-sm text-gray-600 mt-1">Officially recognized organization</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Headquarters</h4>
                        <p className="text-lg font-bold text-gray-700 mt-1">Hyderabad</p>
                        <p className="text-sm text-gray-600 mt-1">Strategic operations base</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">International</h4>
                        <p className="text-lg font-bold text-gray-700 mt-1">IFEM Member</p>
                        <p className="text-sm text-gray-600 mt-1">Global representation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Mission Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To advance emergency medical care in India through comprehensive education, specialized training, 
                  and professional development while establishing and maintaining the highest standards of emergency medical practice.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To position India as a global leader in emergency medical care through excellence in clinical practice, 
                  innovative education programs, cutting-edge research, and influential healthcare policy development.
                </p>
              </div>

              {/* Global Recognition */}
              <div className="bg-blue-600 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Global Recognition</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  As a full member of IFEM, SEMI represents India on the international stage, bringing global 
                  best practices to Indian emergency care.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <span className="font-semibold">Full Member</span>
                  </div>
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <span className="font-semibold">Since 1999</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* Legacy Section */}
<div className="py-16 bg-white">
  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">A Legacy of Excellence</h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
    </div>

    <div className="bg-gray-50 rounded-lg p-6 sm:p-8 border border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
            For over two decades, SEMI has been at the forefront of transforming emergency care in India. 
            Our commitment to excellence has established new benchmarks in emergency medical services, 
            education, and professional development.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">24+</div>
              <div className="text-xs sm:text-sm text-gray-600">Years of Service</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-xs sm:text-sm text-gray-600">Professionals</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">1</div>
              <div className="text-xs sm:text-sm text-gray-600">National Voice</div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Trusted Leadership</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Recognized as the authoritative voice for emergency medicine in India.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default AboutSEMI;