// src/components/5G6G_COE/5G6G_Header.jsx

const FiveGHeader = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <>
      <section className="relative w-full h-[140px] sm:h-[170px] md:h-[198px] overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/15"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

          {/* TITLE */}
          <h1
            className="
              text-white
              text-xl
              sm:text-3xl
              md:text-5xl
              font-extrabold
              drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]
              leading-tight
            "
          >
            {title}
          </h1>

          {/* SUBTITLE */}
          {subtitle && (
            <p
              className="
                mt-2
                text-gray-200
                text-xs
                sm:text-sm
                md:text-lg
                max-w-4xl
              "
            >
              {subtitle}
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default FiveGHeader;