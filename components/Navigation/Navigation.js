"use client";

import { useState } from "react";
import Link from "next/link";

import { List, X } from "@phosphor-icons/react/dist/ssr";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <div className="fixed w-full md:px-10 px-5 py-5 flex justify-between items-start bg-[var(--background)] z-10 -mt-10 border-b border-b-[var(--nav-border)]">
      <div>
        <Link href={`/`}>
          <span className="text-[var(--nav-color)] md:text-4xl text-3xl">
            M<span className="text-[var(--nav-hover)]">uh.Toyyib</span>
          </span>
        </Link>
      </div>

      <div className="md:hidden block">
        <List size={32} onClick={toggleMenu} />
      </div>

      <div
        className={`${showMenu ? `flex` : `hidden`} justify-between p-5 absolute top-0 bg-[var(--background)] w-full -ml-5`}
      >
        <ul className={`md:flex  ${showMenu ? `block` : `hidden`} `}>
          <li className="mb-2">
            <Link
              className=" text-[20px] text-[var(--nav-color)] pb-[1px] tracking-wider border-b border-b-[var(--nav-color)]  hover:border-b-[var(--nav-hover)] hover:text-[var(--nav-hover)] hover:font-[900] font-bold"
              href={`/about`}
            >
              About
            </Link>
          </li>
          <li className="mb-2">
            <Link
              className=" text-[20px] text-[var(--nav-color)] pb-[1px] tracking-wider  border-b border-b-[var(--nav-color)] hover:border-b-[var(--nav-hover)] hover:text-[var(--nav-hover)] hover:font-[900] font-bold"
              href={`/projects`}
            >
              Projects
            </Link>
          </li>
          <li className="mb-2">
            <Link
              className=" text-[20px] text-[var(--nav-color)] pb-[1px] tracking-wider  border-b border-b-[var(--nav-color)] hover:border-b-[var(--nav-hover)] hover:text-[var(--nav-hover)] hover:font-[900] font-bold"
              href={`/blog`}
            >
              Blog
            </Link>
          </li>
          <li className="mb-2">
            <Link
              className=" text-[20px] text-[var(--nav-color)] pb-[1px] tracking-wider  border-b border-b-[var(--nav-color)] hover:border-b-[var(--nav-hover)] hover:text-[var(--nav-hover)] hover:font-[900] font-bold"
              href={`/contact`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div data-aos="zoom-in-down">
          <X size={32} onClick={toggleMenu} />
        </div>
      </div>

      <div
        className={`${showMenu ? `hidden` : `md:block hidden`}`}
        // data-aos="fade-left"
      >
        <ul className={`md:flex space-x-5 ${showMenu ? `block` : `hidden`} `}>
          <li className="mb-2">
            <Link
              className=" text-[20px] text-[var(--nav-color)] pb-[1px] tracking-wider border-b border-b-[var(--nav-color)]  hover:border-b-[var(--nav-hover)] hover:text-[var(--nav-hover)] hover:font-[900] font-bold"
              href={`/about`}
            >
              About
            </Link>
          </li>
          <li className="mb-2">
            <Link
              className=" text-[20px] text-[var(--nav-color)] pb-[1px] tracking-wider  border-b border-b-[var(--nav-color)] hover:border-b-[var(--nav-hover)] hover:text-[var(--nav-hover)] hover:font-[900] font-bold"
              href={`/projects`}
            >
              Projects
            </Link>
          </li>
          <li className="mb-2">
            <Link
              className=" text-[20px] text-[var(--nav-color)] pb-[1px] tracking-wider  border-b border-b-[var(--nav-color)] hover:border-b-[var(--nav-hover)] hover:text-[var(--nav-hover)] hover:font-[900] font-bold"
              href={`/blog`}
            >
              Blog
            </Link>
          </li>
          <li className="mb-2">
            <Link
              className=" text-[20px] text-[var(--nav-color)] pb-[1px] tracking-wider  border-b border-b-[var(--nav-color)] hover:border-b-[var(--nav-hover)] hover:text-[var(--nav-hover)] hover:font-[900] font-bold"
              href={`/contact`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
