import React from "react";
import shop from "../assets/logo.png";
import DarkMode from "./DarkMode";
import { dropdownlink, items } from "../data";
import { motion } from "framer-motion";
import { Variants } from "../variants";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = ({ handleOrder }) => {
  const [sideOpen, setSideOpen] = useState(true);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-300 relative z-40">
      {/* upper navbar */}
      <nav className="bg-primary/40 py-2">
        <section className="container flex justify-between items-center">
          <div className="flex items-center gap-5 relative">
            <div
              onClick={() => setSideOpen(!sideOpen)}
              className="sm:hidden inline-block cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={shop} alt="logo" className="w-10" />
              Shopsy
            </a>
          </div>
          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] dark:text-black px-2 py-1 sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 focus:outline-none focus:border-1 focus:border-primary"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4 stroke-gray-500 group-hover:stroke-primary absolute top-1/2 -translate-y-1/2 right-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            {/*  order button */}
            <button
              onClick={() => handleOrder()}
              className="group sm:flex hidden bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full items-center gap-3"
            >
              <span className="group-hover:block hidden transition-all duration-300">
                Order
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 drop-shadow-sm"
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
            </button>
            {/* DarkMode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </section>
        <div>
          {
            <Sidebar
              sideOpen={sideOpen}
              setSideOpen={setSideOpen}
              handleOrder={handleOrder}
            />
          }
        </div>
      </nav>
      {/* lower navbar */}
      <motion.nav
        variants={Variants}
        initial="start"
        animate="animation"
        className="flex justify-center"
      >
        <ul className=" items-center sm:flex hidden gap-4">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="px-4 inline-block hover:text-primary py-4 duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-2 py-2">
              Trending Products
              <span>
                <svg
                  fill="#000000"
                  width="18px"
                  height="18px"
                  viewBox="-6.5 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-200 group-hover:rotate-180"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>dropdown</title>{" "}
                    <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>{" "}
                  </g>
                </svg>
              </span>
            </a>
            <div className="absolute z-[100] hidden group-hover:block w-[200px] shadow-md rounded-md bg-white p-2 text-black">
              <ul>
                {dropdownlink.map((drop) => (
                  <li key={drop.id}>
                    <a
                      href={drop.link}
                      className="inline-block w-full p-2 rounded-md hover:bg-primary/30"
                    >
                      {drop.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
};

export default Navbar;
