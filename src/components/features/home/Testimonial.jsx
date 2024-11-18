export default function Testimonial({ description, name, avatar }) {
  return (
    <div className="mb-8 rounded-xl border bg-secondary p-6 shadow-lg">
      <p className="text-text my-3 text-justify text-[0.9rem]">
        {description || "No testimonial provided"}
      </p>

      <div className="mt-4 flex items-center gap-4">
        <img
          src={
            avatar ||
            "https://img.freepik.com/free-photo/young-bearded-lady-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
          }
          alt={`${name}'s avatar`}
          className="h-[40px] w-[40px] rounded-full object-cover"
        />
        <div>
          <h2 className="text-base font-normal">{name}</h2>
        </div>
      </div>
    </div>
  );
}
