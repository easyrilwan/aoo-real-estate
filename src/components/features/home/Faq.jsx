import { useState } from "react";

// icons
import { FaPlus } from "react-icons/fa6";

const BorderAccording = () => {
  const [isAccordingOpen, setIsAccordingOpen] = useState(null);

  // according data
  const accordingData = [
    {
      title: "How much should I expect to pay for a home in an area?",
      description:
        "The Average Home Price In [Area] Is [Average Price]. However, Prices Can Vary Depending On Factors Such As Size, Location, And Condition.",
    },
    {
      title: "What is the process of selling a home?",
      description:
        "Selling A Home Typically Involves Choosing A Real Estate Agent, Setting A Listing Price, Preparing The Home For Sale, Marketing The Property, Reviewing And Negotiating Offers, And Completing Inspections And Appraisals Before Finalizing The Sale With Closing Documents And The Transfer Of Ownership.",
    },
    {
      title: "What is the rental application process?",
      description:
        "The Rental Application Process Typically Involves Filling Out An Application Form, Providing Personal And Financial Information, Consenting To Background And Credit Checks, And Any Required Documents, Like Proof Of Income And ID. Once Reviewed, The Landlord Or Property Manager Will Notify You Of Approval Or Next Steps.",
    },

    {
      title: "What services does your property management team offer?",
      description:
        "Our Property Management Team Provides A Full Range Of Services, Including Tenant Screening, Rent Collection, Property Maintenance, Lease Management, And Financial Reporting To Ensure Your Property Operates Smoothly And Profitably.",
    },

    {
      title: "Do you work with buyers, sellers, or both?",
      description:
        "Our Property Management Team Provides A Full Range Of Services, Including Tenant Screening, Rent Collection, Property Maintenance, Lease Management, And Financial Reporting To Ensure Your Property Operates Smoothly And Profitably.",
    },
  ];

  const handleBorderClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="flex w-full flex-col gap-3">
      {accordingData?.map((according, index) => (
        <article
          key={index}
          className="rounded-2xl border-2 border-aaooBlack p-3"
        >
          <div
            className="flex w-full cursor-pointer items-baseline justify-between gap-2 px-1 py-4 md:items-start"
            onClick={() => handleBorderClick(index)}
          >
            <h2 className="text-aaooB text-lg font-[600] md:text-2xl">
              {according.title}
            </h2>
            <p>
              <FaPlus
                className={`text-lg text-aaooBlack transition-all duration-500 md:text-4xl ${
                  isAccordingOpen === index && "!text-aao rotate-[45deg]"
                }`}
              />
            </p>
          </div>

          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              isAccordingOpen === index
                ? "mt-4 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <p className="w-full overflow-hidden text-sm font-normal text-aaooGray md:w-[60%] md:text-xl">
              {according.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BorderAccording;
