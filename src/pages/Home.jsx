import { CiHome } from "react-icons/ci";
import { HiArrowRight } from "react-icons/hi2";

import CardList from "../components/features/home/CardList";
import ServiceCard from "../components/features/home/ServiceCard";
import Faq from "../components/features/home/Faq";

import Home_1 from "../assets/images/home-1.jpeg";
import Image_1 from "../assets/images/image-1.jpeg";
import Testimonial from "../components/features/home/Testimonial";
import ImageGrid from "../components/features/home/ImageGrid";

export default function Home() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-y-10 pb-36 pt-16 capitalize md:grid-cols-2">
        <div className="space-y-6 self-center text-aaooBlack">
          <h1 className="text-6xl font-semibold">
            making your <span className="text-aaooRed">home</span> ownership
            dreams come true
          </h1>

          <p className="pr-40 text-xl">
            discover the perfect property in your ideal neighborhood. explore a
            wide range of properties tailored to your lifestyle
          </p>

          <button className="flex items-center gap-4 rounded-xl bg-aaooBlack p-4 text-xl text-aaooWhite">
            Get Started <HiArrowRight />
          </button>
        </div>

        <div className="h-full w-full">
          <ImageGrid />
        </div>
      </div>

      <div className="grid place-items-center gap-8 pb-36 pt-16 capitalize">
        <h2 className="w-[70%] text-center text-5xl font-semibold">
          your trusted real estate expert&mdash; turning dreams into reality
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={Image_1}
              alt="Image 1"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between gap-4">
            <CardList
              icon={CiHome}
              title="Modern architectural design features"
              description="Incorporate innovative and contemporary home layouts"
            />

            <CardList
              icon={CiHome}
              title="Smart Home Automation System"
              description="Integrated Technology for a connected Lifestyle. Wide range of space for relaxation."
            />

            <CardList
              icon={CiHome}
              title="High-Quality Construction Materials"
              description="Give the best money can afford to give our properties durability"
            />

            <CardList
              icon={CiHome}
              title="Market Knowledge"
              description="Deep understanding of local real estate trends, pricing, and neighborhoods."
            />
          </div>
        </div>
      </div>

      <div className="bg-lime-100 pb-36 pt-16">
        <div className="space-y-2">
          <h1 className="text-6xl font-semibold uppercase">
            featured properties
          </h1>

          <p className="text-xl text-aaooGray">
            A curated collection of the best homes on the market, featuring
            unique designs and prime locations
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="relative">
            <img src={Home_1} alt="" />
            <div className="absolute bottom-0 left-0 h-[30%] w-full bg-slate-500 text-white">
              <h1>N/A</h1>
              <h1>N/A</h1>
            </div>
          </div>
          <div className="relative">
            <img src={Home_1} alt="" />
            <div className="absolute bottom-0 left-0 h-[30%] w-full bg-slate-500 text-white">
              <h1>N/A</h1>
              <h1>N/A</h1>
            </div>
          </div>
          <div className="relative">
            <img src={Home_1} alt="" />
            <div className="absolute bottom-0 left-0 h-[30%] w-full bg-slate-500 text-white">
              <h1>N/A</h1>
              <h1>N/A</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full font-Monoton text-[100px] uppercase">
        <marquee behavior="scroll" direction="left" scrollamount="30">
          real estate - housing - survey - property valuation
        </marquee>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-5xl font-semibold uppercase">services</h1>
        </div>

        <div aria-label="services render">
          <div className="space-y-8 divide-y-2 divide-aaooBlack">
            <ServiceCard
              title="Property Management"
              description="We offer comprehensive property management services that ensure your property is well-maintained, maximized for profitability, and compliant with all legal."
            />

            <ServiceCard
              title="Property Valuation"
              description="As certified professionals, we provide accurate and reliable property valuation services to help clients determine the true worth of their assets."
            />

            <ServiceCard
              title="Real Estate Consultancy"
              description="Our consultancy services are designed to provide expert advice to help you navigate the complexities of the real estate market."
            />

            <ServiceCard
              title="Real Estate Agency"
              description="We serve as a trusted intermediary in the buying, selling, and leasing of properties."
            />
          </div>

          <div className="mt-10 space-y-4">
            <h1 className="font-Montserrat text-5xl font-semibold capitalize">
              what everyone says
            </h1>

            <div className="flex w-full justify-between gap-3 overflow-x-auto">
              <Testimonial />
              <Testimonial />
            </div>
          </div>

          <div
            aria-label="Frequently Asked Question"
            className="space-y-6 pb-36 pt-16"
          >
            <div className="space-y-4 text-center">
              <h1 className="text-5xl font-semibold uppercase">
                FREQUENTLY ASKED QUESTIONS
              </h1>
              <p className="text-2xl capitalize text-aaooGray">
                how may i help you?
              </p>
            </div>

            <Faq />
          </div>
        </div>
      </div>

      <div className="relative mb-24 max-h-[670px] w-full overflow-hidden rounded-3xl">
        <img src={Image_1} alt="" className="block h-full w-full" />
        <p className="absolute right-1/2 top-[68%] z-[1] translate-x-1/2 font-Monoton text-[195px] text-aaooBlack">
          applynow
        </p>
      </div>
    </section>
  );
}
