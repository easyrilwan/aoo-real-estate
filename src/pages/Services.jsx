import Hero from "../assets/images/services/service-5.jpg";

import ServiceListAll from "../components/features/services/ServiceListAll";

export default function Services() {
  return (
    <section className="px-3 md:px-0">
      <div className="space-y-10 text-aaooBlack">
        <div
          aria-label="About Hero"
          className="relative w-full overflow-hidden rounded-3xl"
        >
          <img
            src={Hero}
            alt="About Page Image"
            className="h-full w-full object-cover brightness-50"
          />
          <div className="absolute bottom-[20%] left-[10%]">
            <h1 className="text-base font-bold text-aaooBgGray md:text-6xl">
              Our Services
            </h1>
            <p className="w-[90%] text-xs text-aaooBgGray md:text-base">
              We provide various services ranging from property management, Real
              Estate Consultancy, Property Valuation, Real Estate Agency.
            </p>
          </div>
        </div>

        <div>
          <ServiceListAll />
        </div>
      </div>
    </section>
  );
}
