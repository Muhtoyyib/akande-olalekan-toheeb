import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const HomeComponent = () => {
  return (
    <div>
      <div
        className="flex flex-col md:flex-row justify-center items-center w-[80%] mx-auto my-5 space-x-5 space-y-14 md:space-y-0 text-center"
        data-aos="fade-right"
      >
        <h1
          className="md:text-4xl text-3xl tracking-widest"
          data-aos="fade-right"
        >
          Front-end Dev.{" "}
        </h1>
        <Image
          src={`/Images/logo.webp`}
          width={150}
          height={150}
          alt=""
          data-aos="fade-right"
        />
        <h1
          className="md:text-4xl text-3xl tracking-wider"
          data-aos="fade-right"
        >
          Technical Writer
        </h1>
      </div>

      <div className="px-9 py-5 md:w-[60%] mx-auto my-0 mt-10 space-y-14">
        <div className="flex flex-col md:flex-row justify-center md:gap-10 items-center space-x-5 space-y-7">
          <Image
            src={`/Images/dp.webp`}
            width={150}
            height={150}
            alt=""
            data-aos="fade-right"
          />

          <ul className="block list-disc" data-aos="fade-right">
            <li className="mb-2">
              <Link
                className=" text-[20px] pb-[1px] tracking-wider border-b hover:border-b-[#9ae300] hover:text-[#9ae300] font-bold"
                href={`/about`}
              >
                Know more about me
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className=" text-[20px] pb-[1px] tracking-wider  border-b hover:border-b-[#9ae300] hover:text-[#9ae300] font-bold"
                href={`/projects`}
              >
                My Favorite Projects
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className=" text-[20px] pb-[1px] tracking-wider  border-b hover:border-b-[#9ae300] hover:text-[#9ae300] font-bold"
                href={`/blog`}
              >
                Check out my articles
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className=" text-[20px] pb-[1px] tracking-wider  border-b hover:border-b-[#9ae300] hover:text-[#9ae300] font-bold"
                href={`/contact`}
              >
                Contact me
              </Link>
            </li>
          </ul>
        </div>

        <p
          className="text-[20px] tracking-wider mt-10 leading-7"
          data-aos="fade-right"
        >
          Passionate frontend developer and technical writer with a strong
          foundation in <span className="text-[#6400c9] font-bold">React</span>,{" "}
          <span className="text-[#6400c9] font-bold">Next.js, </span>
          <span className="text-[#6400c9] font-bold">Sass</span>,{" "}
          <span className="text-[#6400c9] font-bold">TailwindCSS, </span>
          and <span className="text-[#6400c9] font-bold">AWS</span>. Skilled at
          crafting user-friendly interfaces and writing clear, concise technical
          documentation. Committed to staying up-to-date with the latest
          industry trends and best practices.{" "}
          <Link
            href="/Files/akande-olalekan-toheeb.pdf"
            download="akande-olalekan-toheeb.pdf"
            className="bg-[#6400c9] text-[#9ae300] hover:bg-[#9ae300] hover:text-[#6400c9] hover:font-bold py-1 px-2 rounded-[5px]
             flex items-start justify-center gap-3 mt-10 transition-all duration-75 "
            target="_blank"
            // data-aos="fade-right"
          >
            Download CV
            <ArrowRight size={25} />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomeComponent;
