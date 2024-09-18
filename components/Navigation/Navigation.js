import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="fixed w-full px-10 py-5 flex justify-between items-start bg-[var(--background)] z-10 -mt-10 border-b border-b-[var(--nav-border)]">
      <div>
        <Link href={`/`}>
          <span className="text-[var(--nav-color)] text-4xl">
            M<span className="text-[var(--nav-hover)]">uh.Toyyib</span>
          </span>
        </Link>
      </div>

      <div>
        <ul className="flex space-x-5">
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
