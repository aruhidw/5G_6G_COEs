import React from "react";
import {
  CheckCircle,
  Radio,
  Cpu,
  HeartPulse,
  Car,
  Wheat,
  MonitorSmartphone,
  Factory,
} from "lucide-react";
import { Plus } from "lucide-react";

import FiveGNavbar from "../components/5G6G_Navbar";
import FiveGHeader from "../components/5G6G_Header";
import FiveGFooter from "../components/5G6G_Footer";
import SectionHeading from "../components/SectionHeading";

// import HeaderImg from "../../../assets/5g6g/header.png";

const focusAreas = [
  {
    icon: Radio,
    title: "Smart and Secure Communication",
    desc: "Trusted and high-speed wireless solutions for civilian, industrial, and defense sectors.",
  },
  {
    icon: HeartPulse,
    title: "Precision Healthcare",
    desc: "Remote diagnostics, connected medical devices, and real-time data sharing.",
  },
  {
    icon: Car,
    title: "Intelligent Transportation",
    desc: "Connected mobility, autonomous vehicles, and smart traffic systems.",
  },
  {
    icon: Wheat,
    title: "Smart Agriculture",
    desc: "AI-driven farming with sensor-based monitoring and precision irrigation.",
  },
  {
    icon: MonitorSmartphone,
    title: "Virtual & Augmented Reality VR / AR",
    desc: "High-bandwidth immersive applications for training, education, design, and simulation.",
  },
  {
    icon: Factory,
    title: "Industrial Automation (Industry 4.0)",
    desc: "Smart factories, robotics, predictive maintenance, and real-time process control enabled by ultra-reliable networks.",
  },
];

const technologiesData = [
  "Enhanced Mobile Broadband (eMBB)",
  "Massive Machine-Type Communications (mMTC)",
  "Ultra-Reliable Low-Latency Communication (URLLC)",
  "Edge Computing, IoT, and AI-enabled Networks",
];

const supportData = [
  {
    title: "Incubation & Infrastructure Support",
    description: "End-to-end support for startups in 5G/6G domains.",
  },
  {
    title: "State-of-the-Art Lab Facilities",
    description: "Access to 5G/6G testbeds.",
  },
  {
    title: "Expert Mentorship",
    description: "Guidance from IIT Kanpur faculty and industry leaders.",
  },
  {
    title: "Funding Opportunities",
    description:
      "Grants and investor connect via StartIn UP and other schemes.",
  },
  {
    title: "Workshops & Training",
    description: "Regular sessions on telecom, AI, hardware, and more.",
  },
  {
    title: "Legal & Admin Support",
    description: "Assistance with IP, compliance, and registrations.",
  },
  {
    title: "Prototype to Product",
    description: "Support to build, test, and scale your innovation.",
  },
  {
    title: "Networking & Visibility",
    description: "Connect with key stakeholders and showcase your work.",
  },
];

const faqData = [
  {
    question: "Who can participate?",
    answer:
      "Any graduate researcher innovator or startup with Indian citizens.  Senior research fellows/scholars having finished/finishing in <6 months PhD/Post-Doc.  Final semester students /recently graduated alumni of UG & PG in any discipline.  Independent innovators, scientists, and prospective entrepreneurs (BBA/MBA etc. Graduates) from across science, engineering, management, and technology schools/departments.",
  },
  {
    question: "What is the Startup stage we are looking for ?",
    answer:
      "The startup should be in the ideation, validation, or very early stages.",
  },
  {
    question: "What is the frequency of call for applications ?",
    answer: "GENESIS EiR applications seek proposals once a year.",
  },

  {
    question:
      "List of documents required for submission after the applicant/proposed startup is selected ?",
    answer:
      "Following documents must be submitted once the applicant/proposed startup is selected: Certificate of IncorporationMemorandum of Association Articles of Association \nMGT 7\n    AOC 4  \nAudit Report  \nAudited Financial Statements: A signed copy of the Financial Statement  \nKYC of Directors  \nIncludes all the directors: 1. PAN Card 2. Aadhar Card  \nBoard Resolution for Agreement  \nA signed copy of Board Resolution  \nGST Number  \nTAN Number  \nBank details: Copy of bank statement/canceled cheque of new bank A/c.  Photograph of the Proposer ",
  },
  {
    question:
      "Does the applicant need to be virtually or physically incubated at SIIC, IIT Kanpur ?",
    answer:
      "The incubation can be virtual or physical depending upon the nature and other logistical aspects of the startup. It is mandatory for the startup to be incubated at SIIC, IIT Kanpur.",
  },
];

