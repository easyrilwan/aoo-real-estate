import { MdAddHome, MdMarkEmailRead } from "react-icons/md";
import Home_1 from "../../../assets/images/home/home-1.jpeg";
import Home_2 from "../../../assets/images/home/home-2.jpeg";
import Home_3 from "../../../assets/images/home/home-3.jpeg";
import Home_4 from "../../../assets/images/home/home-4.jpeg";

export default function ImageGrid() {
  return (
    <div className="relative grid h-full w-full grid-cols-8 grid-rows-8 gap-3">
      <img
        src={Home_1}
        alt="Home Image 1"
        className="col-span-3 col-start-2 row-span-4 block h-full w-full rounded-2xl object-cover shadow-md"
      />

      <img
        src={Home_3}
        alt="Home Image 2"
        className="col-span-4 col-start-1 row-span-3 row-start-5 block h-full w-full rounded-2xl object-cover shadow-md"
      />

      <img
        src={Home_2}
        alt="Home Image 3"
        className="col-span-4 col-start-5 row-span-3 row-start-2 block h-full w-full rounded-2xl object-cover shadow-md"
      />

      <img
        src={Home_4}
        alt="Home Image 4"
        className="col-span-3 col-start-5 row-span-4 row-start-5 block h-full w-full rounded-2xl object-cover shadow-md"
      />

      <div className="backdrop-saturate-180 card absolute left-[-5%] top-[20%] w-fit scale-50 rounded-2xl border border-gray-300/30 bg-white/50 py-2 pl-2 pr-6 backdrop-blur-md sm:top-[30%] md:left-[0%] md:scale-100">
        <div className="flex space-x-[-10px]">
          <MdMarkEmailRead size={30} />

          <div className="text-center font-bold">
            <p>100%</p>
            <p className="text-sm font-semibold">Client</p>
            <p className="text-sm font-semibold">Satisfaction</p>
          </div>
        </div>
      </div>

      <div className="backdrop-saturate-180 card absolute right-[8%] w-fit scale-50 rounded-2xl border border-gray-300/30 bg-white/50 py-2 pl-2 pr-6 backdrop-blur-md sm:right-[25%] sm:top-[5%] md:right-[20%] md:top-[6%] md:scale-100">
        <div className="flex">
          <MdAddHome size={30} />

          <div className="pt-6 text-center text-sm font-semibold">
            <p>Certified Real</p>
            <p>Estate Agency</p>
          </div>
        </div>
      </div>
    </div>
  );
}
