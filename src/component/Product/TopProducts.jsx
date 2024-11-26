import React from "react";
import { TopRated } from "../../data";
import { Ratings } from "../../Store";
import { motion } from "framer-motion";
import { textVariants, Variants } from "../../variants";

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        <header className="text-center mt-10 pb-20 max-w-[600px] mx-auto">
          <motion.h1
            variants={textVariants}
            initial="start"
            whileInView="animation"
            className="text-3xl font-bold"
          >
            Best Product
          </motion.h1>
          <motion.p
            variants={textVariants}
            initial="start"
            whileInView="animation"
            className="text-sm text-primary"
          >
            Top Rated Products For You
          </motion.p>
        </header>
        <body className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center mt-10">
          {TopRated.map((item) => (
            <motion.div
              key={item.id}
              variants={Variants}
              initial="start"
              whileInView="animation"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              <img
                src={item.img}
                className="max-w-[140px] block mx-auto transform -translate-y-20 -mb-20 group-hover:scale-105 duration-300 drop-shadow-sm "
              />
              <div className="p-4 text-center">
                <div className="w-full items-center flex justify-center gap-1">
                  {Ratings.map((star) => (
                    <div key={star.id}>{star.svg}</div>
                  ))}
                </div>
                <h1 className="text-xl font-bold dark:text-white">
                  {item.title}
                </h1>
                <p className="text-sm text-gray-500 group-hover:text-white line-clamp-2 duration-300">
                  {item.description}
                </p>
                <button className="bg-primary hover:scale-105 duration-300 px-4 py-1 rounded-full mt-4 group-hover:text-primary group-hover:bg-white ">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </body>
      </div>
    </div>
  );
};

export default TopProducts;
