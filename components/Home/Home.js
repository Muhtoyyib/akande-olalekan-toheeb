"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Navigation from "../Navigation/Navigation";
import ContactModal from "../ContactModal/ContactModal";

import {
  ArrowRight,
  ArrowUpRight,
  GithubLogo,
  LinkedinLogo,
  XLogo,
  Envelope,
} from "@phosphor-icons/react/dist/ssr";

const HomeComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prevState) => !prevState);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="mt-32 px-10">
        <div
          className="flex flex-col md:flex-row justify-center md:gap-10 items-center md:space-x-5 space-y-10 md:space-y-0 md:w-[80%] mx-auto"
          data-aos="zoom-in-up"
        >
          <div>
            <Image src={`/Images/dp.webp`} width={2000} height={2000} alt="" />
          </div>

          <div className="space-y-10">
            <h3
              className="md:text-4xl w-full text-3xl md:text-left text-center font-bold"
              data-aos="zoom-in-up"
            >
              I am Akande Olalekan Toheeb. <br /> A Front-end Developer and
              Technical Writer.
            </h3>

            <p className="text-[18px] tracking-wider" data-aos="zoom-in-up">
              Passionate frontend developer and technical writer with a strong
              foundation in <span className=" font-bold">React</span>,{" "}
              <span className=" font-bold">Next.js, </span>
              <span className=" font-bold">Sass</span>,{" "}
              <span className=" font-bold">TailwindCSS, </span>
              and <span className=" font-bold">AWS</span>. Skilled at crafting
              user-friendly interfaces and writing clear, concise technical
              documentation. Committed to staying up-to-date with the latest
              industry trends and best practices.{" "}
            </p>

            <div>
              <ul className=" list-none flex flex-col md:flex-row justify-between">
                <li className="mb-2">
                  <Link
                    className="flex gap-2 bg-[var(--nav-color)] text-[var(--color-cta)] hover:bg-[var(--nav-hover)] hover:text-[var(--nav-hover-text)] items-center text-[15px] py-1 px-2 rounded-sm tracking-wider  font-bold"
                    href={`/projects`}
                  >
                    My Favorite Projects
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="flex gap-2 bg-[var(--nav-color)] text-[var(--color-cta)] hover:bg-[var(--nav-hover)] hover:text-[var(--nav-hover-text)] items-center text-[15px] py-1 px-2 rounded-sm tracking-wider  font-bold"
                    href={`/about`}
                  >
                    Know more about me
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="flex gap-2 bg-[var(--nav-color)] text-[var(--color-cta)] hover:bg-[var(--nav-hover)] hover:text-[var(--nav-hover-text)] items-center text-[15px] py-1 px-2 rounded-sm tracking-wider  font-bold"
                    href={`/blog`}
                  >
                    Check out my articles
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
              </ul>

              <Link
                href="/Files/akande-olalekan-toheeb.pdf"
                download="akande-olalekan-toheeb.pdf"
                className="mt-2 bg-[var(--nav-color)] text-[var(--color-cta)] hover:bg-[var(--nav-hover)] hover:text-[var(--nav-hover-text)] hover:font-bold py-1 px-2 rounded-[5px]
             flex items-start justify-center gap-3 transition-all duration-75 "
                target="_blank"
                //
              >
                Download CV
                <ArrowRight size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--nav-color)] mt-14 p-2 md:absolute md:bottom-0 w-full md:flex md:flex-row md:justify-between space-y-2 items-center">
        <p className="text-[var(--color-cta)]">
          Copyright &copy; 2024 Muh.Toyyib
        </p>

        <ul className="flex flex-row gap-x-2  md:gap-y-0 gap-y-2 text-[var(--color-cta)]">
          <Link href={`https://github.com/Muhtoyyib`}>
            <GithubLogo size={16} />
          </Link>

          <Link
            href={`https://www.linkedin.com/in/akande-olalekan-toheeb-2a69a0221x.com`}
          >
            <LinkedinLogo size={16} />
          </Link>

          <Link href={`https://x.com/devtoheeb`}>
            <XLogo size={16} />
          </Link>

          <Link href={`mailto:akandeolalekantoheeb94@gmail.com`}>
            <Envelope size={16} />
          </Link>
        </ul>
      </div>

      {showModal && <ContactModal handleModal={handleShowModal} />}
    </>
  );
};

export default HomeComponent;
