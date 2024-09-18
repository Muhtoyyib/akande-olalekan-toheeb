import Form from "../Form/Form";
import { X } from "@phosphor-icons/react/dist/ssr";

const ContactModal = ({ handleModal }) => {
  return (
    <div
      className="w-[50%] absolute right-0 top-0 h-screen bg-[var(--background)] border-l border-l-[var(--background)] z-20 px-10 py-10"
      data-aos="fade-left"
    >
      {/* Header */}
      <div className="flex justify-between items-center text-[20px]">
        <h2 className="font-bold w-3/5">
          Got a project in mind, or simply looking to partner? Complete the form
          below and we&apos;ll get back to you.
        </h2>

        <X onClick={handleModal} className="cursor-pointer" size={24} />
      </div>

      {/* Form */}
      <div className="absolute bottom-10 w-[90%]">
        <Form />
      </div>
    </div>
  );
};
export default ContactModal;
