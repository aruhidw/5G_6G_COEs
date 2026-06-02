const FiveGFooter = () => {
  return (
    <>
      <footer className="bg-[#081B33] text-white py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT SECTION (Logos & Contact Info) */}
            <div className="text-center md:text-left">
              
              {/* Responsive Logo Container */}
              <div className="flex flex-row justify-center md:justify-start items-center gap-4 sm:gap-6 mb-6 md:mb-8">
                <img
                  src="/COEs/5g_logo.png"
                  alt="5G Logo"
                  className="h-16 sm:h-20 md:h-24 object-contain"
                />
                <img
                  src="/COEs/startinup.png"
                  alt="StartInUp Logo"
                  className="h-12 sm:h-16 md:h-20 object-contain"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Contact Us
              </h3>

              <p className="text-sm md:text-base text-gray-300 mb-1">
                Diamond Jubilee Academic Complex (DJAC),
              </p>

              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                IIT Kanpur, Uttar Pradesh
              </p>

              <a 
                href="mailto:coe5G6G@iitkfirst.com" 
                className="text-sm md:text-base text-blue-300 hover:text-blue-200 transition-colors duration-200 block md:inline"
              >
                coe5G6G@iitkfirst.com
              </a>
            </div>

            {/* RIGHT SECTION (Map) */}
            <div>
              {/* Made map height slightly shorter on mobile so it doesn't hog the screen */}
              <div className="overflow-hidden rounded-2xl shadow-lg border border-white/10">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.579816648662!2d80.2329!3d26.5123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c38291cceadf7%3A0xfdb768f610220ee!2sDiamond%20Jubilee%20Academic%20Complex%2C%20IIT%20Kanpur!5e0!3m2!1sen!2sin!4v1658499116620!5m2!1sen!2sin"
                  width="100%"
                  className="h-[180px] sm:h-[220px] md:h-[250px]"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="border-t border-white/10 mt-8 md:mt-10 pt-6 text-center text-xs md:text-sm text-gray-400">
            © 2026 5G/6G COE — Powered by SIIC IIT Kanpur
          </div>
        </div>
      </footer>
    </>
  );
};

export default FiveGFooter;