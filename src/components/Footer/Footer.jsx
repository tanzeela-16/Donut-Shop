import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterBg from "../../assets/website/donut-footer.jpg";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-choco/80 min-h-[400px] backdrop-blur-sm">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* Brand Info */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-cursive text-3xl sm:text-4xl text-secondary"
            >
              Golden Donut Bar
            </a>
            <p className="pt-4 text-frost">
              Glazed Happiness, Sprinkled Joy — Sweeten Your Day with Every Bite!
            </p>
          </div>

          {/* Important Links */}
          <div className="py-8 px-4">
            <h1 className="text-xl font-semibold mb-3 text-sprinkle">Important Links</h1>
            <ul className="space-y-3">
              {FooterLinks.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="inline-block text-frost hover:text-secondary hover:scale-105 duration-200"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Socials */}
          <div className="py-8 px-4">
            <h1 className="text-xl font-semibold mb-3 text-sprinkle">Address</h1>
            <p className="mb-3 text-frost">Donut Street, Sweet Town, Sukkur</p>
            <p className="text-frost">tanzeelamemon167@gmail.com</p>

            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/har00nzcoffee/?hl=en" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl text-primary hover:text-secondary transition-all duration-300" />
              </a>
              <a href="https://www.facebook.com/groups/Coffeerocks/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl text-primary hover:text-secondary transition-all duration-300" />
              </a>
              <a href="https://www.linkedin.com/company/coffee-fest/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl text-primary hover:text-secondary transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
