"use client";

import { useState } from "react";

import Footer from "../Footer/Footer";
import ContactModal from "../ContactModal/ContactModal";
import ProjectCard from "../ProjectCards/ProjectCard";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const Blog = () => {
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
      img: `/Images/freecodecamp.webp`,
      title: "FreeCodeCamp",
      link: `https://www.freecodecamp.org/news/author/MuhToyyib/`,
      github: `https://www.freecodecamp.org/news/author/MuhToyyib/`,
    },
    {
      img: `/Images/hashnode.webp`,
      title: "Hashnode",
      link: `https://muhtoyyib.hashnode.dev/`,
      github: `https://muhtoyyib.hashnode.dev/`,
    },
    {
      img: `/Images/educative.webp`,
      title: "Educative aNSWERS",
      link: `https://www.educative.io/profile/view/6268415584501760?utm_campaign=educative_answers&utm_source=blog&utm_medium=social&utm_content=&utm_term=&eid=`,
      github: `https://www.educative.io/profile/view/6268415584501760?utm_campaign=educative_answers&utm_source=blog&utm_medium=social&utm_content=&utm_term=&eid=`,
    },
    {
      img: `/Images/devto.webp`,
      title: "Dev.to",
      link: `https://dev.to/muhtoyyib`,
      github: `https://dev.to/muhtoyyib`,
    },
    {
      img: `/Images/aws.webp`,
      title: "AWS Community",
      link: `https://community.aws/@muhtoyyib`,
      github: `https://community.aws/@muhtoyyib`,
    },
    {
      img: `/Images/others.webp`,
      title: "Freelance",
      link: `https://docs.google.com/document/d/1LpHpnmhqfJu70zTa9fpP7hZIBgQABnMv7n3zpnF6P5A/edit?usp=sharing`,
      github: `https://docs.google.com/document/d/1LpHpnmhqfJu70zTa9fpP7hZIBgQABnMv7n3zpnF6P5A/edit?usp=sharing`,
    },
  ];
  return (
    <>
      <div className={`${showModal ? "blur-sm" : ""} mt-36 `}>
        <h3
          className="md:text-[100px] px-10 md:leading-[100px] w-full text-[45px] md:text-left text-center"
          data-aos="zoom-in-up"
        >
          Coming soon...
        </h3>

        <p
          className="px-10 text-2xl tracking-wider mt-10"
          data-aos="zoom-in-up"
        >
          In the meantime, feel free to explore my articles on external blogs
          and enjoy...
        </p>

        {/* Project grid */}
        <div className="px-10 mt-20 grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-2 gap-x-7 gap-y-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              img={project.img}
              title={project.title}
              link={project.link}
              github={project.github}
              blog={true}
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

export default Blog;
