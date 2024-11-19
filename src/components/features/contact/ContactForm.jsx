export default function ContactForm() {
  return (
    <form className="flex h-full w-full flex-col items-center gap-8 rounded-2xl bg-aaooBlack px-6 py-10 text-aaooWhite caret-aaooBlack">
      <h1 className="text-center text-4xl font-semibold">Send a Message</h1>

      <div className="w-full space-y-8 text-xl font-normal">
        <div className="w-full space-y-2">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Full name"
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-aaooBlack outline-none transition-colors duration-300"
          />
        </div>

        <div className="w-full space-y-2">
          <label htmlFor="mail">Email Address</label>
          <input
            type="email"
            name="mail"
            id="mail"
            placeholder="Email address"
            className="w-full rounded-md border px-4 py-3 text-aaooBlack outline-none"
          />
        </div>
      </div>

      <div className="mt-[20px] flex w-full flex-col gap-[5px] text-left text-xl">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Message"
          className="min-h-[200px] w-full rounded-md px-4 py-3 text-aaooBlack"
        ></textarea>
      </div>

      <button
        type="submit"
        className="rounded-2xl border px-10 py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-aaooWhite hover:text-aaooBlack"
      >
        Submit
      </button>
    </form>
  );
}
