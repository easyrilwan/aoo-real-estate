export default function CardList({ icon: Icon, title, description }) {
  return (
    <div className="group flex items-center gap-2 rounded-3xl border border-aaooGray px-2 py-4 transition-all duration-700 hover:bg-aaooBlack md:gap-4 md:px-4 md:py-8">
      <span className="rounded-full bg-aaooBlack object-cover p-1 text-xl text-white group-hover:bg-aaooWhite group-hover:text-aaooBlack md:p-2 md:text-[2.5rem]">
        <Icon />
      </span>

      <div>
        <h4 className="text-sm font-semibold group-hover:text-aaooWhite md:text-[1.63rem]">
          {title}
        </h4>

        <p className="text-[0.625rem] text-aaooGray group-hover:text-aaooWhite md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
