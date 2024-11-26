import { Link } from "react-router-dom";

import AboutCard from "./AboutCard";
import { FaUserCheck } from "react-icons/fa6";
import { PiMagicWandDuotone } from "react-icons/pi";

export default function AboutCards() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between font-medium">
        <div className="space-y-2 sm:space-y-8">
          <h1 className="text-2xl font-semibold uppercase md:text-5xl">
            why choose us?
          </h1>
          <p className="text-base text-aaooGray md:text-xl">
            We are committed to providing accurate reliable and professional
            services.
          </p>
        </div>

        <div>
          <Link
            to="/contact"
            className="hidden rounded-xl border-4 border-aaooBlack bg-aaooBlack px-3 py-2 text-white duration-500 hover:bg-transparent hover:text-aaooBlack lg:block"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AboutCard
          icon={<FaUserCheck />}
          title="Expertise"
          description="As registered Estate Surveyors and Valuers, we bring extensive knowledge and years of experience to every project we undertake."
        />

        <AboutCard
          icon={<PiMagicWandDuotone />}
          title="Client Centric Approach"
          description="
          We are committed to offering personalized services tailored to each client's specific needs and objectives."
        />

        <AboutCard
          icon={<PiMagicWandDuotone />}
          title="Comprehensive Solution"
          description="
          We offer all-inclusive solutions that ensure your real estate investments yield the best returns"
        />

        <AboutCard
          icon={<FaUserCheck />}
          title="Market Insight"
          description="With a deep understanding of Nigeria’s real estate market, we provide valuable insights to help clients make informed decisions."
        />

        <AboutCard
          icon={<FaUserCheck />}
          title="Professionalism"
          description="We adhere to the highest standards of professionalism and ethical practices in all our dealings."
        />

        <AboutCard
          icon={<FaUserCheck />}
          title="Integrity"
          description="We believe in building trust through transparency, honesty, and ethical practices. Our clients can count on us to provide accurate information.."
        />
      </div>
    </div>
  );
}
