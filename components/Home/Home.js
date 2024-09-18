import Image from "next/image";
import Link from "next/link";

import Navigation from "../Navigation/Navigation";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const HomeComponent = () => {
  return (
    <>
      <Navigation />

      <div className="mt-32 px-10">
        <h3
          className="text-[70px] leading-[75px] w-[70%]"
          data-aos="zoom-in-up"
        >
          I am Akande Olalekan Toheeb - A Front-end Developer and Technical
          Writer.
        </h3>

        <div className=" py-5 mx-auto my-0 mt-10 space-y-14">
          <div
            className="flex flex-col md:flex-row justify-center md:gap-10 items-center space-x-5"
            data-aos="zoom-in-up"
          >
            <Image src={`/Images/dp.webp`} width={150} height={150} alt="" />

            <ul className="block list-disc">
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

          <p className="text-2xl tracking-wider mt-10" data-aos="zoom-in-up">
            Passionate frontend developer and technical writer with a strong
            foundation in <span className=" font-bold">React</span>,{" "}
            <span className=" font-bold">Next.js, </span>
            <span className=" font-bold">Sass</span>,{" "}
            <span className=" font-bold">TailwindCSS, </span>
            and <span className=" font-bold">AWS</span>. Skilled at crafting
            user-friendly interfaces and writing clear, concise technical
            documentation. Committed to staying up-to-date with the latest
            industry trends and best practices.{" "}
            <Link
              href="/Files/akande-olalekan-toheeb.pdf"
              download="akande-olalekan-toheeb.pdf"
              className="bg-[#6400c9] text-[#9ae300] hover:bg-[var(--nav-hover)] hover:text-[var(--nav-hover-text)] hover:font-bold py-1 px-2 rounded-[5px]
             flex items-start justify-center gap-3 mt-10 transition-all duration-75 "
              target="_blank"
              //
            >
              Download CV
              <ArrowRight size={25} />
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
