"use client";

import { useState } from "react";
import { sendForm } from "@emailjs/browser";
const Form = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // Put the sendForm inside a setTimeout
    sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        console.log(result.text);
        setStatus("SUCCESS");
      },
      (error) => {
        console.log(error.text);
        setStatus("ERROR");
      }
    );

    setLoading(false);
    e.target.reset();
  };
  return (
    <div>
      <h3 className="text-[20px] uppercase pb-5">Contact detials</h3>

      {status === "SUCCESS" && (
        <p className="pb-3 text-green-700 text-[16px]">
          Thanks for your message!
        </p>
      )}
      {status === "ERROR" && (
        <p className="pb-3 text-red-700 text-[16px]">
          Oops, something went wrong. Please try again.
        </p>
      )}

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="flex justify-between py-4 px-7 bg-[var(--background-reverse)] rounded-lg md:text-[20px] text-[12px] mb-5">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder=" Olalekan Toheeb"
            className="border-none outline-none bg-transparent text-[var(--foreground)] w-4/5 text-right"
          />
        </div>

        {/* Company */}
        <div className="flex justify-between py-4 px-7 bg-[var(--background-reverse)] rounded-lg md:text-[20px] text-[12px] mb-5">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Akande"
            className="border-none outline-none bg-transparent text-[var(--foreground)] w-4/5 text-right"
          />
        </div>

        {/* Email */}
        <div className="flex justify-between py-4 px-7 bg-[var(--background-reverse)] rounded-lg md:text-[20px] text-[12px] mb-5">
          <label htmlFor="reply_to">Email</label>
          <input
            type="email"
            id="reply_to"
            name="reply_to"
            placeholder="akandeolalekantoheeb94@gmail.com"
            className="border-none outline-none bg-transparent text-[var(--foreground)] w-4/5 text-right"
          />
        </div>

        {/* Message */}
        <div className="py-4 px-7 bg-[var(--background-reverse)] rounded-lg md:text-[20px] text-[12px]">
          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="How can I help?"
            className="border-none outline-none bg-transparent text-[var(--foreground)] w-full h-30"
          ></textarea>
        </div>

        <button
          type="submit"
          className="py-3 px-7 rounded-[45px] bg-[var(--foreground)] text-[var(--background)] float-end mt-5 hover:bg-[var(--background-reverse)] hover:text-[var(--foreground)]"
        >
          {loading ? "Submitting request..." : "Submit request"}
        </button>
      </form>
    </div>
  );
};

export default Form;
