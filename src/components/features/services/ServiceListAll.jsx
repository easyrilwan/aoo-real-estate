import ImageOne from "../../../assets/images/services/service-1.jpg";
import ImageTwo from "../../../assets/images/services/service-2.jpeg";
import ImageThree from "../../../assets/images/services/service-3.jpeg";
import ImageFour from "../../../assets/images/services/service-4.jpeg";

import { IoCheckmarkCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ServiceListAll() {
  return (
    <div className="mb-10 space-y-20">
      {/* 1 */}
      <div className="grid h-full w-full grid-cols-1 place-items-center gap-x-4 gap-y-8 md:grid-cols-2">
        {/* Text Section */}
        <div className="flex h-full w-full flex-col justify-center space-y-6">
          <h1 className="border-b-2 text-[4rem] font-bold text-[#D9D9D9] md:text-9xl">
            01.
          </h1>
          <div className="space-y-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold md:text-5xl">
                Property Management
              </h2>
              <p className="text-xs font-medium text-aaooGray md:text-2xl">
                We offer comprehensive property management services that ensure
                your property is well-maintained, maximized for profitability,
                and compliant with all legal and regulatory standards. Our
                property management services include:
              </p>
            </div>
            <div className="space-y-6 text-sm md:text-2xl">
              <div className="flex items-center gap-2">
                <IoCheckmarkCircle />
                <p>Lease administration and tenant relations</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmarkCircle />
                <p>Property maintenance and inspections</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmarkCircle />
                <p>Rent collection and financial reporting</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmarkCircle />
                <p>Marketing and tenant acquisition</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmarkCircle />
                <p>Legal compliance and advisory services</p>
              </div>
            </div>
            <div>
              <Link
                to="/contact"
                className="hover rounded-xl border-4 border-aaooBlack bg-aaooBlack px-3 py-2 text-white duration-500 hover:bg-transparent hover:text-aaooBlack"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-first h-full w-full items-center justify-center overflow-hidden rounded-3xl md:order-last md:flex">
          <img
            src={ImageOne}
            alt="Image One List"
            className="size-full object-cover md:h-full"
          />
        </div>
      </div>

      {/* 2 */}
      <div className="grid h-full w-full grid-cols-1 place-items-center gap-x-4 md:grid-cols-2">
        {/* Text Section */}
        <div className="flex h-full w-full flex-col justify-center space-y-6">
          <h1 className="border-b-2 text-[4rem] font-bold text-[#D9D9D9] md:text-9xl">
            02.
          </h1>
          <div className="space-y-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold md:text-5xl">
                Property Valuation
              </h2>
              <p className="text-xs font-medium text-aaooGray md:text-2xl">
                As certified professionals, we provide accurate and reliable
                property valuation services to help clients determine the true
                worth of their assets. Our valuation services cover:
              </p>
            </div>
            <div className="space-y-6 text-sm md:text-2xl">
              <div className="flex items-center gap-2">
                <IoCheckmarkCircle />
                <p>Residential and commercial properties</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmarkCircle />
                <p>Agricultural and industrial lands</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmarkCircle />
                <p>Machinery, plants, and equipment</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmarkCircle />
                <p>
                  Investment and financial valuation for banks, corporate and
                  individual organizations.
                </p>
              </div>
            </div>
            <div>
              <Link
                to="/contact"
                className="hover rounded-xl border-4 border-aaooBlack bg-aaooBlack px-3 py-2 text-white duration-500 hover:bg-transparent hover:text-aaooBlack"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-first h-full w-full items-center justify-center overflow-hidden rounded-3xl md:flex">
          <img
            src={ImageTwo}
            alt="Image One List"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* 3 */}
      <div className="grid h-full w-full grid-cols-1 place-items-center gap-x-4 gap-y-8 md:grid-cols-2">
        {/* Text Section */}
        <div className="order-last flex h-full w-full flex-col justify-center space-y-6 md:order-first">
          <h1 className="border-b-2 text-[4rem] font-bold text-[#D9D9D9] md:text-9xl">
            03.
          </h1>
          <div className="space-y-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold md:text-5xl">
                Real Estate Consultancy
              </h2>
              <p className="text-xs font-medium text-aaooGray md:text-2xl">
                Our consultancy services are designed to provide expert advice
                to help you navigate the complexities of the real estate market.
                We specialize in:
              </p>
            </div>
            <div className="space-y-6 text-sm md:text-2xl">
              <div className="flex items-center gap-2">
                <IoCheckmarkCircle />
                <p>Market research and feasibility studies</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmarkCircle />
                <p>Investment analysis and strategic planning</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmarkCircle />
                <p>Urban development and regeneration consultancy</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmarkCircle />
                <p>Property development and project management</p>
              </div>
            </div>
            <div>
              <Link
                to="/contact"
                className="hover rounded-xl border-4 border-aaooBlack bg-aaooBlack px-3 py-2 text-white duration-500 hover:bg-transparent hover:text-aaooBlack"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="h-full w-full items-center justify-center overflow-hidden rounded-3xl md:flex">
          <img
            src={ImageThree}
            alt="Image One List"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* 4 */}
      <div className="grid h-full w-full grid-cols-1 place-items-center gap-x-4 md:grid-cols-2">
        {/* Text Section */}
        <div className="flex h-full w-full flex-col justify-center space-y-6">
          <h1 className="border-b-2 text-[4rem] font-bold text-[#D9D9D9] md:text-9xl">
            04.
          </h1>
          <div className="space-y-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold md:text-5xl">
                Real Estate Agency
              </h2>
              <p className="text-xs font-medium text-aaooGray md:text-2xl">
                We serve as a trusted intermediary in the buying, selling, and
                leasing of properties. Our real estate agency services include:
              </p>
            </div>
            <div className="space-y-6 text-sm md:text-2xl">
              <div className="flex items-center gap-2">
                <IoCheckmarkCircle />
                <p>Property sales and acquisitions</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmarkCircle />
                <p>Residential, commercial, and industrial leasing</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmarkCircle />
                <p>Marketing and negotiations on behalf of clients</p>
              </div>
              <div className="flex items-center gap-2">
                <IoCheckmarkCircle />
                <p>Buyer and seller representation</p>
              </div>
            </div>
            <div>
              <Link
                to="/contact"
                className="hover rounded-xl border-4 border-aaooBlack bg-aaooBlack px-3 py-2 text-white duration-500 hover:bg-transparent hover:text-aaooBlack"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-first h-full w-full items-center justify-center overflow-hidden rounded-3xl md:flex">
          <img
            src={ImageFour}
            alt="Image Four List"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
