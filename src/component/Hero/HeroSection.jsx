import React from "react";
import Slider from "react-slick";
import { ImageList } from "../../data";
import { motion } from "framer-motion";
import { heroVariants, textVariants, Variants } from "../../variants";

const HeroSection = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "ease-in-out",
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background */}
      <div className="w-[700px] h-[700px] bg-primary/40 absolute -top-1/2 right-0 rotate-45 rounded-3xl -z-9"></div>
      {/* hero section */}
      <section className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((image) => (
            <div key={image.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 px-4">
                {/* text section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <motion.h1
                    variants={heroVariants}
                    initial="start"
                    animate="animation"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {image.title}
                  </motion.h1>
                  <motion.p
                    variants={textVariants}
                    initial="start"
                    animate="animation"
                    className="text-sm"
                  >
                    {image.description}
                  </motion.p>
                  <div>
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white px-4 py-2 rounded-full">
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <motion.img
                      variants={Variants}
                      initial="start"
                      animate="animation"
                      src={image.img}
                      alt="Image"
                      className="w-[200px] h-[150px] sm:h-[350px] sm:w-[350px] sm:scale-125 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default HeroSection;
