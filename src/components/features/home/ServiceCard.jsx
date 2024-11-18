import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function ServiceCardList({ title, description }) {
  return (
    <div className="group flex items-center justify-between gap-4">
      <div className="space-y-2 pt-10">
        <h3 className="text-sm font-semibold md:text-5xl">{title}</h3>
        <p className="w-[100%] text-[10px] text-aaooGray md:text-base">
          {description}
        </p>
      </div>

      <Link to="/services">
        <div className="md:text-[ 6rem] rounded-full border-4 border-aaooBlack p-2 text-[2.125rem] transition-all duration-500 group-hover:-rotate-45 group-hover:bg-aaooBlack group-hover:fill-yellow-300 group-hover:text-aaooWhite md:text-[2.5rem]">
          <HiOutlineArrowRight />
        </div>
      </Link>
    </div>
  );
}
