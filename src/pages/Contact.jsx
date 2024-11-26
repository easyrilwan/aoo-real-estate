import { MdEmail, MdLocationOn } from "react-icons/md";
import HeroContact from "../assets/images/contact/image-9.jpeg";
import ContactForm from "../components/features/contact/ContactForm";
import { IoMdCall } from "react-icons/io";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="px-3 py-4 md:px-0">
      <div className="mb-20 space-y-8 sm:space-y-20">
        <div
          aria-label="About Hero"
          className="relative max-h-[500px] w-full overflow-hidden rounded-3xl shadow-md"
        >
          <img
            src={HeroContact}
            alt="About Page Image"
            className="h-full w-full object-cover brightness-50"
          />
          <div className="absolute bottom-[20%] left-[10%]">
            <h1 className="text-base font-bold text-aaooBgGray md:text-6xl">
              Contact Us
            </h1>
            <p className="w-[90%] text-xs text-aaooBgGray sm:w-full md:text-base">
              Contact Us to get that properties and also acquire that house that
              suits your needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="md:space-y-4">
            <h2 className="text-2xl font-semibold md:text-5xl">Get In Touch</h2>
            <p className="text-sm font-medium text-aaooGray md:text-xl">
              Our team of real estate experts is ready to assist with all your
              property needs. Fill out the form below, call us, or drop by our
              office for personalized service.
            </p>

            <div className="hidden space-y-4 md:block md:space-y-8">
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-aaooBlack p-2 text-3xl md:p-4 md:text-5xl">
                    <MdLocationOn color="white" />
                  </div>
                  <div className="space-y-2">
                    <h6 className="text-xl font-semibold md:text-3xl">
                      Location:
                    </h6>
                    <p className="text-xs font-medium text-aaooGray md:text-xl">
                      Block 15, LKJ Gardens Estate, Nysc Bustop, Igando, Lagos
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-aaooBlack p-2 text-3xl md:p-4 md:text-5xl">
                    <IoMdCall color="white" />
                  </div>
                  <div className="space-y-2">
                    <h6 className="text-xl font-semibold md:text-3xl">
                      Phone Number:
                    </h6>
                    <p className="text-xs font-medium text-aaooGray md:text-xl">
                      +2347067509767, +2348114987120
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-aaooBlack p-2 text-3xl md:p-4 md:text-5xl">
                    <MdEmail color="white" />
                  </div>
                  <div className="space-y-2">
                    <h6 className="text-xl font-semibold md:text-3xl">
                      E-Mail:
                    </h6>
                    <p className="text-xs font-medium text-aaooGray md:text-xl">
                      aoo.realtors@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-[2px] w-full bg-aaooBlack md:block"></div>

              <div className="space-y-4">
                <h1 className="text-3xl font-semibold">Follow Us:</h1>
                <div className="space-x-4">
                  <div className="inline-flex rounded-full bg-aaooBlack p-2 text-3xl md:p-4 md:text-5xl">
                    <RiInstagramFill color="white" />
                  </div>
                  <a
                    href="https://wa.me/+2347067509767"
                    target="_blank"
                    className="inline-flex cursor-pointer rounded-full bg-aaooBlack p-2 text-3xl md:p-4 md:text-5xl"
                  >
                    <RiWhatsappFill color="white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>

          <div className="block space-y-4 md:hidden md:space-y-8">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-aaooBlack p-2 text-3xl md:p-4 md:text-5xl">
                  <MdLocationOn color="white" />
                </div>
                <div className="space-y-2">
                  <h6 className="text-xl font-semibold md:text-3xl">
                    Location:
                  </h6>
                  <p className="text-xs font-medium text-aaooGray md:text-xl">
                    Block 15, LKJ Gardens Estate, Nysc Bustop, Igando, Lagos
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-aaooBlack p-2 text-3xl md:p-4 md:text-5xl">
                  <IoMdCall color="white" />
                </div>
                <div className="space-y-2">
                  <h6 className="text-xl font-semibold md:text-3xl">
                    Phone Number:
                  </h6>
                  <p className="text-xs font-medium text-aaooGray md:text-xl">
                    +2347067509767, +2348114987120
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-aaooBlack p-2 text-3xl md:p-4 md:text-5xl">
                  <MdEmail color="white" />
                </div>
                <div className="space-y-2">
                  <h6 className="text-xl font-semibold md:text-3xl">E-Mail:</h6>
                  <p className="text-xs font-medium text-aaooGray md:text-xl">
                    aoo.realtors@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden h-[2px] w-full bg-aaooBlack md:block"></div>

            <div className="space-y-4">
              <h1 className="text-3xl font-semibold">Follow Us:</h1>
              <div className="space-x-4">
                <div className="inline-flex rounded-full bg-aaooBlack p-2 text-3xl md:p-4 md:text-5xl">
                  <RiInstagramFill color="white" />
                </div>
                <a
                  href="https://wa.me/+2347067509767"
                  className="inline-flex rounded-full bg-aaooBlack p-2 text-3xl md:p-4 md:text-5xl"
                >
                  <RiWhatsappFill color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-label="About Hero"
          className="h-[500px] w-full overflow-hidden rounded-3xl shadow-md"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7279964614327!2d3.2473841748320766!3d6.555981993437157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b85ec51c05cad%3A0xdc09744f3d6e02d7!2s.!5e0!3m2!1sen!2sng!4v1732003622289!5m2!1sen!2sng"
            allowfullscreen="true"
            loading="lazy"
            className="h-full w-full object-cover grayscale"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
