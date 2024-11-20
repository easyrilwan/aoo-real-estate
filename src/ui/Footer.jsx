import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

export default function Footer() {
  return (
    <div className="w-full space-y-8 divide-y-2 divide-aaooGray">
      <div className="flex w-full items-center justify-center">
        <div className="grid w-[90%] grid-cols-1 gap-6 gap-y-14 md:grid-cols-3 lg:grid-cols-[auto_auto_auto_360px]">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-aaooGray">SERVICES</h3>
            <div>
              <ul className="flex flex-col space-y-3 font-medium text-white">
                <Link to="./services" className="cursor-pointer space-y-3">
                  <li>Property Management</li>
                </Link>
                <Link to="./services" className="cursor-pointer space-y-3">
                  <li>Property Valuation</li>
                </Link>
                <Link to="./services" className="cursor-pointer space-y-3">
                  <li>Real Estate Consultancy</li>
                </Link>
                <Link to="./services" className="cursor-pointer space-y-3">
                  <li>Real Estate Agency</li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-aaooGray">AAO HOUSING</h3>
            <div className="flex flex-col space-y-3 text-white">
              <ul className="flex flex-col gap-3 font-medium">
                <Link to="./about">
                  <li>About Us</li>
                </Link>
                <Link to="./services">
                  <li>Services</li>
                </Link>
                <Link to="./contact">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-aaooGray">CONTACT US</h3>
            <div className="font-medium text-aaooWhite">
              <ul className="space-y-3">
                <li>+2347067509767, +2348114987120</li>
                <li>Aao.realto@gmail.com</li>
                <li>
                  Block 15, LKJ Gardens Estate, Nysc Bus Stop, Igando, Lagos
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full self-center md:col-span-3 lg:col-span-1">
            <Link
              to="/contact"
              className="relative block w-full overflow-hidden rounded-2xl border border-aaooGray"
            >
              <input
                type="email"
                placeholder="Enter your mail"
                className="w-full bg-transparent px-2 py-6 text-xs text-aaooWhite caret-aaooWhite outline-none sm:text-base"
              />
              <span className="absolute right-3 top-3 flex items-center gap-1 rounded-2xl bg-aaooWhite px-3 py-3 text-xs text-aaooBlack hover:bg-none sm:top-2 sm:text-base">
                Contact Us
                <span className="inline-flex text-xs sm:text-[30px]">
                  <GoArrowRight />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center pt-10">
        <div className="hidden w-[90%] items-center justify-between gap-4 sm:flex">
          <div className="flex items-center gap-4">
            <img
              src="/logo.svg"
              alt="AAOO Real Estate Logo"
              className="hidden aspect-auto h-[46px] rounded-xl bg-aaooWhite sm:block"
            />
            <p className="font-semibold text-aaooWhite">
              A. OLUWAFEMI OKEBUKUNOLA & CO
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-[0.8rem] text-white"
            >
              <RiInstagramFill size={20} />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-[0.8rem] text-white"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>

          <div className="flex gap-6 font-light capitalize text-aaooWhite">
            <p className="flex items-center gap-2">
              Copyright{" "}
              <span className="inline-flex text-2xl font-medium">&copy;</span>{" "}
              2024
            </p>
            <p>All right Reserved</p>
          </div>
        </div>

        {/* SHOW ON SMALLEST SCREEN */}
        <div className="flex w-[90%] justify-between text-[10px] font-normal sm:hidden">
          <div className="flex w-full items-center">
            <img
              src="/logo.svg"
              alt="AAOO Real Estate Logo"
              className="hidden aspect-auto h-[46px] rounded-xl bg-aaooWhite sm:block"
            />
            <p className="text-aaooWhite">A. OLUWAFEMI OKEBUKUNOLA & CO</p>
          </div>

          <div className="hidden gap-3">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-[0.8rem] text-white"
            >
              <RiInstagramFill size={20} />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-[0.8rem] text-white"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>

          <div className="flex flex-wrap font-light capitalize text-aaooWhite">
            <p>Copyright&copy;2024</p>
            <p>All right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
