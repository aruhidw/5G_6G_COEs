
import FiveGNavbar from "../components/5G6G_Navbar";
import FiveGHeader from "../components/5G6G_Header";
import FiveGFooter from "../components/5G6G_Footer";
import SectionHeading from "../components/SectionHeading";
import Cards from "../components/Cards";

import {
  Building2,
  FlaskConical,
  Users,
  BadgeDollarSign,
  Handshake,
  Scale,
  Cog,
  Wifi,
} from "lucide-react";
export const CARDS_DATA = [
  {
    Icon: Building2,
    title: "Infrastructure & Support",
    description:
      "End-to-end support for startups in 5G/6G and communication technologies.",
  },

  {
    Icon: FlaskConical,
    title: "State-of-the-Art Labs",
    description:
      "Access to advanced testbeds, RF labs, SDR platforms, and tools.",
  },

  {
    Icon: Users,
    title: "Mentorship & Guidance",
    description:
      "Mentoring from IIT Kanpur faculty and industry experts.",
  },

  {
    Icon: BadgeDollarSign,
    title: "Access to Funding",
    description:
      "Opportunities for grants, seed funds, and investor connects.",
  },

  {
    Icon: Handshake,
    title: "Training & Workshops",
    description:
      "Hands-on sessions, masterclasses, and expert talks on AI for telecom, hardware design, and more.",
  },

  {
    Icon: Scale,
    title: "Legal & Admin Support",
    description:
      "Help with company registration, IP filing, compliance, and government schemes.",
  },

  {
    Icon: Cog,
    title: "Prototype to Product",
    description:
      "Infrastructure and guidance to convert ideas into market-ready products.",
  },

  {
    Icon: Wifi,
    title: "Networking & Visibility",
    description:
      "Join innovation networks and showcase your work to investors, partners, and government.",
  },
];

export default function FiveGSixG() {
  return (
    <>
      <FiveGNavbar />

      <FiveGHeader
       title="5G/6G CENTRE OF EXCELLENCE"
        image="/COEs/header_logo.png"
      />

      {/* HERO */}
      {/* <div className="relative h-[350px] md:h-[500px] w-full">
        <img
          src="/5g/hero.png"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            5G / 6G Centre of Excellence
          </h1>
        </div>
      </div> */}
{/* "text-6xl font-extrabold bg-gradient-to-r from-blue-900 via-blue-500 to-indigo-400 bg-clip-text text-transparent text-center mb-6" */}
      {/* ABOUT */}
      <section className="bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl
        md:text-6xl
        font-extrabold
        text-center
        mb-8
        bg-gradient-to-b
        from-blue-900
        to-blue-400
        bg-clip-text
        text-transparent ">
            What is 5G/6G CoE?
          </h2>

          <h3 className="text-center  bg-gradient-to-b from-blue-600 to-blue-400 bg-clip-text text-transparent text-2xl font-semibold mb-8">
            Accelerating India's 5G/6G Innovation Ecosystem
          </h3>

          <p className="text-gray-700 leading-relaxed text-lg mb-6 text-justify">
            The <b>5G/6G Centre of Excellence (CoE)</b> at IIT Kanpur,
            supported by StartIn UP, Government of Uttar Pradesh,
            is a dedicated platform to drive research, foster innovation,
            and entrepreneurship in next-generation wireless technologies.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg text-justify">
            Whether you're a startup, academic researcher, industry expert,
            or policymaker, the CoE offers a collaborative platform
            to co-create, test, and accelerate the development and deployment of <b>indigenous 5G and 6G solutions</b>that are future-ready and globally competitive .
          </p>
        </div>
      </section>

      {/* CARDS */}
 

<section className="bg-[#ebebeb] py-10 px-6">

  <div className="max-w-7xl mx-auto">

    <h2
      className="
        text-4xl
        md:text-4xl
        font-extrabold
        text-center
        mb-12 
        bg-gradient-to-b
        from-blue-900
        to-blue-400
        bg-clip-text
        text-transparent
      "
    >
      5G/6G CoE Offers You
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {CARDS_DATA.map((item) => (
        <Cards
          key={item.title}
          icon={<item.Icon className="w-10 h-10" />}
          title={item.title}
          description={item.description}
        />
      ))}

    </div>

  </div>

</section>
      < FiveGFooter/>
    </>
  );
}