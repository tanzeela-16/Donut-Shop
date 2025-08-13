import React from "react";
import BannerImg from "../../assets/donut-white.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import BgImg from "../../assets/website/donut-cream.jpg";

const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div className="relative">
        {/* Background image with blur */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${BgImg})` }}
        >
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        {/* Content */}
<div className="relative min-h-[550px] flex justify-center items-center py-12 sm:py-0">
  <div className="container px-12 sm:px-24 lg:px-40">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              
              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 order-2 sm:order-1">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-poppins text-[#da5b5b]"
                >
                  Indulge in the Sweetness of Handcrafted Donuts
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-[#8b3f3f] tracking-wide leading-5"
                >
                  From classic glazed to creative flavors, our donuts are made fresh every day using premium ingredients. Treat yourself to a delightful bite that brings smiles in every moment.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-[#fbeff5] text-[#da5b5b]" />
                      <span className="text-[#8b3f3f]">Premium Quality</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-[#e18c8c]/20 text-[#da5b5b]" />
                      <span className="text-[#8b3f3f]">Freshly Baked</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-[#da5b5b]/20 text-[#da5b5b]" />
                      <span className="text-[#8b3f3f]">Fast Delivery</span>
                    </div>
                  </div>

                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-[#da5b5b]/50 pl-6 space-y-2 text-[#8b3f3f]"
                  >
                    <h1 className="text-3xl font-bold font-poppins">
                      A Donut for Every Craving
                    </h1>
                    <p className="text-sm">
                      Whether you're celebrating or just craving something sweet, our donuts offer the perfect mix of flavor and fun. Grab one (or a dozen) and brighten your day.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image section */}
              <div
                data-aos="zoom-in"
                className="order-1 sm:order-2 flex justify-end"
              >
                <img
                  src={BannerImg}
                  alt="donut img"
                  className="max-w-[430px] w-full drop-shadow-[10px_-10px_12px_rgba(0,0,0,0.8)]"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