const Programs = () => {
  return (
    <>
      <FiveGNavbar />

      {/* HEADER */}
      <FiveGHeader
        title="5G/6G PROGRAM"
        image="/COEs/header_logo.png"
      />

      {/* OVERVIEW */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Program Overview For Startups, Innovators, and Industry Collaborators" />

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              The{" "}
              <span className="font-bold text-blue-900">
                5G/6G Centre of Excellence
              </span>{" "}
              supports startups developing innovative solutions leveraging
              next-generation wireless technologies.
            </p>

            <p>
              We focus on originality, sectoral impact, and alignment with 5G,
              5G+, and 6G advancements.
            </p>

            <p>
              We welcome innovators working in wireless communication, network
              optimization, IoT, edge computing, AI/ML in telecom, satellite
              communications, cybersecurity, and related domains.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAM COMPONENTS */}
      <section className="py-10 px-6 bg-blue-100/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Program Components" />

          <div className="grid md:grid-cols-2 gap-10">
            {/* EIR */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border shadow-gray-500/40 border-blue-100 ">
              <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
                Entrepreneur in Residence (EiR)
                <br /> Fellowship
              </h3>

              <p className="mb-4 text-lg">
                Fund Support: <span className="font-bold">Up to ₹4 Lakhs</span>
              </p>
              <h4 className="text-lg font-bold text-blue-900  text-left mb-3">
                Eligibility Criteria :
              </h4>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  {/* FIXED ICON */}
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-blue-700 w-5 h-5" />
                  </div>

                  {/* TEXT */}
                  <span className="leading-relaxed">
                    For EiR stage startups, a basic concept note is mandatory.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  {/* FIXED ICON */}
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-blue-700 w-5 h-5" />
                  </div>

                  {/* TEXT */}
                  <span className="leading-relaxed">
                    Selected EiR fellows must register their company in Uttar
                    Pradesh within 60 days of fund sanction.
                  </span>
                </li>
              </ul>
            </div>

            {/* MVP */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
                Minimum Viable Product (MVP)
                <br /> Grant
              </h3>

              <p className="mb-4 text-lg">
                Fund Support: <span className="font-bold">Up to ₹6 Lakhs</span>
              </p>
              <h4 className="text-lg font-bold text-blue-900  text-left mb-3">
                Eligibility Criteria :
              </h4>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle className="text-blue-700 mt-1" size={20} />
                  For MVP stage startups, a working prototype is mandatory.
                </li>
              </ul>
            </div>

            {/* <h4 className="text-lg text-left text-blue-900 font-bold mb-3">
              Important Note:{" "}
              <span className="font-normal text-gray-700">
                Applicant startups should be incorporated in{" "}
                <strong className="font-bold text-black">Uttar Pradesh</strong>
              </span>
            </h4> */}
          </div>
        </div>
      </section>

      {/* FOCUS AREA */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Focus Areas" />
          <p
            className="
        text-lg
        md:text-xl
        font-semibold
        mb-4 text-center
        bg-gradient-to-l
        from-cyan-600
        to-blue-800
        bg-clip-text
        text-transparent
      "
          >
            The 5G/6G CoE is dedicated to enabling next-generation applications
            that harness the power of advanced wireless technologies to
            transform critical sectors. Our focus spans across:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-100/50 to-white rounded-3xl p-8 shadow-lg shadow-gray-500/40 hover:-translate-y-2 transition duration-300"
              >
                <item.icon className="text-blue-800 mb-5" size={42} />

                <h3 className="text-xl font-bold text-blue-950 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* capabilities and enabling technologies */}

      <section className="py-16 px-6    bg-gradient-to-b bg-blue-200/40">
        <div className="max-w-6xl mx-auto">
          <p
            className="
        text-lg
        md:text-xl
        font-semibold
        mb-8
        bg-gradient-to-l
        from-cyan-600
        to-blue-800
        bg-clip-text
        text-transparent
      "
          >
            We also focus on core 5G/6G capabilities and enabling technologies
            such as:
          </p>

          <ul className="space-y-5 text-[#0e1a35]">
            {technologiesData.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="text-blue-700 w-5 h-5" />
                </div>

                <span className="text-base md:text-lg leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="What We Offer" />

          <p
            className="
        text-lg
        md:text-xl
        font-semibold
        mb-10
        text-center
        bg-gradient-to-l
        from-cyan-600
        to-blue-800
        bg-clip-text
        text-transparent
      "
          >
            At the 5G–6G Centre of Excellence, startups and innovators receive
            holistic support to accelerate their journey from concept to
            commercialization.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {supportData.map((item, index) => (
              <div
                key={index}
                className="
            flex items-start gap-4
            bg-white
            rounded-2xl
            p-6
            shadow-md
            hover:shadow-xl
            transition-all duration-300
          "
              >
                {/* ICON */}
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="text-blue-700 w-5 h-5" />
                </div>

                {/* TEXT */}
                <p className="text-base md:text-lg leading-relaxed text-gray-800">
                  <span className="font-bold text-blue-700">{item.title}:</span>{" "}
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* APPLICATION PROCESS */}
      <section className="py-10 px-6 bg-white">
  <div className="max-w-5xl mx-auto">
    <SectionHeading title="Application Process" />

    <div className="space-y-2">
      {[
        "Preliminary screening of applications",
        "Presentation to Expert Committee",
        "Announcement of selected startups",
        "Agreement signing & fund disbursement",
        "Support, Ongoing Monitoring, Milestone Tracking & Closure",
      ].map((step, index, array) => (
        <React.Fragment key={index}>
          {/* Step Card */}
          <div className="flex gap-6 items-center bg-blue-50 rounded-2xl p-3 shadow-sm">
            {/* The Circle (w-12) */}
            <div className="w-12 h-12 shrink-0 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg">
              {index + 1}
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              {step}
            </h3>
          </div>

          {/* Downward Arrow (Aligned perfectly under the circles) */}
          {index < array.length - 1 && (
            <div className="pl-6 flex gap-6 my-3">
              {/* This container mimics the circle's width to center the arrow precisely */}
              <div className="w- flex justify-center">
                <svg
                  className="w-7 h-7 text-blue-900 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  ></path>
                </svg>
              </div>
              {/* Invisible spacer for the right side to keep structural balance */}
              <div className="flex-1" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
</section>
      <section className="py-10 px-6 bg-blue-100/50">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Frequently Asked Questions" />

          <div className="space-y-5">
            {faqData.map((faq, index) => (
              <details
                key={index}
                className="
            group
            bg-white
            rounded-2xl
            shadow-md
            overflow-hidden
            transition-all duration-300
            hover:shadow-xl
          "
              >
                {/* QUESTION */}
                <summary
                  className="
              list-none
              cursor-pointer
              p-6
              flex
              items-center
              justify-between
            "
                >
                  <span className="text-lg font-semibold text-blue-950">
                    {faq.question}
                  </span>

                  {/* PLUS ICON */}
                  <div
                    className="
                flex items-center justify-center
                w-10 h-10
                rounded-full
                bg-blue-50
                text-blue-800
                transition-transform duration-500
                group-open:rotate-45
              "
                  >
                    <Plus size={16} />
                  </div>
                </summary>

                {/* ANSWER */}
                <div
                  className="
              px-6
              pb-6
              text-gray-700
              leading-relaxed
              animate-fadeIn
            "
                >
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FiveGFooter />
    </>
  );
};

export default Programs;
