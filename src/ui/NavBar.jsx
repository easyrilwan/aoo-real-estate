import { NavLink } from "react-router-dom";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

import Logo from "/logo.svg";

export default function Navbar() {
  return (
    <nav className="bg-aaoBgGray flex w-full items-center justify-between px-2 text-lg font-semibold md:w-[90%] md:px-0">
      <div className="flex w-full items-center justify-between">
        <NavLink to="home">
          <img src={Logo} alt="AAOO Logo" />
        </NavLink>

        <ul className="hidden space-x-5 border-4 border-transparent text-aaooGray md:flex">
          {[
            { to: "Home", label: "Home" },
            { to: "about", label: "About Us" },
            { to: "services", label: "Services" },
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `rounded-xl border-4 px-3 py-2 transition-all duration-500 ${
                    isActive
                      ? "border-aaooBlack text-aaooBlack"
                      : "border-transparent hover:text-aaooBlack"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="contact"
          className="hover hidden rounded-xl border-4 border-aaooBlack bg-aaooBlack px-3 py-2 text-white duration-500 hover:bg-transparent hover:text-aaooBlack sm:hidden md:block"
        >
          Contact Us
        </NavLink>

        <button className="sm:block md:hidden">
          <HiMiniBars3BottomLeft size={30} />
        </button>
      </div>
    </nav>
  );
}
