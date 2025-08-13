import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-gradient-to-br from-pink-50 via-yellow-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 dark:text-white duration-200 overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Reviews />
      <Footer />
    </div>
  );
};

export default App;
