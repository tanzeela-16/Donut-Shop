import React, { useEffect, useState } from "react";
import BgJPG from "../../assets/website/donut-bg.jpg"; // Replace with your donut background

const reviews = [
  { name: "Hafsa Saif", rating: 5, comment: "Best donut I’ve ever had! So soft and flavorful." },
  { name: "Maryam Zulqarnain", rating: 4, comment: "Great service and sweet treats. Highly recommend!" },
  { name: "Ayesha M.", rating: 5, comment: "The strawberry glaze is heavenly. I come every day!" },
  { name: "Sara Khan", rating: 5, comment: "Loved the ambiance and the donuts are top-tier!" },
  { name: "Ali Raza", rating: 4, comment: "Tasty donuts, though I’d love more variety in toppings." },
  { name: "Usman Iqbal", rating: 4, comment: "Really good donuts, just wish for faster service." },
  { name: "Zara Noor", rating: 5, comment: "The best chocolate donut in town! A must-try." },
];

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-16 w-full" style={{ minHeight: "400px" }}>
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BgJPG})`, filter: "blur(8px)" }}
      ></div>

      {/* Overlay & Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl text-[#5c1b1b] font-extrabold drop-shadow-md tracking-wide font-cursive">
            What Our Donut Lovers Say
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-all duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${(currentReviewIndex * 100) / 3}%)`,
              width: `${reviews.length * 33.33}%`,
            }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="w-full sm:w-1/3 px-4 py-6">
                <div className="bg-gradient-to-br from-pink-200 via-yellow-100 to-purple-200 rounded-3xl p-6 shadow-2xl hover:scale-105 duration-300">
                  <div className="flex justify-center mb-4 text-yellow-400 text-lg">
                    {"★".repeat(review.rating)}
                  </div>
                  <p className="text-xl font-semibold text-pink-900 font-cursive">{review.name}</p>
                  <p className="text-sm text-pink-800 mt-3">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
