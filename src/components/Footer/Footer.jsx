import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterBg from "../../assets/website/donut-footer.jpg";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-[100px]">
      {/* Base background color */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#8b3f3f] z-0"></div>

      {/* Background image overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full z-1"
        style={{
          backgroundImage: `url(${FooterBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.15,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 min-h-[400px] backdrop-blur-sm px-4 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between py-20 gap-8">
          {/* Left: Brand Info */}
          <div className="flex-1">
            <a
              href="#"
              className="font-cursive text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e18c8c] to-[#da5b5b]"
            >
              The Daily Donut
            </a>
            <p className="pt-4 text-white/80 max-w-sm">
              Glazed Happiness, Sprinkled Joy — Sweeten Your Day with Every Bite!
            </p>
          </div>

          {/* Right: Links + Address */}
          <div className="flex-1 flex flex-col md:flex-row justify-end gap-16">
            {/* Important Links */}
            <div>
              <h1 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#e18c8c] to-[#da5b5b]">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block text-white/80 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#e18c8c] hover:to-[#da5b5b] hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address & Socials */}
            <div>
              <h1 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#e18c8c] to-[#da5b5b]">
                Address
              </h1>
              <p className="mb-3 text-white/80">Donut Street, Sweet Town, Sukkur</p>
              <p className="text-white/80">tanzeelamemon167@gmail.com</p>

              <div className="flex gap-4 mt-6">
                <button onClick={scrollToTop}>
                  <FaInstagram className="text-3xl text-[#e18c8c] hover:text-[#da5b5b] transition-all duration-300" />
                </button>
                <button onClick={scrollToTop}>
                  <FaFacebook className="text-3xl text-[#e18c8c] hover:text-[#da5b5b] transition-all duration-300" />
                </button>
                <button onClick={scrollToTop}>
                  <FaLinkedin className="text-3xl text-[#e18c8c] hover:text-[#da5b5b] transition-all duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
