"use client";

import { useState } from "react";

import Footer from "../Footer/Footer";
import ContactModal from "../ContactModal/ContactModal";
import ProjectCard from "../ProjectCards/ProjectCard";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prevState) => !prevState);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const projects = [
    {
      img: `/Images/Careerbox (1).webp`,
      title: "CareerBox",
      description:
        "While at MSME Ecosystem, I developed CareerBox.ca, a Canadian career resources platform. This platform empowers job seekers in Canada with the tools and guidance they need to navigate their career journeys.",
      link: `https://payfyr.vercel.app/`,
      github: `https://github.com/Muhtoyyib/`,
      skills: ["react", "css", "api", "tailwindCSS", "Next.js"],
    },
    {
      img: `/Images/Converted Image.png`,
      title: "NamelessShop E-commerce",
      description:
        "Contributing heavily to the development and launch of Nameless Shop, an e-commerce platform built for product owners.",
      link: `https://namelessshop.biz/`,
      github: `https://github.com/TechTummy/nameless-frontend`,
      skills: ["react", "css", "api", "context api", "redux", "tailwindCSS"],
    },
    {
      img: `/Images/home.webp`,
      title: "Laborich Inc",
      description:
        "Designed and developed the official landing page for Laborich Inc., a company offering relocation pathways, bill payment solutions, and virtual cards.",
      link: `https://www.laborich.com`,
      github: `https://github.com/Muhtoyyib`,
      skills: ["next.js", "sass", "api", "aos"],
    },
    {
      img: `/Images/uniskills.webp`,
      title: "UniSkills",
      description:
        "Contributed significantly to UniSkills as an intern, leveraging HTML, CSS, and JavaScript. Later transitioned to a full-time remote role, where I led the API integration efforts, gaining valuable experience in collaboration and large-scale project management.",
      link: `https://uniskills.net/`,
      github: `https://github.com/Muhtoyyib`,
      skills: ["html", "css", "javascript", "react", "material ui", "api"],
    },
    {
      img: `/Images/tulupurse.webp`,
      title: "TuluPurse",
      description:
        "Joined TuluPurse for a 2-month, actively contributing to the project. Led the web application's API integration for a month, further enhancing my technical skills.",
      link: `https://purse.tulupay.com/`,
      github: `https://github.com/Muhtoyyib`,
      skills: ["next.js", "tailwindcss", "api", "context api"],
    },

    {
      img: `/Images/portfolio.webp`,
      title: "My Portfolio Website",
      description:
        "This website serves as my professional online portfolio, showcasing my skills and experience.",
      link: `https://akande-olalekan-toheeb.vercel.app/`,
      github: `https://github.com/Muhtoyyib/akande-olalekan-toheeb`,
      skills: ["next.js", "tailwindcss", "aos", "email.js"],
    },
  ];

  return (
    <>
      <div className={`${showModal ? "blur-sm" : ""} mt-36 `}>
        <h3
          className="md:text-[100px] px-10 md:leading-[100px] w-full text-[50px] md:text-left text-center"
          data-aos="zoom-in-up"
        >
          Selected Projects <br />
          <span className="pt-5 block">(2022 - 2024)</span>
        </h3>

        {/* Project grid */}
        <div className="px-10 mt-20 grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-2 gap-x-7 gap-y-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              img={project.img}
              title={project.title}
              des={project.description}
              link={project.link}
              github={project.github}
              skills={project.skills}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 md:px-10 px-1 relative">
          <h2
            className="text-center pb-1 text-3xl border-b border-b-[#868e96] mb-14 md:w-[15%] w-full mx-auto"
            data-aos="zoom-in-up"
          >
            Schedule a call
          </h2>

          <h3
            className="md:text-[85px] md:leading-[85px] px-3 text-[45px] md:w-[70%] w-full"
            data-aos="zoom-in-up"
          >
            Turning Ideas into Reality with fine design and development. Got a
            project?
          </h3>

          <button
            data-aos="zoom-in-up"
            type="button"
            className="text-[var(--nav-color)] flex items-center md:text-[90px] text-[50px] md:gap-x-1 gap-x-2 md:mt-10 md:mr-10 mt-12
        md:float-right hover:border-b-2 hover:border-b-[var(--foreground)] hover:text-[var(--foreground)]"
            onClick={handleShowModal}
          >
            <ArrowRight size={90} className="text-inherit hover:text-inherit" />
            <span>Let&apos;s Collab</span>
          </button>
        </div>

        {/* Footer */}
        <div className="md:mt-52 mt-28">
          <Footer />
        </div>
      </div>

      {showModal && <ContactModal handleModal={handleShowModal} />}
    </>
  );
};

export default Projects;
