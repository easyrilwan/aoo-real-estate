import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex justify-center sm:w-full md:w-[90%]">
      <div className="w-full divide-y-2 divide-aaooGray p-6 lg:p-9">
        <div className="flex w-full flex-wrap justify-between gap-[30px]">
          <div className="lg:w-[25%]">
            <h3 className="mb-2 text-[1.2rem] font-semibold text-aaooGray">
              SERVICES
            </h3>

            <div className="flex flex-col gap-[8px] text-white">
              <ul>
                <Link to="./services" className="cursor-pointer space-y-3">
                  <li>Property Management</li>
                  <li>Property Valuation</li>
                  <li>Real Estate Consultancy</li>
                  <li>Real Estate Agency</li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="lg:w-[25%]">
            <h3 className="mb-2 text-[1.2rem] font-semibold text-aaooGray">
              AAO HOUSING
            </h3>

            <div className="flex flex-col gap-[8px] text-white">
              <ul className="flex flex-col gap-3">
                <Link to="./about" className="cursor-pointer">
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

          <div className="lg:w-[25%]">
            <h3 className="mb-2 text-[1.2rem] font-semibold text-aaooGray">
              CONTACT US
            </h3>

            <div className="flex flex-col gap-[8px] text-white">
              <ul>
                <div className="cursor-pointer space-y-3">
                  <li>+2347067509767, +2348114987120</li>
                  <li>Aao.realto@gmail.com</li>
                  <li>
                    Block 15, LKJ Gardens Estate, Nysc Bustop, Igando, Lagos
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <div className="self-center lg:w-[20%]">
            <div className="relative w-full overflow-hidden rounded-2xl border border-aaooGray">
              <input
                type="email"
                placeholder="Enter your mail"
                className="w-full rounded-md bg-transparent px-4 py-8 pr-[115px] text-aaooWhite caret-aaooWhite outline-none"
              />

              <span className="group absolute right-0 top-0 mr-4 mt-2 flex h-[80%] cursor-pointer items-center self-center rounded-3xl bg-aaooWhite px-5 text-aaooBlack hover:bg-none">
                Contact Us
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex w-full flex-col justify-between gap-[15px] pt-6 sm:flex-row sm:items-center">
          <div className="inline-flex items-center gap-4">
            <img
              src="/logo.svg"
              alt="AAOO Real Estate Logo"
              className="aspect-auto h-[46px] rounded-xl bg-aaooWhite"
            />
            <p className="font-semibold text-aaooWhite">
              A. OLUWAFEMI OKEBUKUNOLA & CO
            </p>
          </div>

          <a className="cursor-pointer text-[0.8rem] text-gray-400">
            Security and privacy
          </a>
          <a className="cursor-pointer text-[0.8rem] text-gray-400">
            Newsletter
          </a>
        </div>
      </div>
    </div>
  );
}
