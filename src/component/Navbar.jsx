import { Link, NavLink } from "react-router-dom";
import iconMenu from "../assets/icons/icon-hamburger.svg";
import iconClose from "../assets/icons/icon-close.svg";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div>
          <Link to="/" onClick={handleMenu}>
            <img
              src="./src/assets/images/pokemon.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div
          className={`${
            !menu && "hidden  "
          } absolute bg-gray-200  flex flex-col items-center justify-center  top-0 right-0 w-[80%] h-screen rounded-md p-6  z-[50] md:static md:flex md:bg-transparent md:m-0 md:p-0 md:h-0 md:items-end`}
        >
          <div className="flex flex-col items-center gap-6 text-lg md:text-gray-50  font-bold md:flex-row ">
            <NavLink
              to="/"
              onClick={handleMenu}
              style={({ isActive }) => ({
                fontSize: isActive ? "1.5rem" : "",
              })}
            >
              Home
            </NavLink>
            <NavLink to="/contact" onClick={handleMenu} style={({ isActive }) => ({
                fontSize: isActive ? "1.5rem" : "",
              })}>
              Contact
            </NavLink>
          </div>
        </div>
        <div className=" md:hidden">
          <button onClick={handleMenu}>
            {!menu ? (
              <img src={iconMenu} alt="open menu" />
            ) : (
              <img
                src={iconClose}
                alt="close menu "
                className="relative z-[100]"
              />
            )}
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
