import { FaQuoteRight } from "react-icons/fa6";
import { RxStar, RxStarFilled } from "react-icons/rx";

export default function Testimonial({ description, name, avatar }) {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl border border-aaooBlack p-6 shadow-md">
      <div className="flex text-2xl text-yellow-400 sm:text-[1.75rem]">
        <RxStarFilled />
        <RxStarFilled />
        <RxStarFilled />
        <RxStarFilled />
        <RxStar />
      </div>

      <p className="text-text my-3 text-[0.9rem]">
        {description || "No testimonial provided"}
      </p>

      <div className="flex items-end justify-between">
        <div className="mt-4 flex items-center gap-4">
          <img
            src={
              avatar ||
              "https://img.freepik.com/free-photo/young-bearded-lady-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
            }
            alt={`${name}'s avatar`}
            className="h-[40px] w-[40px] rounded-full object-cover"
          />
          <div>
            <h2 className="text-base font-normal">{name}</h2>
          </div>
        </div>

        <h1 className="text-[2.375rem]">
          <FaQuoteRight />
        </h1>
      </div>
    </div>
  );
}
