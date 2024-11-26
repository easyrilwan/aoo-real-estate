import FounderImage from "../../../assets/images/about/image-8.png";

export default function AboutUs() {
  return (
    <div className="grid h-full w-full grid-cols-1 place-items-center gap-x-3 gap-y-4 md:grid-cols-2">
      <div className="flex flex-col gap-4 font-semibold md:text-3xl">
        <div className="space-y-2 sm:space-y-4">
          <h2 className="text-sm uppercase">about us</h2>
          <h3 className="text-2xl md:text-5xl">
            Your Trusted Partner in Finding Homes & Properties
          </h3>
        </div>

        <div className="flex h-full w-full flex-col gap-4 text-sm font-normal text-aaooGray sm:gap-10 md:text-xl">
          <p>
            At A. OLUWAFEMI OKEBUKUNOLA & CO we pride ourselves on delivering
            exceptional estate surveying and valuation services tailored to our
            client’s needs.
          </p>

          <p>
            With a strong foundation in the real estate sector, we offer
            professional insights and practical solutions across all aspects of
            property management, valuation, consultancy, and real estate agency
            services.
          </p>

          <p>
            Our mission is to provide top-tier, client-focused services that
            guarantee satisfaction and exceed expectations. With years of
            experience, we aim to bring integrity, professionalism, and
            transparency to the Nigerian real estate landscape.
          </p>
        </div>
      </div>

      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-3xl shadow-2xl">
        <img
          src={FounderImage}
          alt="Founder Image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
