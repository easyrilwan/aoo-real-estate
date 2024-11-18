import { Link } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function SectionWithImage({
  sectionNumber,
  heading,
  description,
  points,
  imageSrc,
  linkText,
  linkUrl,
}) {
  return (
    <div className="grid h-full w-full grid-cols-1 place-items-center gap-x-4 md:grid-cols-2">
      {/* Text Section */}
      <div className="flex h-full w-full flex-col justify-center space-y-10">
        <h1 className="border-b-2 text-9xl font-bold text-[#D9D9D9]">
          {sectionNumber}
        </h1>

        <div className="space-y-10">
          <div className="space-y-10">
            <h2 className="text-5xl font-semibold">{heading}</h2>
            <p className="text-2xl font-medium text-aaooGray">{description}</p>
          </div>

          <div className="space-y-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-2 text-2xl">
                <IoCheckmarkCircle />
                {point}
              </div>
            ))}
          </div>

          <div>
            <Link
              to={linkUrl}
              className="hover rounded-xl border-4 border-aaooBlack bg-aaooBlack px-3 py-2 text-white duration-500 hover:bg-transparent hover:text-aaooBlack"
            >
              {linkText}
            </Link>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex h-full w-full items-center justify-center md:block">
        <img
          src={imageSrc}
          alt="Section Visual"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
