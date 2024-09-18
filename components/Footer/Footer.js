"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className=" w-[95%] mx-auto border-t border-t-[#adb5bd] space-y-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-20 md:space-y-0 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center md:gap-x-12 md:space-y-0 space-y-5">
          <ul className="block" data-aos="zoom-in-up">
            <li>
              <Link
                href={`/about`}
                className={`block text-[var(--faded-text)] hover:text-[var(--nav-color)] text-[28px] pb-2 ${pathname === `/about` ? "text-[var(--foreground)] font-extrabold" : ""}`}
              >
                About
              </Link>
              <Link
                href={`/projects`}
                className={`block text-[var(--faded-text)] hover:text-[var(--nav-color)] text-[28px] pb-2 ${pathname === `/projects` ? "text-[var(--foreground)] font-extrabold" : ""}`}
              >
                Projects
              </Link>
              <Link
                href={`/blog`}
                className={`block text-[var(--faded-text)] hover:text-[var(--nav-color)] text-[28px] pb-2 ${pathname === `/blog` ? "text-[var(--foreground)] font-extrabold" : ""}`}
              >
                Project
              </Link>
              <Link
                href={`/contact`}
                className={`block text-[var(--faded-text)] hover:text-[var(--nav-color)] text-[28px] pb-2 ${pathname === `/contact` ? "text-[var(--foreground)] font-extrabold" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <ul data-aos="zoom-in-up">
            <li>
              <Link
                href={`/https://github.com/Muhtoyyib`}
                target="_blank"
                className="block text-[var(--faded-text)] hover:text-[var(--nav-color)] text-[28px] pb-2"
              >
                GitHub
              </Link>
              <Link
                href={`https://www.linkedin.com/in/akande-olalekan-toheeb-2a69a0221x.com`}
                target="_blank"
                className="block text-[var(--faded-text)] hover:text-[var(--nav-color)] text-[28px] pb-2"
              >
                LinkedIn
              </Link>
              <Link
                href={`https://x.com/devtoheeb`}
                target="_blank"
                className="block text-[var(--faded-text)] hover:text-[var(--nav-color)] text-[28px] pb-2"
              >
                Twitter/X
              </Link>
              <Link
                href={`https://www.freecodecamp.org/news/author/MuhToyyib/`}
                target="_blank"
                className="block text-[var(--faded-text)] hover:text-[var(--nav-color)] text-[28px]"
              >
                FreeCodeCamp
              </Link>
            </li>
          </ul>
        </div>

        <p
          className="text-[var(--faded-text)] hover:text-[var(--nav-color)] text-2xl pb-2"
          data-aos="zoom-in-up"
        >
          Copyright &copy; 2024 Muh.Toyyib
        </p>
      </div>

      <h2
        className="text-center md:text-[80px] text-[22px]"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        I am AKANDE OLALEKAN TOHEEB
      </h2>
    </div>
  );
};

export default Footer;
