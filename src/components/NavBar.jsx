import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

import Logo from "/logo.svg";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <header className="text-aaooGray bg-aaooBgGray flex items-center justify-center text-lg font-semibold">
      <nav className="flex w-[90%] items-center justify-between">
        <NavLink onClick={() => setActiveLink(null)}>
          <img src={Logo} alt="AAOO Logo" />
        </NavLink>

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

        <NavLink
          to="contact"
          onClick={() => setActiveLink(null)}
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
