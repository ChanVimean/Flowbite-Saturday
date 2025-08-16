import React, { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.documentElement.classList.remove("light", "dark-theme")
    if (theme === "dark") {
      document.documentElement.classList.add("dark-theme")
    } else {
      document.documentElement.classList.add("light")
    }

  }, [theme])

  return (
    <ProductContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
