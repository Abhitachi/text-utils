import React from "react";
import { useTheme } from "../ThemeContext";
import "./Header.css";
const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="header">
      <div className="logo">
        <span>TextUtils</span>
      </div>
      <div className="nav">
        <span>Home</span>
        <span>About Us</span>
        <span>Contact</span>
      </div>
      <div className="theme">
        <span>
          <input
            type="checkbox"
            onChange={() => toggleTheme()}
            checked={theme === "dark"}
          />
        </span>
        <span>Enable Dark Mode</span>
      </div>
    </div>
  );
};

export default Header;
