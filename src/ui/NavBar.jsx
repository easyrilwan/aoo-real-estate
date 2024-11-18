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
          {/* <HiMiniBars3BottomLeft size={30} /> */}

          <input type="checkbox" id="drawer-right" className="drawer-toggle" />

          <label htmlFor="drawer-right" className="cursor-pointer">
            <HiMiniBars3BottomLeft size={30} />
          </label>
          <label className="overlay" htmlFor="drawer-right"></label>
          <div className="drawer drawer-right">
            <div className="drawer-content flex w-full flex-col py-10">
              <label
                htmlFor="drawer-right"
                className="btn btn-sm btn-circle btn-ghost absolute right-6 top-2 text-2xl"
              >
                ✕
              </label>
              {/* <h2 className="text-xl font-medium">Create your account</h2> */}
              <ul className="flex w-full flex-col gap-20 text-aaooGray md:flex">
                {[
                  { to: "Home", label: "Home" },
                  { to: "about", label: "About Us" },
                  { to: "services", label: "Services" },
                  { to: "contact", label: "Contact Us" },
                ].map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `block h-full w-full py-6 transition-all duration-500 ${
                          isActive
                            ? "text-aaooBlack hover:bg-gray-200"
                            : "hover:text-aaooBlack"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
}
