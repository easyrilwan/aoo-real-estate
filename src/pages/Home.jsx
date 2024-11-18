import { CiHome } from "react-icons/ci";
import { HiArrowRight } from "react-icons/hi2";

import CardList from "../components/features/home/CardList";
import ServiceCard from "../components/features/home/ServiceCard";
import Faq from "../components/features/home/Faq";

import Home_1 from "../assets/images/home/home-1.jpeg";
import Image_1 from "../assets/images/home/image-1.jpeg";
import Testimonial from "../components/features/home/Testimonial";
import ImageGrid from "../components/features/home/ImageGrid";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-3 gap-y-10 px-3 py-4 capitalize md:grid-cols-2 md:px-0 md:pb-36 md:pt-16">
        <div className="space-y-6 self-center text-aaooBlack">
          <h1 className="text-[2rem] font-semibold md:text-6xl">
            making your <span className="text-aaooRed">home</span> ownership
            dreams come true
          </h1>

          <p className="text-xs md:pr-40 md:text-xl">
            discover the perfect property in your ideal neighborhood. explore a
            wide range of properties tailored to your lifestyle
          </p>

          <Link
            to="/services"
            className="inline-flex items-center gap-4 rounded-xl bg-aaooBlack p-4 text-xl text-aaooWhite"
          >
            Get Started <HiArrowRight />
          </Link>
        </div>

        <div className="h-full w-full">
          <ImageGrid />
        </div>
      </div>

      <div className="grid place-items-center gap-8 px-3 py-4 capitalize md:px-0 md:pb-36 md:pt-16">
        <h2 className="w-full text-center text-2xl font-semibold md:w-[70%] md:text-5xl">
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

      <div className="bg-lime-100 px-3 pb-36 pt-4 md:px-0">
        <div className="space-y-2">
          <h1 className="text-[13px] font-semibold uppercase md:text-6xl">
            featured properties
          </h1>
          <p className="text-[8px] text-aaooGray md:text-xl">
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

      <div className="w-full font-Monoton text-5xl font-normal uppercase md:text-[6.25rem]">
        <marquee behavior="scroll" direction="left" scrollamount="30">
          real estate - housing - survey - property valuation
        </marquee>
      </div>

      <div className="px-3 md:space-y-6 md:px-0">
        <div>
          <h1 className="text-base font-semibold uppercase md:text-5xl">
            services
          </h1>
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

          <div className="mt-10 h-full space-y-4">
            <h1 className="font-Montserrat text-2xl font-semibold capitalize md:text-5xl">
              what everyone says
            </h1>
            <div className="grid h-full w-full grid-cols-1 items-center gap-x-4 md:grid-cols-2 lg:grid-cols-3">
              <Testimonial
                description={`“Working with AAO made buying my first home such an easy and stress-free experience! They walked me through every step, explaining all the details and options, so I felt informed and comfortable with each decision.”`}
                name={"Philip Donin"}
              />

              <Testimonial
                description={`“Our family needed to relocate quickly for work, and AAO truly went above and beyond to help us find a home that met our needs in a very tight time frame. The team was incredibly responsive, and understanding.”`}
                name={"Aspen Levin"}
                avatar="https://img.freepik.com/free-photo/young-bearded-lady-with-striped-shirt_273609-5077.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
              />

              <Testimonial
                description={`“As an investor, I’m always looking for agents who understand the market and can find properties that meet my criteria.  AAO exceeded my expectations with their deep market insights and knowledge of the area.”`}
                name={"Maria Geidt"}
                avatar="https://img.freepik.com/free-photo/young-bearded-lady-with-striped-shirt_273609-5018.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
              />

              <Testimonial
                description={`"l was nervous about selling my home, but AAO made the entire process seamless. They offered expert advice on staging and pricing, and within two weeks, I had multiple offers above the asking price."`}
                name={"Richard Williams"}
                avatar="https://img.freepik.com/free-photo/young-bearded-lady-with-striped-shirt_273609-5679.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
              />

              <Testimonial
                description={`“Working with AAO made buying my first home such an easy and stress-free experience! They walked me through every step, explaining all the details and options, so I felt informed and comfortable with each decision.”`}
                name={"Jhone"}
                avatar="https://img.freepik.com/free-photo/young-bearded-lady-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
              />

              <Testimonial
                description={`“Working with AAO made buying my first home such an easy and stress-free experience! They walked me through every step, explaining all the details and options, so I felt informed and comfortable with each decision.”`}
                name={"Jhone"}
                avatar="https://img.freepik.com/free-photo/young-bearded-lady-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
              />
            </div>
          </div>

          <div
            aria-label="Frequently Asked Question"
            className="space-y-6 pb-36 pt-16"
          >
            <div className="space-y-4 text-center">
              <h1 className="text-lg font-semibold uppercase md:text-5xl">
                FREQUENTLY ASKED QUESTIONS
              </h1>
              <p className="text-base capitalize text-aaooGray md:text-2xl">
                how may i help you?
              </p>
            </div>
            <Faq />
          </div>
        </div>
      </div>

      <div className="">
        <div className="relative mb-24 h-full w-full overflow-hidden rounded-3xl">
          <img src={Image_1} alt="" className="block h-full w-full" />
          <p className="absolute bottom-2 right-1/2 z-[1] w-full translate-x-1/2 text-center font-Monoton text-5xl text-[400%] text-aaooBlack">
            applynow
          </p>

          <Link
            to="/services"
            className="absolute left-4 top-4 rounded-xl border-4 border-aaooBlack bg-aaooBlack px-3 py-2 text-white duration-500 hover:bg-transparent hover:text-aaooBlack"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
