import React from "react";

import FiveGNavbar from "../components/5G6G_Navbar";
import FiveGHeader from "../components/5G6G_Header";
import FiveGFooter from "../components/5G6G_Footer";
import SectionHeading from "../components/SectionHeading";

const Facilities = () => {
  return (
    <>
      <FiveGNavbar />

      {/* HEADER */}
      <FiveGHeader
        title="5G/6G FACILITIES"
        image="/COEs/header_logo.png"
      />

      {/* HERO CONTENT */}
      <section className="py-18 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          
          <SectionHeading title="State-of-the-Art Infrastructure at Your Fingertips" />

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            The CoE provides advanced R&D and prototyping infrastructure
            to accelerate wireless innovation.
          </p>

          {/* IMAGE CARD CONTAINER (Now responsive and beautifully centered) */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 max-w-4xl mx-auto transition-shadow duration-300 hover:shadow-2xl">
            <img
              src="/COEs/5G_facilities.png"
              alt="5G Facilities Co-working Space"
              className="w-full h-[250px] sm:h-[380px] md:h-[450px] object-cover"
            />
          </div>

          {/* TITLE & DESCRIPTION (Positioned perfectly under the image asset) */}
          <div className="max-w-3xl mx-auto mt-10">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-950 tracking-tight">
            Dedicated Co-working and Meeting Spaces
            </h2>
            
            <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
              Our facilities are designed to support TRL 3 to TRL 9 stage
              innovations, ensuring a smooth transition from development labs straight to the commercial market.
            </p>
          </div>

        </div>
      </section>

      <FiveGFooter />
    </>
  );
};

export default Facilities;