import React from "react";
import HeroPng from "../../assets/donut3.png";
import CreamBGwebp from "../../assets/creamBG.webp";

const Hero = () => {
  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px] bg-choco flex justify-center items-center text-white relative">
        {/* Background Color */}
        <div className="absolute top-0 left-0 w-full h-full bg-choco z-0"></div>

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
            opacity: 0.1, // subtle overlay effect
          }}
        ></div>

        <div className="container pb-8 sm:pb-0 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-frost"
              >
                Rise and grind, it's{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-accent font-cursive"
                >
                  Coffee
                </span>{" "}
                time!
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-choco font-semibold py-2 px-5 rounded-full shadow-md">
                  Coffee Lovers
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
                alt="coffee img"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto drop-shadow-xl"
              />
              <div
                data-aos="fade-left"
                className="bg-gradient-to-r from-primary to-secondary text-choco font-semibold p-3 rounded-xl absolute top-10 left-10 shadow-md"
              >
                <h1>Espresso Haven</h1>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-gradient-to-r from-primary to-secondary text-choco font-semibold p-3 rounded-xl absolute bottom-10 right-10 shadow-md"
              >
                <h1>Best Coffee</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
