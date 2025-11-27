import React from "react";
import logo from "../assets/semi logo.png";

const SemiFooter = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-200">
      {/* Top light-blue newsletter bar */}
      <div className="bg-[#e9f6ff]">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-12 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-lg md:text-xl font-semibold text-[#222] text-center md:text-left">
              Stay up to date with our SEMI Newsletter
            </p>
            <button className="inline-flex items-center justify-center px-8 py-2.5 rounded-md bg-[#f23433] text-white font-semibold text-sm md:text-base shadow-sm hover:bg-[#d82020] transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Bottom white area */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-12 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left: Logo + Name */}
            <div className="flex items-center gap-4">
              {/* Replace /logo.png with your SEMI logo */}
              <div className="w-68 h-20 flex items-center justify-center">
                <img
                  src={logo}
                  alt="SEMI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            
            </div>

            {/* Center: Get in touch */}
            <div className="text-center">
              <p className="text-lg font-semibold text-[#222] mb-3">
                Get In Touch
              </p>
              <button className="px-10 py-2.5 rounded-md bg-[#f23433] text-white font-semibold shadow-sm hover:bg-[#d82020] transition-colors">
                Contact
              </button>
              <p className="mt-3 text-sm text-[#136834]">
                Email: enquiries@semi.com
              </p>
            </div>

            {/* Right: Follow us */}
            <div className="text-center">
              <p className="text-lg font-semibold text-[#222] mb-3">
                Follow Us
              </p>

              {/* Social icons bar */}
              <div className="inline-flex items-center gap-2 bg-[#0050c8] rounded-md px-4 py-2">
                {/* Facebook */}
                <a
                  href="#"
                  className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-[#1977f3] text-xl font-bold"
                  aria-label="Facebook"
                >
                  f
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white text-xl font-bold"
                  aria-label="Instagram"
                >
                  i
                </a>
                {/* LinkedIn */}
                <a
                  href="#"
                  className="flex items-center justify-center h-8 w-8 rounded-full bg-[#0a66c2] text-white text-xl font-bold"
                  aria-label="LinkedIn"
                >
                  in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SemiFooter;
