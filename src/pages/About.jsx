// src/pages/COEs/5G6G/About.jsx

import FiveGNavbar from "../components/5G6G_Navbar";
import FiveGHeader from "../components/5G6G_Header";
import FiveGFooter from "../components/5G6G_Footer";
import SectionHeading from "../components/SectionHeading";

const About = () => {
  return (
    <>
      {/* NAVBAR */}
      <FiveGNavbar />

      {/* HEADER */}
      <FiveGHeader
        title="About Us"
        image="/COEs/header_logo.png"
      />

      {/* HERO SECTION */}
      <section className="py-18  bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <SectionHeading
            title="Empowering Next-Gen Wireless Innovation"
          />

          <div className="max-w-5xl mx-auto space-y-4">

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              The <span className="font-bold">5G/6G Centre of Excellence (CoE)</span> is a flagship initiative supported by the Government of Uttar Pradesh under its Startup Policy 2020.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              We envision creating a <span className="font-bold">robust innovation ecosystem</span> that supports the indigenous development and deployment of <span className="font-bold">5G and beyond technologies</span>. We act as a <span className="font-bold">launchpad for startups</span>, a sandbox for researchers, and a <span className="font-bold">bridge between academia and industry</span>, accelerating the path from idea to impact.
            </p>

          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-8 bg-gradient-to-b from-blue-100/50 to-white">
        <div className="max-w-7xl mx-auto px-6">

          <SectionHeading
            title="Overview"
          />

          <div className="max-w-6xl mx-auto space-y-2">

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Wireless technology has come a long way—from 1G to the latest advancements in 5G and the emerging potential of 6G. These technologies are transforming the way we <span className="font-bold">connect, communicate, and collaborate</span>, with promises of ultra-fast speeds, ultra-low latency, and unprecedented reliability.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              Recognizing this transformative potential, the <span className="font-bold">Government of Uttar Pradesh</span> established the 5G/6G Centre of Excellence at IIT Kanpur, under its <span className="font-bold">Startup Policy 2020</span>. This initiative is designed to support <span className="font-bold">innovative startups in wireless communication</span>, particularly those registered in UP, and help translate their ideas into scalable enterprises.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              These innovations cut across multiple <span className="font-bold">verticals</span> including <span className="font-bold">healthcare, smart cities, industrial IoT, education, defense, and transportation</span>, driving India’s digital transformation and global competitiveness.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              By nurturing startups and building a strong R&D infrastructure, the CoE aims to contribute to <span className="font-bold">smoother connectivity, economic growth</span>, and <span className="font-bold">job creation</span>, ultimately boosting the <span className="font-bold">state’s and nation’s GDP</span>.
            </p>

          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12">

            {/* MISSION */}
            <div className="bg-gradient-to-br from-blue-100/80 to-white rounded-3xl p-10 shadow-lg shadow-gray-400 border border-blue-100">

              <h2 className="
                text-4xl
                font-extrabold
                mb-8
                bg-gradient-to-b
                from-blue-900
                to-blue-400
                bg-clip-text
                text-transparent
              ">
                Mission
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                <span className="font-bold">
                  To incubate and support 5G/6G-driven startups and MSMEs
                </span>, enhancing their capabilities through innovation, infrastructure, mentorship, and market access.
              </p>

              <ul className="space-y-5 text-gray-700 text-lg list-disc pl-6">

                <li>
                  <span className="font-bold">
                    Indigenous R&D and innovation
                  </span>{" "}
                  in next-generation wireless systems
                </li>

                <li>
                  <span className="font-bold">
                    Commercialization of breakthrough technologies
                  </span>
                </li>

                <li>
                  <span className="font-bold">
                    Advanced research
                  </span>{" "}
                  in AI/ML for telecom, intelligent surfaces, and cell-free massive MIMO
                </li>

                <li>
                  <span className="font-bold">
                    Industry-academia-government collaboration
                  </span>{" "}
                  for broader ecosystem impact
                </li>

              </ul>
            </div>

            {/* VISION */}
            <div className="bg-gradient-to-br from-blue-100/80 to-white rounded-3xl p-10 shadow-lg shadow-gray-400 border border-blue-100">

              <h2 className="
                text-4xl
                font-extrabold
                mb-8
                bg-gradient-to-b
                from-blue-900
                to-blue-400
                bg-clip-text
                text-transparent
              ">
                Vision
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                To establish the <span className="font-bold">5G/6G Centre of Excellence at IIT Kanpur</span> as a <span className="font-bold">national and international hub</span> for wireless innovation, fostering deep-tech startups and research that generate <span className="font-bold">socio-economic impact</span> and support <span className="font-bold">India’s leadership</span> in the global telecom ecosystem.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <FiveGFooter />
    </>
  );
};

export default About;