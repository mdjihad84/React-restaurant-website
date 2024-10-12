import React from "react";

const Hero = () => {
  return (
    <div className="block">
      {/* Hero Background Image */}
      <div
        className="w-full h-[300px] sm:h-[300px] md:mt-[80px] md:h-[500px] lg:h-[700px] xl:h-[804px] bg-cover bg-center"
        style={{ backgroundImage: "url('/Images/Hero.jpg')" }}
        aria-label="Hero image"
      />

      {/* Food Image */}
      <div>
        <img
          className="mx-auto mt-2"
          src="/Images/Food.jpg"
          alt="Food"
        />
      </div>
    </div>
  );
};

export default Hero;

