import React, { createContext, useContext, useEffect, useState } from "react";

// creating context
const ThemeContext = createContext();

// custom hook to use theme
export const useTheme = () => {
  // to read  from context
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log(isDarkMode);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };
  const theme = isDarkMode ? "dark" : "light";
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
