import React from "react";
import { motion } from "framer-motion";
import { childVariants, textVariants, Variants } from "../../variants";

const Subscribe = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-orange-500 to-yellow-500"
      variants={Variants}
      initial="start"
      whileInView="animation"
    >
      <div className="container py-10 ">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold text-white mb-4">
            Get Notified About New Products
          </h1>
          <motion.input
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 outline-none"
            variants={childVariants}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Subscribe;
