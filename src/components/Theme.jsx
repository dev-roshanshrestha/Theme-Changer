import React, { useContext } from "react";
import light from "../assets/light.png";
import dark from "../assets/dark.png";
import { ManagerContextProvider } from "../context/Manager";
function Theme() {
  const { isDark, setMode } = useContext(ManagerContextProvider);

  return (
    <div className={`theme-container ${isDark ? "bg-dark" : null}`}>
      <div className={`theme-button ${isDark ? "shadow" : null}`}>
        <span
          className="light"
          onClick={() => {
            setMode(false);
          }}
        >
          <img src={light} alt="" />
        </span>
        <span className={isDark ? "swiper-right" : "swiper"}></span>
        <span
          className="dark"
          onClick={() => {
            setMode(true);
          }}
        >
          <img src={dark} alt="" />
        </span>
      </div>
    </div>
  );
}

export default Theme;
