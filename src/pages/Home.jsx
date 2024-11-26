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

import avatar1 from "../assets/images/avatars/avatar1.jpg";
import avatar2 from "../assets/images/avatars/avatar2.jpg";
import avatar3 from "../assets/images/avatars/avatar3.jpg";
import avatar4 from "../assets/images/avatars/avatar4.jpg";
import avatar5 from "../assets/images/avatars/avatar5.jpg";
import avatar6 from "../assets/images/avatars/avatar6.jpg";

export default function Home() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-3 gap-y-10 px-3 py-4 capitalize md:px-0 md:py-16 lg:grid-cols-2">
        <div className="space-y-6 self-center text-aaooBlack">
          <h1 className="text-[2rem] font-semibold leading-10 md:text-6xl">
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
        <div className="grid grid-cols-1 items-center gap-x-4 gap-y-6 md:grid-cols-2">
          <div className="h-full w-full overflow-hidden rounded-3xl shadow-md">
            <img
              src={Home_5}
              alt="Image 1"
              className="h-full w-full border object-cover shadow-md"
            />
          </div>

          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-4">
              <h1 className="space-x-2 text-lg font-semibold md:text-[32px] md:leading-10">
                <span className="text-aaooGray">At</span> A. OLUWAFEMI
                OKEBUKUNOLA & CO
                <span className="font-normal lowercase text-aaooGray md:pl-1">
                  we pride ourselves on delivering exceptional estate surveying
                  and valuation services tailored to our clients unique needs.
                </span>
              </h1>

              <Link
                to=""
                className="inline-flex items-center gap-4 rounded-2xl border-4 border-aaooBlack bg-aaooBlack px-6 py-2 text-sm text-aaooWhite transition-all hover:border-4 hover:border-aaooBlack hover:bg-transparent hover:text-aaooBlack md:p-2 md:text-lg"
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
        <div className="flex w-full flex-col items-center text-center sm:space-y-4">
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

      <div className="w-full space-y-4 px-3 md:space-y-6 md:px-0">
        <div className="flex flex-col items-center text-center capitalize sm:gap-2">
          <h1 className="text-[22px] font-semibold md:text-5xl">
            our services
          </h1>
          <p className="text-xs text-aaooGray sm:w-[75%] md:text-2xl">
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

          <div className="my-8 h-full w-full space-y-4">
            <div className="size-full space-y-2">
              <h1 className="text-base text-aaooGray sm:text-2xl">
                Testimonial
              </h1>

              <div className="grid w-full grid-cols-1 justify-between sm:grid-cols-[1fr_2fr]">
                <h2 className="font-Montserrat text-[22px] font-semibold capitalize sm:text-2xl md:text-5xl">
                  what our clients say
                </h2>

                <div className="flex w-full justify-end lg:justify-end">
                  <p className="w-full text-xs capitalize text-aaooGray sm:text-center md:w-[80%] md:text-2xl">
                    We take pride in delivering accurate insights and
                    exceptional customer experiences for every project.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid h-full w-full grid-cols-1 items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Testimonial
                description={`“Working with AAO made buying my first home such an easy and stress-free experience! They walked me through every step, explaining all the details and options, so I felt informed and comfortable with each decision.”`}
                name="Philip Donin"
                avatar={avatar1}
              />

              <Testimonial
                description="“Our family needed to relocate quickly for work, and AAO truly went above and beyond to help us find a home that met our needs in a very tight time frame. The team was incredibly responsive, and understanding.”"
                name="Aspen Levin"
                avatar={avatar2}
              />

              <Testimonial
                description={`“As an investor, I’m always looking for agents who understand the market and can find properties that meet my criteria.  AAO exceeded my expectations with their deep market insights and knowledge of the area.”`}
                name="Maria Geidt"
                avatar={avatar3}
              />

              <Testimonial
                description="“Working with AOO was an absolute pleasure. Their deep understanding of property valuation and boundary disputes gave me the confidence I needed during a stressful time.”"
                name="James Williams"
                avatar={avatar4}
              />

              <Testimonial
                description="“We engaged AOO to assist with a commercial property development project, and their expertise was instrumental to its success. Their precise surveying, thorough reports, and clear communication helped us.”"
                name="Sarah Johnson"
                avatar={avatar5}
              />

              <Testimonial
                description="“I can't thank AOO enough for their work during my property purchase. Their meticulous attention to detail uncovered potential issues I would have overlooked, saving me time and money in the long run.” "
                name="Micheal Adams"
                avatar={avatar6}
              />
            </div>
          </div>

          <div
            aria-label="Frequently Asked Question"
            className="my-16 space-y-6"
          >
            <div className="text-center sm:space-y-4">
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
