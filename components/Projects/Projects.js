"use client";

import { useState } from "react";

import Navigation from "../Navigation/Navigation";
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

  return (
    <>
      <Navigation />

      <div className={`${showModal ? "blur-sm" : ""} mt-36 px-10`}>
        <h3
          className="md:text-[100px] md:leading-[100px] w-full text-[50px] md:text-left text-center"
          data-aos="zoom-in-up"
        >
          Selected Projects <br />
          <span className="pt-5 block">(2022 - 2024)</span>
        </h3>

        {/* Project grid */}
        <div className="mt-20 grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-2 gap-x-7 gap-y-12">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

        {/* CTA */}
        <div className="mt-24 px-10 relative">
          <h2
            className="text-center pb-1 text-3xl border-b border-b-[#868e96] mb-14 md:w-[15%] w-full mx-auto"
            data-aos="zoom-in-up"
          >
            Schedule a call
          </h2>

          <h3
            className="md:text-[85px] md:leading-[85px] text-[45px] md:w-[70%] w-full"
            data-aos="zoom-in-up"
          >
            Turning Ideas into Reality with fine design and development. Got a
            project?
          </h3>

          <button
            data-aos="zoom-in-up"
            type="button"
            className="text-[var(--nav-color)] flex items-center md:text-[100px] text-[40px] md:gap-x-1 gap-x-2 md:mt-10 md:mr-10 mt-12
        md:float-right hover:border-b-2 hover:border-b-[var(--foreground)] hover:text-[var(--foreground)]"
            onClick={handleShowModal}
          >
            <ArrowRight
              size={100}
              className="text-inherit hover:text-inherit"
            />
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
