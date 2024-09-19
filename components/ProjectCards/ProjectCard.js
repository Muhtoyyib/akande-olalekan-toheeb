"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import "./ProjectCard.css";

const ProjectCard = ({ img, title, des, link, github, skills }) => {
  const [showLink, setShowLink] = useState(false);

  const handleShowLink = () => {
    setShowLink((prevState) => !prevState);
  };

  return (
    <div className="container" data-aos="zoom-in-up">
      <div className="relative">
        <Image
          src={`${img}`}
          width={800}
          height={800}
          alt={`${title} project thumbnail`}
          className="z-20 hover:z-0"
          onTouchMove={handleShowLink}
        />
        <Link
          href={`${link}`}
          target="_blank"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 link bg-[var(--nav-color)] p-7 rounded-full"
        >
          <ArrowUpRight size={64} className="text-[var(--color-cta)]" />
        </Link>
      </div>
      <div className="flex justify-between text-2xl py-3 mb-2">
        <h3 className="font-bold">{title}</h3>
        <Link
          href={`${github}`}
          target="_blank"
          className="text-[var(--faded-text)] hover:text-[var(--nav-hover)] 
          border-b border-b-[var(--faded-text)] hover:border-b-[var(--nav-hover)]"
        >
          GitHub
        </Link>
      </div>
      <p className="text-[var(--faded-text)] text-[20px]">{des}</p> <br />
      <div className="flex gap-1 flex-wrap">
        {skills?.map((skill, index) => (
          <p
            key={index}
            className="bg-[var(--nav-color)] py-1 px-5 rounded-2xl text-[var(--color-cta)] text-[16px] uppercase"
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
