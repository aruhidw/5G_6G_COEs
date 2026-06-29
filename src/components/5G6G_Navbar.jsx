import { useState } from "react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/COEs/5G6G/about", label: "About Us" },
  { to: "/COEs/5G6G/programs", label: "Program" },
  { to: "/COEs/5G6G/facilities", label: "Facilities" },
  { to: "/COEs/5G6G/news-event", label: "News / Events" },
];

const navLinkClass = ({ isActive }) =>
  `transition-colors duration-200 ${
    isActive
      ? "text-blue-600 border-b-2 border-blue-600 pb-0.5"
      : "text-slate-700 hover:text-blue-600"
  }`;

const FiveGNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* LOGO BANNER */}
      <div className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 flex justify-center">
          <a href="https://iitk.ac.in" target="_blank" rel="noreferrer">
            <img
              src="/COEs/5G_6G_logos.png"
              alt="5G 6G Logo"
              className="w-full max-w-[620px] sm:max-w-[650px] object-contain"
            />
          </a>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-gradient-to-b from-white to-[#081B33]/10 shadow-lg backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 flex items-center justify-center relative">
          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[15px] font-medium">
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={navLinkClass}>
                {label}
              </NavLink>
            ))}
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden absolute right-5 text-gray-700 text-3xl"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-3xl text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-6 px-8 text-lg font-medium">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default FiveGNavbar;
