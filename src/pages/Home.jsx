import { CiHome } from "react-icons/ci";
import Home_1 from "../assets/images/home-1.jpeg";
import Image_1 from "../assets/images/image-1.jpeg";
import CardLong from "../components/Card.Long";

export default function Home() {
  return (
    <section className="mx-auto w-[90%]">
      <div className="grid grid-cols-2 bg-teal-300 pb-36 pt-16 capitalize">
        <div className="text-aaooBlack space-y-6 self-center">
          <h1 className="text-6xl font-semibold">
            making your <span className="text-aaooRed">home</span> ownership
            dreams come true
          </h1>
          <p className="pr-40 text-xl">
            discover the perfect property in your ideal neighborhood. explore a
            wide range of properties tailored to your lifestyle
          </p>
          <button className="bg-aaooBlack text-aaooWhite flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-xl">
            <span>Get Started</span> &rarr;
          </button>
        </div>
        <div className="">
          <img src={Home_1} alt="Home Image 1" className="h-full" />
        </div>
      </div>

      <div className="space-y-8 bg-green-200 pb-36 pt-16 capitalize">
        <h2 className="mx-auto max-w-[70%] text-center text-5xl font-semibold">
          your trusted real estate expert&mdash; turning dreams into reality
        </h2>

        <div className="grid grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-3xl">
            <img src={Image_1} alt="Image 1" className="h-full bg-cover" />
          </div>

          <div className="flex flex-col justify-between gap-4">
            <CardLong>
              <div className="border-aaooGray hover:bg-aaooBlack duration-900 group flex items-center gap-4 rounded-xl border px-3 py-4 transition-all duration-700">
                <span className="bg-aaooBlack group-hover:bg-aaooGray rounded-full p-2">
                  <CiHome size={40} color="white" />
                </span>

                <div>
                  <h4 className="group-hover:text-aaooWhite text-[1.63rem] font-semibold">
                    modern architectural design features
                  </h4>
                  <p className="text-aaooGray group-hover:text-aaooWhite text-lg">
                    incorporate innovative and contemporary come layouts
                  </p>
                </div>
              </div>
            </CardLong>

            <CardLong>
              <div className="border-aaooGray hover:bg-aaooBlack duration-900 group flex items-center gap-4 rounded-xl border px-3 py-4 transition-all duration-700">
                <span className="bg-aaooBlack group-hover:bg-aaooGray rounded-full p-2">
                  <CiHome size={40} color="white" />
                </span>

                <div>
                  <h4 className="group-hover:text-aaooWhite text-[1.63rem] font-semibold">
                    smart home automation system
                  </h4>
                  <p className="text-aaooGray group-hover:text-aaooWhite text-lg normal-case">
                    Integrated Technology for a connected Lifestyle. Wide range
                    of space for relaxation
                  </p>
                </div>
              </div>
            </CardLong>

            <CardLong>
              <div className="border-aaooGray hover:bg-aaooBlack duration-900 group flex items-center gap-4 rounded-xl border px-3 py-4 transition-all duration-700">
                <span className="bg-aaooBlack group-hover:bg-aaooGray rounded-full p-2">
                  <CiHome size={40} color="white" />
                </span>

                <div>
                  <h4 className="group-hover:text-aaooWhite text-[1.63rem] font-semibold">
                    high-Quality construction materials
                  </h4>
                  <p className="text-aaooGray group-hover:text-aaooWhite text-lg normal-case">
                    Give the best money can afford to give our properties
                    durability
                  </p>
                </div>
              </div>
            </CardLong>

            <CardLong>
              <div className="border-aaooGray hover:bg-aaooBlack duration-900 group flex items-center gap-4 rounded-xl border px-3 py-4 transition-all duration-700">
                <span className="bg-aaooBlack group-hover:bg-aaooGray rounded-full p-2">
                  <CiHome size={40} color="white" />
                </span>

                <div>
                  <h4 className="group-hover:text-aaooWhite text-[1.63rem] font-semibold">
                    market knowledge
                  </h4>
                  <p className="text-aaooGray group-hover:text-aaooWhite text-lg normal-case">
                    Deep understanding of local real estate trends, pricing, and
                    neighborhoods.
                  </p>
                </div>
              </div>
            </CardLong>
          </div>
        </div>
      </div>
    </section>
  );
}
