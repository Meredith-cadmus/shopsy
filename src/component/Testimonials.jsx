import React from "react";
import Slider from "react-slick";
import { TestimonialsImages } from "../data";
import { motion } from "framer-motion";
import { textVariants, Variants } from "../variants";
import { delay } from "framer-motion";

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 dark:bg-gray-900">
      <div className="container">
        <div className="text-center py-8 max-w-[600px] mx-auto ">
          <motion.h1
            className="font-bold text-3xl dark:text-white"
            variants={textVariants}
            initial="start"
            whileInView="animation"
          >
            Testimonials
          </motion.h1>
          <motion.p
            className="text-sm text-primary"
            variants={textVariants}
            initial="start"
            whileInView="animation"
          >
            What Our Customers Are Saying
          </motion.p>
        </div>
      </div>
      <motion.div variants={Variants} initial="start" whileInView="animation">
        <Slider {...settings}>
          {TestimonialsImages.map((data) => (
            <div key={data.id} className="my-6">
              <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl relative dark:bg-gray-800 bg-primary/10">
                <div>
                  <img
                    src={data.img}
                    alt="image"
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="space-y-3">
                    <p className="text-sm text-gray-500">{data.text}</p>
                    <h1 className="text-xl font-bold text-black/80 dark:text-light">
                      {data.name}
                    </h1>
                  </div>
                </div>
                <p className="absolute text-black/20 text-9xl font-serif top-0 right-0">
                  ,,
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Testimonials;
