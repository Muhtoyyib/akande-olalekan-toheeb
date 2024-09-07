import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const HomeComponent = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-5 w-[80%] mx-auto my-0">
        <h1 className="text-3xl">Front-end Engineer </h1>
        <Image src={`/Images/logo.webp`} width={150} height={150} alt="" />
        <h1 className="text-3xl">Technical Writer</h1>
      </div>

      <div className="px-9 py-5 w-[60%] mx-auto my-0 mt-8 ">
        <div className="flex justify-center gap-10 items-center ">
          <Image src={`/Images/dp.webp`} width={150} height={150} alt="" />

          <ul className="block list-disc">
            <li className="mb-2">
              <Link
                className=" text-1xl underline hover:text-[#9ae300] font-bold"
                href={`/about`}
              >
                Know more about me
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className=" text-1xl  underline hover:text-[#9ae300] font-bold"
                href={`/projecrs`}
              >
                My Favorite Projects
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className=" text-1xl  underline hover:text-[#9ae300] font-bold"
                href={`/blog`}
              >
                Check out my articles
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className=" text-1xl  underline hover:text-[#9ae300] font-bold"
                href={`/contact`}
              >
                Contact me
              </Link>
            </li>
          </ul>
        </div>

        <p className="text-[18px] mt-8 leading-7">
          Passionate frontend developer and technical writer with a strong
          foundation in <span className="text-[#6400c9]">React</span>,{" "}
          <span className="text-[#6400c9]">Next.js, </span>
          <span className="text-[#6400c9]">Sass</span>,{" "}
          <span className="text-[#6400c9]">TailwindCSS, </span>
          and <span className="text-[#6400c9]">AWS</span>. Skilled at crafting
          user-friendly interfaces and writing clear, concise technical
          documentation. Committed to staying up-to-date with the latest
          industry trends and best practices.{" "}
          <Link
            href="/Files/akande-olalekan-toheeb.pdf"
            download="akande-olalekan-toheeb.pdf"
            className="bg-[#6400c9] text-[#9ae300] py-1 px-2 rounded-[5px] flex items-start justify-center gap-3 mt-5"
            target="_blank"
          >
            Download CV
            <ArrowRight size={25} />
          </Link>
        </p>
      </div>
    </>
  );
};

export default HomeComponent;
