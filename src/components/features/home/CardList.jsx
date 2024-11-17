export default function CardList({ icon: Icon, title, description }) {
  return (
    <div className="group flex items-center gap-4 rounded-3xl border border-aaooGray px-4 py-8 transition-all duration-1000 duration-700 hover:bg-aaooBlack">
      <span className="rounded-full bg-aaooBlack object-cover p-2 text-white group-hover:bg-aaooWhite group-hover:text-aaooBlack">
        <Icon size={40} />
      </span>

      <div>
        <h4 className="text-[1.63rem] font-semibold group-hover:text-aaooWhite">
          {title}
        </h4>

        <p className="text-lg text-aaooGray group-hover:text-aaooWhite">
          {description}
        </p>
      </div>
    </div>
  );
}
