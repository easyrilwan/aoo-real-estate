import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

import Logo from "/logo.svg";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <header className="text-aaooGray bg-aaooBgGray flex items-center justify-center text-lg font-semibold">
      <nav className="flex w-[90%] items-center justify-between">
        <img src={Logo} alt="AAOO Logo" />

        {/* AI SOLUTION SOLVED BY USING USESTATE HOOK */}
        <ul className="xs:hidden msd:text-newGray msd:flex msd:space-x-5 msd:border-4 msd:border-transparent">
          <li>
            <NavLink
              to="home"
              onClick={() => setActiveLink("home")}
              className={`hover:border-aaooBlack hover:text-aaooBlack border-4 border-transparent px-3 py-2 hover:rounded-xl ${
                activeLink === "home"
                  ? "border-aaooBlack text-aaooBlack rounded-xl"
                  : ""
              }`}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="about"
              onClick={() => setActiveLink("about")}
              className={`hover:border-aaooBlack hover:text-aaooBlack border-4 border-transparent px-3 py-2 hover:rounded-xl ${
                activeLink === "about"
                  ? "border-aaooBlack text-aaooBlack rounded-xl"
                  : ""
              }`}
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="services"
              onClick={() => setActiveLink("services")}
              className={`hover:border-aaooBlack hover:text-aaooBlack border-4 border-transparent px-3 py-2 hover:rounded-xl ${
                activeLink === "services"
                  ? "border-aaooBlack text-aaooBlack rounded-xl"
                  : ""
              }`}
            >
              Services
            </NavLink>
          </li>
        </ul>

        {/* TRYING TO USE ACTIVE THE NAVLINK GENERATE NB: NOT WORKED */}
        {/* <ul className="xs:hidden msd:text-newGray msd:flex msd:space-x-5 msd:border-4 msd:border-transparent group-[.active]:border-aaooBlack group-[.active]:border-4">
          <li>
            <NavLink
              to="home"
              className="hover:border-aaooBlack hover:text-aaooBlack border-4 border-transparent px-3 py-2 hover:rounded-xl hover:border-4 hover:px-3 hover:py-2"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="about"
              className="hover:border-aaooBlack hover:text-aaooBlack border-4 border-transparent px-3 py-2 hover:rounded-xl hover:border-4 hover:px-3 hover:py-2"
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="services"
              className="hover:border-aaooBlack hover:text-aaooBlack border-4 border-transparent px-3 py-2 hover:rounded-xl hover:border-4 hover:px-3 hover:py-2"
            >
              Services
            </NavLink>
          </li>
        </ul> */}

        {/* AI SOLUTION TO IT. NB: ALWAYS SELECT THE ACTIVE IN THE NAVLINK BASED ON CURRENT URL */}
        {/* <ul className="xs:hidden msd:text-newGray msd:flex msd:space-x-5 msd:border-4 msd:border-transparent">
          <li>
            <NavLink
              to="home"
              className={({ isActive }) =>
                `hover:border-aaooBlack hover:text-aaooBlack border-4 border-transparent px-3 py-2 hover:rounded-xl ${isActive ? "border-aaooBlack text-aaooBlack rounded-xl" : ""}`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                `hover:border-aaooBlack hover:text-aaooBlack border-4 border-transparent px-3 py-2 hover:rounded-xl ${isActive ? "border-aaooBlack text-aaooBlack rounded-xl" : ""}`
              }
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="services"
              className={({ isActive }) =>
                `hover:border-aaooBlack hover:text-aaooBlack border-4 border-transparent px-3 py-2 hover:rounded-xl ${isActive ? "border-aaooBlack text-aaooBlack rounded-xl" : ""}`
              }
            >
              Services
            </NavLink>
          </li>
        </ul> */}

        <NavLink
          to="contact"
          className="xs:hidden msd:block bg-aaooBlack rounded-xl px-3 py-2 text-white"
        >
          Contact Us
        </NavLink>

        <button className="msd:hidden">
          <HiMiniBars3BottomLeft className="fill-aaooBlack h-[24px] w-[24px]" />
        </button>
      </nav>
    </header>
  );
}
