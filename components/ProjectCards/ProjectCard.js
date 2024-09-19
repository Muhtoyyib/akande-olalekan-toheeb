"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import "./ProjectCard.css";

const ProjectCard = () => {
  const [showLink, setShowLink] = useState(false);

  const handleShowLink = () => {
    setShowLink((prevState) => !prevState);
  };

  return (
    <div className="relative container">
      <Image
        src={`/Images/test.avif`}
        width={800}
        height={800}
        alt="project"
        className="z-20 hover:z-0"
        onTouchMove={handleShowLink}
      />
      <h3>Project 1</h3>
      <p>Description</p>

      <Link
        href={``}
        target="_blank"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 link bg-[var(--background)] p-7 rounded-full"
      >
        <ArrowUpRight size={64} className="text-[var(--foreground)]" />
      </Link>
    </div>
  );
};

export default ProjectCard;
