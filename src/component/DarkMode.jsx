import React from "react";
import LightButton from "../assets/light-mode-button.png";
import DarkButton from "../assets/dark-mode-button.png";
import { useState } from "react";
import { useEffect } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        src={LightButton}
        className={`w-14 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        src={DarkButton}
        className="w-14 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
