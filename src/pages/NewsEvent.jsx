import React from "react";
import { MessageCircle } from "lucide-react";

import FiveGNavbar from "../components/5G6G_Navbar";
import FiveGHeader from "../components/5G6G_Header";
import FiveGFooter from "../components/5G6G_Footer";
import SectionHeading from "../components/SectionHeading";

const webinarData = [
  {
    title: "Exploring entrepreneurship opportunities in 5G/6G CoE IIT Kanpur",
    image: "/COEs/thumbnail1.png",
    link: "https://www.youtube.com/live/uHOYXKtnGZc",
    webinar: "Webinar 1",
  },

  {
    title: "Exploring entrepreneurship opportunities in 5G/6G CoE IIT Kanpur",
    image: "/COEs/thumbnail2.png",
    link: "https://www.youtube.com/live/plSCdiG-98Q",
    webinar: "Webinar 2",
  },
];

const NewsEvent = () => {
  return (
    <>
      <FiveGNavbar />

      {/* HEADER */}
      <FiveGHeader
        title="NEWS & EVENTS"
        image="/COEs/header_logo.png"
      />

      {/* HERO */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <SectionHeading title="Latest News" />

          <h2
            className="
              text-2xl
              md:text-3xl
              font-extrabold
              mb-8
              bg-gradient-to-l
              from-cyan-400
              to-blue-800
              bg-clip-text
              text-transparent
              px-2
            "
          >
            Section Stay Updated with the Pulse of Innovation
          </h2>

          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl  text-gray-700 leading-relaxed">
              Be a part of our growing community of innovators, researchers, and
              entrepreneurs in the 5G/6G ecosystem.
            </p>

            {/* WHATSAPP */}
            <div
              className="
                flex
                flex-wrap
                justify-center
                items-center
                gap-3
                text-lg
                md:text-xl
              "
            >
              <span className="text-gray-700">Join our</span>

              <span
                className="
                  font-bold
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-800
                  bg-clip-text
                  text-transparent
                "
              >
                WhatsApp 5G/6G CoE
              </span>

              <a
                href="https://chat.whatsapp.com/LXVYVd0ZWIZ65WggahxVTX"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  font-bold
                  text-green-600
                  hover:scale-105
                  transition
                "
              >
                Click here to join
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WEBINARS */}
      <section className="py-10 px-6 bg-gradient-to-b bg-blue-100/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Webinar Series" />

          <p
            className="
        text-lg
        md:text-xl
        text-center
        text-gray-700
        max-w-4xl
        mx-auto
        leading-relaxed
        mb-16
      "
          >
            These sessions are designed to explore the latest trends,
            innovations, and real-world applications in the field of
            next-generation networking.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {webinarData.map((item, index) => (
              <div key={index}>
                {/* CARD ONLY IMAGE */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
              block
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-xl
              border border-blue-500 
              hover:-translate-y-2
              transition-all
              duration-500
            "
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.webinar}
                      className="
                   w-full
    h-64
    md:h-72
    lg:h-80
    object-cover
    hover:scale-105
    transition-all
    duration-700
                "
                    />
                  </div>
                </a>

                {/* CONTENT OUTSIDE CARD */}
                <div className="mt-6 text-center">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                inline-flex
                items-center
                gap-2
                text-2xl
                font-bold
                text-blue-950
                hover:text-red-600
                transition
              "
                  >
                    {item.webinar}
                    <div className="text-red-600" />
                  </a>

                  <p
                    className="
                mt-4
                text-lg
                leading-relaxed
                text-gray-700
              "
                  >
                    <span
                      className="
                  font-bold
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-800
                  bg-clip-text
                  text-transparent
                "
                    >
                      Title:
                    </span>{" "}
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FOOT NOTE */}
          <div className="mt-20 text-center">
            <p
              className="
          text-xl
          md:text-2xl
          font-bold
          bg-gradient-to-r
          from-cyan-400
          to-blue-800
          bg-clip-text
          text-transparent
        "
            >
              📢 Stay tuned for upcoming webinars and events!
            </p>
          </div>
        </div>
      </section>

      <FiveGFooter />
    </>
  );
};

export default NewsEvent;
