import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";



const ThemeProvider = ({ children }) => {
  // 1. Initialize state based on LocalStorage OR System Preference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("site-theme");
    
    // If user has a saved preference, use it
    if (savedTheme) {
      return savedTheme;
    }

    // Otherwise, check if their OS is in Dark Mode
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    // Default to light
    return "light";
  });

  // 2. Effect: Update HTML attribute & LocalStorage whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove the old class/attribute to avoid conflicts
    root.setAttribute("data-theme", theme);
    
    // Optional: Add class for Tailwind 'class' strategy if needed
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Save to local storage
    localStorage.setItem("site-theme", theme);
  }, [theme]);

  // 3. Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
