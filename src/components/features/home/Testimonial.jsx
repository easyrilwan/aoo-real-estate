export default function Testimonial() {
  return (
    <div className="bg-secondary mb-8 ml-4 w-[45%] rounded-xl border p-6 shadow-lg">
      <p className="text-text my-3 text-justify text-[0.9rem]">
        “Working with AAO made buying my first home such an easy and stress-free
        experience! They walked me through every step, explaining all the
        details and options, so I felt informed and comfortable with each
        decision.”
      </p>

      <div className="mt-4 flex items-center gap-4">
        <img
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
          alt="demo/image"
          className="h-[40px] w-[40px] rounded-full object-cover"
        />
        <div>
          <h2 className="text-base font-normal">Jhone Dehon</h2>
        </div>
      </div>
    </div>
  );
}
