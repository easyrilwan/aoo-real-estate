import { BsFillGrid1X2Fill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function FeaturedCard({
  image,
  hectares = "",
  description = "",
  location = "",
}) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl">
      <img
        src={image}
        alt="Featured Images"
        className="block h-[372px] w-full object-cover"
      />

      <div className="backdrop-saturate-180 absolute bottom-[10%] left-1/2 w-[85%] translate-x-[-50%] rounded-2xl border bg-white/40 px-2 py-2 text-xs font-semibold capitalize text-aaooBlack backdrop-blur-md">
        <div className="space-y-4">
          <div className="w-full space-y-2">
            <div className="flex justify-between">
              <div className="flex items-center">
                <BsFillGrid1X2Fill color="white" />
                {hectares === "" ? (
                  <span className="pl-1 text-white">N/A</span>
                ) : (
                  hectares
                )}
              </div>

              {description === "" ? (
                <span className="text-base text-[#F12B2B]">N/A</span>
              ) : (
                description
              )}
            </div>

            <div className="-ml-1 flex w-[190px] items-center">
              <MdLocationOn size={20} color="white" />
              <p>
                {location === "" ? (
                  <span className="text-white">N/A</span>
                ) : (
                  location
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-aaooBlack px-2 py-2">
            <p className="text-sm font-medium">More Details</p>
            <div className="rounded-full bg-aaooBlack p-2">
              <HiOutlineArrowRight color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
