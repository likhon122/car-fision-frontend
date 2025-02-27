import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7
} from "../../assets/images";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [
    { src: banner1, alt: "Banner 1" },
    { src: banner2, alt: "Banner 2" },
    { src: banner3, alt: "Banner 3" },
    { src: banner4, alt: "Banner 4" },
    { src: banner5, alt: "Banner 5" },
    { src: banner6, alt: "Banner 6" },
    { src: banner7, alt: "Banner 7" }
  ];

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="w-full relative">
      <div className=" h-[400px] md:h-[500px] lg:h-[700px] relative overflow-hidden">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner.src}
            alt={banner.alt}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <button
          onClick={handlePrev}
          className="absolute left-5 cursor-pointer top-1/2 transform -translate-y-1/2 bg-black/80 hover:bg-[#93b3f0] duration-300 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center z-10"
        >
          <FaArrowLeft className="text-white lg:text-3xl " />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-5 cursor-pointer top-1/2 transform -translate-y-1/2 bg-black/80 hover:bg-[#93b3f0] duration-300  rounded-full w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center z-10"
        >
          <FaArrowRightLong className="text-white lg:text-3xl" />
        </button>

        <div className="absolute bottom-20 md:bottom-24 lg:bottom-40 left-1/2 transform -translate-x-1/2 z-10">
          <Link to="/all-cars">
            <button className="p-3 lg:p-5 cursor-pointer bg-[#001845] !text-white !text-sm lg:!text-lg font-bold rounded-md shadow-md transition hover:bg-[#002855] flex gap-4 !font-mono items-center justify-center">
              See All Cars
              <FaArrowRightLong className="text-white lg:text-xl" />
            </button>
          </Link>
        </div>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`lg:w-3 w-2 lg:h-3 h-2 rounded-full cursor-pointer transition-all ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
