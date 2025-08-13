import React from "react";
import HeroPng from "../../assets/donut3.png";
import CreamBGwebp from "../../assets/creamBG.jpg";

const Hero = () => {
  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px] bg-[#8b3f3f] flex justify-center items-center text-white relative">
        {/* Background Color */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#8b3f3f] z-0"></div>

        {/* Background Image */}
        <div
          style={{
            backgroundImage: `url(${CreamBGwebp})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            zIndex: "1",
            opacity: 0.15, // slightly more visible
          }}
        ></div>

        <div className="container pb-8 sm:pb-0 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 sm:pl-16">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Rise and shine, it’s{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-transparent bg-gradient-to-b from-[#e18c8c] to-[#da5b5b] font-cursive"
                >
                  Donut
                </span>{" "}
                time!
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="350"
                className="text-lg sm:text-xl text-white/80 max-w-lg mx-auto sm:mx-0"
              >
                Freshly baked every morning with love, sugar, and a sprinkle of
                happiness. Grab your favorite donut & start your day right!
              </p>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className="bg-gradient-to-r from-[#e18c8c] to-[#da5b5b] border-2 border-[#e18c8c] hover:scale-105 duration-200 text-white font-semibold py-2 px-5 rounded-full shadow-md">
                  Order Now
                </button>
              </div>
            </div>

            {/* Image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2"
            >
              <img
                data-aos-once="true"
                src={HeroPng}
                alt="donut img"
                className="w-[400px] sm:w-[700px] sm:scale-125 mx-auto drop-shadow-xl"
              />
              <div
                data-aos="fade-left"
                className="bg-gradient-to-r from-[#e18c8c] to-[#da5b5b] text-white font-semibold p-3 rounded-xl absolute top-10 left-10 shadow-md"
              >
                <h1>Freshly Baked</h1>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-gradient-to-r from-[#e18c8c] to-[#da5b5b] text-white font-semibold p-3 rounded-xl absolute bottom-10 right-10 shadow-md"
              >
                <h1>Best Donuts</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
