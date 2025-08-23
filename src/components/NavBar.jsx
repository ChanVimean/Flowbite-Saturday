import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { IoMdMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ProductContext);

  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Flowbite
          </span>
        </a>

        <ul className="flex space-x-8">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/ict">Ict</Link>
          <li>
            <button onClick={toggleTheme}>
              {theme === "light" ? <IoMdMoon /> : <IoSunnyOutline />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
