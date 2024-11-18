export default function AboutCard({ icon: Icon, title, description }) {
  return (
    <div className="flex w-full flex-col items-center gap-2 rounded-xl border bg-aaooWhite px-3 py-6 shadow-md">
      <div className="rounded-xl bg-aaooBlack p-5 text-5xl text-white">
        {Icon}
      </div>

      <div className="w-full space-y-4 text-center">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="text-xl text-aaooGray">{description}</p>
      </div>
    </div>
  );
}
