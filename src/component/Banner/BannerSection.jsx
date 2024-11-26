import React from "react";
import women2 from "../../assets/productImages/women2.jpg";
import { BannerIcons } from "../../Store";
import { motion } from "framer-motion";
import { textVariants, Variants } from "../../variants";

const BannerSection = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <motion.div
            variants={Variants}
            initial="start"
            whileInView="animation"
          >
            <img
              src={women2}
              alt="image"
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </motion.div>
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <motion.h1
              className="text-3xl sm:text-4xl font-bold"
              variants={textVariants}
              initial="start"
              whileInView="animation"
            >
              Winter Sale Upto 50% Off
            </motion.h1>
            <motion.p
              className="text-sm text-gray-500 tracking-wide leading-5"
              variants={textVariants}
              initial="start"
              whileInView="animation"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              error libero reprehenderit nulla. Numquam, alias?
            </motion.p>
            <div>
              {BannerIcons.map((icon) => (
                <motion.div
                  key={icon.id}
                  className="flex items-center gap-4 mb-3"
                  variants={textVariants}
                  initial="start"
                  whileInView="animation"
                >
                  {icon.svg}
                  <p>{icon.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
