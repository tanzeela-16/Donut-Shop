import React from "react";
import Img2 from "../../assets/donut2.png"; // You can replace this with a donut image like "../../assets/donut2.png"

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Glazed Donut",
    description: "A soft, fluffy donut coated with sweet vanilla glaze—classic and irresistible.",
    price: "Rs. 120",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Strawberry Frosted",
    description: "Topped with strawberry icing and colorful sprinkles—a joyful treat!",
    price: "Rs. 140",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Chocolate Dip",
    description: "Rich chocolate-dipped donut for a perfect blend of sweet and cocoa goodness.",
    price: "Rs. 150",
    aosDelay: "500",
  },
  {
    id: 4,
    img: Img2,
    name: "Cinnamon Twist",
    description: "Twisted delight dusted with cinnamon sugar—crispy outside, soft inside.",
    price: "Rs. 130",
    aosDelay: "700",
  },
  {
    id: 5,
    img: Img2,
    name: "Cream-Filled",
    description: "Delicious donut stuffed with smooth vanilla cream and powdered sugar top.",
    price: "Rs. 160",
    aosDelay: "900",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-14 bg-gradient-to-br from-[#fbeff5] via-[#e18c8c]/10 to-[#da5b5b]/10">
        <div className="container px-4 sm:pl-14">
          {/* Heading section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold font-cursive text-[#da5b5b] drop-shadow-sm">
              Delicious Donuts For You 
            </h1>
            <p className="mt-3 text-lg text-[#8b3f3f] font-medium">
              Freshly made with love and sweetness!
            </p>
          </div>

          {/* Services Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-3xl bg-[#fbeff5] hover:bg-gradient-to-r hover:from-[#e18c8c] hover:to-[#da5b5b] hover:text-white relative shadow-2xl duration-300 group max-w-[400px] p-6 flex items-center gap-6 border-4 border-[#e18c8c]/30 hover:border-[#da5b5b]/50"
              >
                {/* Image Section */}
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-24 h-24 rounded-full ring-4 ring-[#e18c8c] group-hover:scale-110 duration-300"
                />

                {/* Text Section */}
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold text-[#da5b5b] group-hover:text-white">
                    {service.name}
                  </h1>
                  <p className="text-[#8b3f3f] group-hover:text-white duration-300 text-sm mt-1">
                    {service.description}
                  </p>
                  <p className="mt-3 text-lg font-bold text-[#e18c8c] group-hover:text-white duration-300">
                    {service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
