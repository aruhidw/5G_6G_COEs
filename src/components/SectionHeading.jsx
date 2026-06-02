const SectionHeading = ({
  title,
  subtitle,
  center = true,
}) => {
  return (
    <div className={`${center ? "text-center" : ""} mb-16`}>

      {/* TITLE */}
      <h2
        className="
          text-4xl
          md:text-5xl
          font-extrabold
          bg-gradient-to-b
          from-blue-900
          via-blue-450
          to-blue-400
          bg-clip-text
          text-transparent
          py-2
        "
      >
        {title}
      </h2>

      {/* SUBTITLE */}
  {subtitle && (
  <p
    className="
      mt-4
      text-base
      md:text-lg
      max-w-4xl
      mx-auto
      leading-relaxed
      text-center
      bg-gradient-to-b
      from-sky-900
      via-sky-800
      to-cyan-200
      bg-clip-text
      text-transparent
      font-medium
    "
  >
    {subtitle}
  </p>
)}
    </div>
  );
};

export default SectionHeading;