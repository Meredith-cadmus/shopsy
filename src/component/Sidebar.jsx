import React from "react";
import { items } from "../data";
import shop from "../assets/logo.png";
import OredrSection from "./OredrSection";

const Sidebar = ({ sideOpen, setSideOpen, handleOrder }) => {
  return (
    <div
      className={`fixed flex flex-col top-0 w-[200px] h-screen bg-[#F8D6A4]  transform transition-transform duration-300 ${
        sideOpen ? "-translate-x-56" : "translate-x-0"
      }`}
    >
      <div className="flex justify-between items-center p-3">
        <img src={shop} className="w-12" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          onClick={() => setSideOpen(!sideOpen)}
          className="size-6 cursor-pointer dark:stroke-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <ul className="space-y-7 place-items-center pt-10 ">
        {items.map((item) => (
          <li
            key={item.id}
            className="hover:text-primary cursor-pointer dark:text-black dark:hover:text-primary"
          >
            {item.name}
          </li>
        ))}
        <div>
          <button
            onClick={() => handleOrder()}
            className="group flex  bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full items-center gap-3"
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
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
