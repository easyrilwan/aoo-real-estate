import { CiHome } from "react-icons/ci";
import { HiArrowRight } from "react-icons/hi2";

import CardList from "../components/features/home/CardList";
import ServiceCard from "../components/features/home/ServiceCard";
import Faq from "../components/features/home/Faq";

import Image_1 from "../assets/images/home/image-1.jpeg";
import OfferImage from "../assets/images/home/offer-image.jpg";
import Home_5 from "../assets/images/home/home-5.jpg";
import Testimonial from "../components/features/home/Testimonial";
import ImageGrid from "../components/features/home/ImageGrid";
import { Link } from "react-router-dom";

import FeaturedCard from "../components/features/home/FeaturedCard";
import FeaturedImage1 from "../assets/images/home/image-2.jpeg";
import FeaturedImage2 from "../assets/images/home/image-3.png";

export default function Home() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-3 gap-y-10 px-3 py-4 capitalize md:grid-cols-2 md:px-0 md:py-16">
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
            className="inline-flex items-center gap-4 rounded-xl border-4 border-aaooBlack bg-aaooBlack p-4 text-sm text-aaooWhite transition-all hover:border-4 hover:border-aaooBlack hover:bg-transparent hover:text-aaooBlack md:text-xl"
          >
            Get Started <HiArrowRight />
          </Link>
        </div>

        <div className="h-full w-full">
          <ImageGrid />
        </div>
      </div>

      <div className="grid place-items-center gap-8 px-3 py-4 capitalize md:px-0 md:py-16">
        <h2 className="w-full text-center text-2xl font-semibold md:w-[70%] md:text-5xl">
          your trusted real estate expert&mdash; turning dreams into reality
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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

          <div className="order-first overflow-hidden rounded-3xl shadow-md md:order-last">
            <img
              src={Image_1}
              alt="Image 1"
              className="h-full w-full border object-cover shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="grid place-items-center gap-8 px-3 py-4 capitalize md:px-0 md:py-6">
        <div className="grid grid-cols-2 items-center gap-x-2 sm:gap-x-6">
          <div className="h-full w-full overflow-hidden rounded-3xl shadow-md">
            <img
              src={Home_5}
              alt="Image 1"
              className="h-full w-full border object-cover shadow-md"
            />
          </div>

          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-4">
              <h1 className="space-x-2 text-[9px] font-semibold sm:text-[32px]">
                At A. OLUWAFEMI OKEBUKUNOLA & CO
                <span className="pl-1 font-normal lowercase">
                  we pride ourselves on delivering exceptional estate surveying
                  and valuation services tailored to our clients unique needs.
                </span>
              </h1>

              <Link
                to=""
                className="inline-flex items-center gap-4 rounded-md border-2 border-aaooBlack bg-aaooBlack p-[3px] text-[8px] text-aaooWhite transition-all hover:border-2 hover:border-aaooBlack hover:bg-transparent hover:text-aaooBlack sm:rounded-xl sm:border-4 sm:p-2 sm:text-xl sm:hover:border-4"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-label="Featured Properties"
        className="space-y-4 px-3 py-6 capitalize sm:py-14 md:px-0"
      >
        <div className="flex w-full flex-col items-center space-y-2 text-center md:space-y-5">
          <h1 className="text-2xl font-semibold md:text-5xl">
            featured properties
          </h1>

          <p className="w-full text-xs text-aaooGray md:w-[62%] md:text-2xl">
            A curated collection of the best homes on the market, featuring
            unique designs and prime locations
          </p>
        </div>

        <div
          aria-label="Featured Card"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <FeaturedCard
            image={FeaturedImage1}
            hectares=": 5Hectares"
            location=":Along Mopol/ShopRite road, Sangotedo, Lagos"
            description={
              <p className="text-base text-[#F12B2B]">
                1 BILLION
                <sub className="text-[9px] lowercase text-white">/per hct</sub>
              </p>
            }
          />

          <FeaturedCard image={FeaturedImage2} />
          <FeaturedCard image={FeaturedImage2} />
          <FeaturedCard image={FeaturedImage2} />
          <FeaturedCard image={FeaturedImage2} />
          <FeaturedCard image={FeaturedImage2} />
        </div>
      </div>

      <div className="w-full py-6 font-Monoton text-5xl font-normal uppercase md:text-[6.25rem]">
        <marquee behavior="scroll" direction="left" scrollamount="30">
          real estate - housing - survey - property valuation
        </marquee>
      </div>

      <div className="w-full px-3 md:space-y-6 md:px-0">
        <div className="flex flex-col items-center gap-2 text-center capitalize">
          <h1 className="text-[22px] font-semibold md:text-5xl">
            our services
          </h1>
          <p className="text-xs text-aaooGray sm:w-[75%] sm:text-2xl">
            We offer various services as AOO ranging from Property management,
            Property valuation, Real estate consultancy and Real estate agency.
          </p>
        </div>

        <div aria-label="services render">
          <div className="space-y-2 divide-y-2 divide-aaooBlack md:space-y-12">
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

          <div className="my-16 h-full w-full space-y-4">
            <div className="space-y-6">
              <h1 className="text-base text-aaooGray sm:text-2xl">
                Testimonial
              </h1>

              <div className="flex flex-col sm:items-center md:justify-between">
                <h2 className="text-left font-Montserrat text-[22px] font-semibold capitalize sm:text-2xl md:text-5xl">
                  what our clients say
                </h2>

                <p className="text-xs capitalize text-aaooGray sm:text-center sm:text-2xl md:w-[100%]">
                  We take pride in delivering accurate insights and exceptional
                  customer experiences for every project.
                </p>
              </div>
            </div>

            <div className="grid h-full w-full grid-cols-1 items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                description={`“l was nervous about selling my home, but AAO made the entire process seamless. They offered expert advice on staging and pricing, and within two weeks, I had multiple offers above the asking price.”`}
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
            className="my-16 space-y-6"
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

      <div className="my-6 -mt-10 h-full w-full overflow-hidden rounded-3xl p-2 px-3 md:my-16 md:px-0">
        <div className="relative w-full overflow-hidden sm:h-[650px]">
          <img
            src={OfferImage}
            alt="Apply now Image with Get Started Button"
            className="w-full rounded-3xl border object-cover shadow-md sm:h-full"
          />

          <div className="absolute right-0 top-4 flex w-full flex-col items-center gap-2 text-center text-aaooWhite sm:gap-10 md:top-20 lg:top-28">
            <div className="flex items-center gap-4">
              <img
                src="/logo.svg"
                alt="AAOO Real Estate Logo"
                className="aspect-auto h-[20px] rounded bg-aaooWhite sm:block sm:h-[46px] sm:rounded-xl"
              />
              <p className="text-[10px] font-semibold text-aaooWhite sm:text-xl">
                A. OLUWAFEMI OKEBUKUNOLA & CO
              </p>
            </div>

            <h1 className="w-[85%] text-lg font-bold capitalize leading-[1.2] sm:w-[80%] sm:text-[4rem]">
              We Offer the best services to our clients and Get started with us.
            </h1>

            <Link
              to="/contact"
              className="block w-fit rounded bg-aaooBlack p-2 text-[10px] sm:rounded-2xl sm:px-6 sm:py-4 sm:text-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
