import React from "react";
import logo from "../assets/semi logo.png";

const SemiFooter = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-28 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Stay Updated with SEMI
              </h3>
              <p className="text-gray-600 max-w-2xl">
                Subscribe to our newsletter for the latest updates in emergency medicine, 
                training programs, and professional development opportunities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full lg:w-80"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-white">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-28 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="flex flex-col items-center md:items-start">
                <div className="mb-6">
                  <img
                    src={logo}
                    alt="Society for Emergency Medicine India"
                    className="h-16 w-auto"
                  />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left mb-6">
                  Leading the advancement of emergency medical care across India through excellence, education, and innovation since 1999.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                  </svg>
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-gray-900 text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "About SEMI", link: "/about/semi" },
                  { name: "Membership", link: "/membership" },
                  { name: "Events", link: "/events" },
                  { name: "Resources", link: "/resources" },
                  { name: "Research", link: "/research" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-gray-900 text-lg mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-gray-600 text-sm">+91 8767434355</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-gray-600 text-sm">enquiries@semi.com</p>
                  </div>
                </div>
                <button className="w-full px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm mt-4">
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Follow Us */}
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-gray-900 text-lg mb-6">Follow Us</h4>
              <p className="text-gray-600 text-sm mb-6">
                Stay connected with SEMI for updates and community engagement.
              </p>
              <div className="flex space-x-3">
                {[
                  {
                    name: "Facebook",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    ),
                    color: "hover:bg-blue-600",
                    link: "#"
                  },
                  {
                    name: "Twitter",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    ),
                    color: "hover:bg-blue-400",
                    link: "#"
                  },
                  {
                    name: "LinkedIn",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ),
                    color: "hover:bg-blue-800",
                    link: "#"
                  },
                  {
                    name: "Instagram",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.24 14.815 3.75 13.664 3.75 12.367s.49-2.448 1.376-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.886.875 1.376 2.026 1.376 3.323s-.49 2.448-1.376 3.323c-.875.808-2.026 1.297-3.323 1.297z"/>
                      </svg>
                    ),
                    color: "hover:bg-pink-600",
                    link: "#"
                  }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    className={`flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-lg transition-all duration-200 ${social.color} hover:text-white hover:shadow-md`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-28 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 text-center md:text-left">
              © 2024 Society for Emergency Medicine India. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <a href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="/sitemap" className="hover:text-blue-600 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SemiFooter;