// src/components/5G6G_COE/5G6G_Navbar.jsx

import { useState } from "react";
import { Link } from "react-router-dom";

const FiveGNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP LOGO SECTION */}
      <div className="w-full bg-white shadow-sm">
        <div
          className="
            max-w-7xl
            mx-auto

            px-2
            sm:px-3
            lg:px-4

            flex
            justify-center
          "
        >
          {/* LOGO */}
          <a
            href="https://iitk.ac.in"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <img
              src="/COEs/5G_6G_logos.png"
              alt="5G 6G Logo"
              className="
                w-full
                max-w-[620px]

                sm:max-w-[650px]

                object-contain
              "
            />
          </a>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="sticky top-0 z-50 bg-gradient-to-b from-white to-[#081B33]/10 shadow-lg backdrop-blur-md">
        <div
          className="
            max-w-7xl
            mx-auto

            px-5
            sm:px-6
            lg:px-8

            py-4

            flex
            items-center
            justify-center

            relative
          "
        >
          {/* DESKTOP MENU */}
          <div
            className="
              hidden
              md:flex

              items-center
              gap-8
              lg:gap-10

              text-[15px]
              font-medium
              text-slate-700
            "
          >
            <Link
              to="/COEs/5G6G"
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              to="/COEs/5G6G/about"
              className="hover:text-blue-600 transition"
            >
              About Us
            </Link>

            <Link
              to="/COEs/5G6G/programs"
              className="hover:text-blue-600 transition"
            >
              Program
            </Link>

            <Link
              to="/COEs/5G6G/facilities"
              className="hover:text-blue-600 transition"
            >
              Facilities
            </Link>

            <Link
              to="/COEs/5G6G/news-event"
              className="hover:text-blue-600 transition"
            >
              News / Events
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="
              md:hidden

              absolute
              right-5

              text-gray-700
              text-3xl
            "
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed
          top-0
          right-0

          h-full
          w-72

          bg-white
          z-50

          shadow-2xl

          transform
          transition-transform
          duration-300

          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-5">
          <button
            onClick={() => setOpen(false)}
            className="text-3xl text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* MOBILE LINKS */}
        <div
          className="
            flex
            flex-col

            gap-6

            px-8

            text-lg
            font-medium
            text-gray-700
          "
        >
          <Link to="/COEs/5G6G" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link
            to="/COEs/5G6G/about"
            onClick={() => setOpen(false)}
          >
            About Us
          </Link>

          <Link
            to="/COEs/5G6G/programs"
            onClick={() => setOpen(false)}
          >
            Program
          </Link>

          <Link
            to="/COEs/5G6G/facilities"
            onClick={() => setOpen(false)}
          >
            Facilities
          </Link>

          <Link
            to="/COEs/5G6G/news-event"
            onClick={() => setOpen(false)}
          >
            News / Events
          </Link>
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