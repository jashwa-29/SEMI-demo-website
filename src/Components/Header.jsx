import React, { useState } from "react";
import logo from "../assets/semi logo.png";

const navItems = [
  { name: "Home", link: "/" },
  {
    name: "About",
    submenu: [
      { name: "About SEMI", link: "/about/semi" },
      { name: "Our Mission & Vision", link: "/about/mission-vision" },
      { name: "National Board", link: "/about/national-board" },
      { name: "Past Presidents", link: "/about/past-presidents" },
      { name: "State Chapters", link: "/about/state-chapters" },
      { name: "Constitution", link: "/about/constitution" },
    ],
  },
  {
    name: "Our Work",
    submenu: [
      { name: "Overview", link: "/work/overview" },
      { name: "Advocacy & Policy", link: "/work/advocacy" },
      { name: "Training & Capacity Building", link: "/work/training" },
      { name: "Conferences & Annual Events", link: "/work/events" },
      { name: "Community & Public Outreach", link: "/work/outreach" },
    ],
  },
  {
    name: "Resources",
    submenu: [
      { name: "Clinical Guidelines", link: "/resources/guidelines" },
      { name: "Publications", link: "/resources/publications" },
      { name: "Reports & White Papers", link: "/resources/reports" },
    ],
  },
  {
    name: "Research",
    link: "https://journal-website.com", // Placeholder
    external: true,
  },
  {
    name: "Education",
    submenu: [{ name: "Workshops & Training", link: "/education/workshops" }],
  },
  {
    name: "Events",
    link: "https://emcon.in",
    external: true,
  },
  {
    name: "News",
    submenu: [{ name: "Newsletter", link: "/news/newsletter" }],
  },
  {
    name: "Membership",
    submenu: [
      { name: "Membership Reputation", link: "/membership/reputation" },
      { name: "Become a Member", link: "/membership/join" },
    ],
  },
  { name: "Contact", link: "/contact" },
];

const Header = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="w-full border-b border-slate-200 bg-white relative z-50">
      {/* ===== Top blue area: contact + logo + buttons ===== */}
      <div className="w-full ">
        {/* Top contact bar */}
        <div className="max-w-7xl mx-auto hidden md:flex items-center justify-end text-sm text-slate-700 py-2 pr-6 gap-4 bg-[#ffff]">
          <span>+91 8767434355</span>
          <span className="h-4 w-px bg-slate-300" />
          <a
            href="mailto:enquiries@semi.com"
            className="hover:text-blue-700 transition-colors"
          >
            enquiries@semi.com
          </a>
        </div>

        {/* Main header row */}
        <div className="bg-[#e9f4ff]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pb-2 pt-3 bg-[#e9f4ff]">
          <div className="flex items-center justify-between">
            {/* Logo + Name */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => (window.location.href = "/")}
            >
              <div className="flex items-center justify-center   rounded-md shadow-sm overflow-hidden">
                <img
                  src={logo}
                  alt="SEMI Logo"
                  className="w-56"
                />
              </div>
  
            </div>

            {/* Right controls (desktop) */}
            <div className="hidden md:flex items-center gap-3">
              <button className="rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 transition-colors">
                Membership
              </button>
              <button className="rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 transition-colors">
                Donate
              </button>
              <button className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 transition-colors">
                Login
              </button>

              {/* Search icon */}
              <button
                type="button"
                className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white hover:bg-blue-950 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 bg-white p-2 text-slate-700"
              onClick={() => setOpenMobile((prev) => !prev)}
            >
              {openMobile ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M6 18L18 6"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
</div>
      </div>

      {/* ===== White nav bar (desktop) ===== */}
      <div className="hidden md:block bg-white shadow-[0_2px_4px_rgba(0,0,0,0.04)]">
        <div className="px-4 md:px-8 lg:px-16 py-1">
          <nav className="flex items-center justify-center gap-6 text-lg font-medium text-slate-800">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.link || "#"}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : ""}
                  className="flex items-center gap-1 hover:text-blue-800 transition-colors py-3"
                  onClick={(e) => {
                    if (item.submenu) e.preventDefault();
                  }}
                >
                  {item.name}
                  {item.submenu && <span className="text-md">▾</span>}
                </a>

                {/* Desktop Dropdown */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full w-64 bg-white border border-slate-200 shadow-lg rounded-md overflow-hidden z-50">
                    <div className="flex flex-col py-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.link}
                          className="px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* ===== Mobile dropdown (nav + buttons) ===== */}
      {openMobile && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            {/* Buttons */}
            <div className="flex flex-wrap gap-2">
              <button className="flex-1 rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white">
                Membership
              </button>
              <button className="flex-1 rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white">
                Donate
              </button>
            </div>
            <button className="w-full rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white">
              Login
            </button>

            {/* Search box (simple) */}
            <div className="mt-2 flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>

            {/* Nav items */}
            <nav className="mt-2 flex flex-col gap-2 text-sm font-medium text-slate-800">
              {navItems.map((item) => (
                <div key={item.name}>
                  <div
                    className="flex items-center justify-between py-1 border-b border-slate-100 text-left cursor-pointer"
                    onClick={() => {
                      if (item.submenu) {
                        handleDropdownToggle(item.name);
                      } else {
                        if (item.external) {
                          window.open(item.link, "_blank");
                        } else {
                          window.location.href = item.link;
                        }
                      }
                    }}
                  >
                    <span>{item.name}</span>
                    {item.submenu && (
                      <span
                        className={`text-xs transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                    )}
                  </div>
                  {/* Mobile Submenu */}
                  {item.submenu && activeDropdown === item.name && (
                    <div className="pl-4 flex flex-col gap-2 mt-2 border-l-2 border-slate-100">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.link}
                          className="text-slate-600 hover:text-blue-700 py-1"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
