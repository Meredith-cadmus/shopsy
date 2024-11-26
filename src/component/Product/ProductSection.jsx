import React from "react";
import { ProductsData } from "../../data";
import { motion } from "framer-motion";
import { childVariants, staggerVariants, textVariants } from "../../variants";

const ProductSection = () => {
  return (
    <div className="py-12 dark:bg-gray-900">
      <div className="container">
        <header className="text-center mb-10 max-w-[600px] mx-auto">
          <motion.h1
            variants={textVariants}
            initial="start"
            whileInView="animation"
            className="text-3xl font-bold dark:text-white"
          >
            Products
          </motion.h1>
          <motion.p
            variants={textVariants}
            initial="start"
            whileInView="animation"
            className="text-primary"
          >
            Top Selling Products For You
          </motion.p>
        </header>
        <body>
          <motion.div
            variants={staggerVariants}
            initial="start"
            whileInView="animation"
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5"
          >
            {ProductsData.map((product) => (
              <motion.div key={product.id} variants={childVariants}>
                <img
                  src={product.img}
                  className="w-[150px] h-[220px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold line-clamp-1 dark:text-white">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600">{product.color}</p>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5 fill-primary"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="dark:text-slate-100">{product.ratin}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </body>
      </div>
    </div>
  );
};

export default ProductSection;
