import Form from "../Form/Form";
import { X } from "@phosphor-icons/react/dist/ssr";

const ContactModal = ({ handleModal }) => {
  return (
    <div
      className="md:w-[50%] w-full shadow-[0_0_2rem_0_rgba(0,0,0,0.1)] absolute right-0 top-0 h-screen bg-[var(--background)] border-l-2 border-l-[var(--background)] z-20 px-3 md:px-10 py-10"
      data-aos="fade-left"
    >
      {/* Header */}
      <div className="flex justify-between items-center md:text-[20px] text-[16px] mb-10">
        <h2 className="font-bold w-3/5">
          Got a project in mind, or simply looking to partner? Complete the form
          below and I&apos;ll get back to you.
        </h2>

        <X onClick={handleModal} className="cursor-pointer" size={24} />
      </div>

      {/* Form */}
      <div className="absolute md:bottom-10 w-[90%]">
        <Form />
      </div>
    </div>
  );
};
export default ContactModal;
