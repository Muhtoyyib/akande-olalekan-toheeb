import React from "react";

const Form = () => {
  return (
    <div>
      <h3 className="text-2xl uppercase pb-5">Contact detials</h3>

      {/* Name */}
      <div className="flex justify-between py-7 px-10 bg-[var(--background-reverse)] rounded-lg text-2xl mb-5">
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          placeholder="Akande Olalekan Toheeb"
          className="border-none outline-none bg-transparent text-[var(--foreground)] w-4/5 text-right"
        />
      </div>

      {/* Company */}
      <div className="flex justify-between py-7 px-10 bg-[var(--background-reverse)] rounded-lg text-2xl mb-5">
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Akande Olalekan Toheeb"
          className="border-none outline-none bg-transparent text-[var(--foreground)] w-4/5 text-right"
        />
      </div>

      {/* Email */}
      <div className="flex justify-between py-7 px-10 bg-[var(--background-reverse)] rounded-lg text-2xl mb-5">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="akandeolalekantoheeb94@gmail.com"
          className="border-none outline-none bg-transparent text-[var(--foreground)] w-4/5 text-right"
        />
      </div>

      {/* Message */}
      <div className="py-5 px-10 bg-[var(--background-reverse)] rounded-lg text-2xl">
        <label htmlFor="message" className="block mb-1">
          Message
        </label>
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder="How can I help?"
          className="border-none outline-none bg-transparent text-[var(--foreground)] w-full h-40"
        ></textarea>
      </div>

      <button
        type="submit"
        className="py-5 text-[24px] px-10 rounded-[45px] bg-[var(--foreground)] text-[var(--background)] float-end mt-7 hover:bg-[var(--background-reverse)] hover:text-[var(--foreground)]"
      >
        Submit request
      </button>
    </div>
  );
};

export default Form;
