import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function ServiceCardList({ title, description }) {
  return (
    <div className="group flex items-center justify-between gap-4">
      <div className="space-y-2 pt-10">
        <h3 className="text-5xl font-semibold">{title}</h3>
        <p className="w-[100%] text-aaooGray">{description}</p>
      </div>

      <Link to="/services">
        <div className="rounded-full border-4 border-aaooBlack p-2 text-[96px] transition-all duration-500 group-hover:-rotate-45 group-hover:bg-aaooBlack group-hover:fill-yellow-300 group-hover:text-aaooWhite">
          <HiOutlineArrowRight size={40} />
        </div>
      </Link>
    </div>
  );
}
