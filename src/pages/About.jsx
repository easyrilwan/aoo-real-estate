import Hero from "../assets/images/about/image-7.jpeg";
import AboutUs from "../components/features/about/AboutUs";
import AboutCards from "../components/features/about/AboutCards";
import ServiceCard from "../components/features/home/ServiceCard";

export default function About() {
  return (
    <section className="mb-8 px-3">
      <div className="space-y-10 text-aaooBlack">
        <div
          aria-label="About Hero"
          className="relative max-h-[500px] w-full overflow-hidden rounded-3xl"
        >
          <img
            src={Hero}
            alt="About Page Image"
            className="h-full w-full object-cover brightness-50"
          />
          <div className="absolute bottom-[20%] left-[10%] text-aaooWhite">
            <h1 className="text-lg font-bold text-aaooBgGray md:text-6xl">
              About Us
            </h1>
            <p className="text-aaooBgGray">
              we are dedicated to helping you find your dream home with ease.
            </p>
          </div>
        </div>

        <AboutUs />

        <AboutCards />

        <div className="space-y-4">
          <h1 className="text-xl font-semibold uppercase md:text-5xl">
            Services
          </h1>

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
        </div>
      </div>
    </section>
  );
}
