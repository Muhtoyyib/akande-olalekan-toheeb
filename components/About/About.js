"use client";
import Image from "next/image";

import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import ContactModal from "../ContactModal/ContactModal";

import { ArrowRight, Aperture } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

const About = () => {
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
      <div className={`${showModal ? "blur-sm" : ""} overflow-hidden`}>
        <Navigation />
        {/* Scroll Container */}
        <div className="scroll-container" data-aos="zoom-in-up">
          <div>
            {" "}
            <h1 className="text-[65px] flex gap-10 items-center uppercase">
              Creating seamless user journeys{" "}
              <Aperture size={80} color="#9ae300" />
            </h1>
          </div>
          <div>
            {" "}
            <h1 className="text-[65px] flex gap-10 items-center uppercase">
              Creating seamless user journeys{" "}
              <Aperture size={80} color="#9ae300" />
            </h1>
          </div>
        </div>

        {/* Scroll Reverse */}
        <div className="scroll-container-reverse mt-32" data-aos="zoom-in-up">
          <div>
            {" "}
            <h1 className="text-[65px] uppercase flex gap-10 items-center">
              Creating seamless user journeys{" "}
              <Aperture size={80} color="#9ae300" />
            </h1>
          </div>
          <div>
            {" "}
            <h1 className="text-[65px] uppercase flex gap-10 items-center">
              Creating seamless user journeys{" "}
              <Aperture size={80} color="#9ae300" />
            </h1>
          </div>
        </div>

        {/* About  */}
        <div className="w-full px-10 flex flex-col justify-between md:flex-row space-x-16 mt-36">
          <div className="basis-[40%] space-y-5" data-aos="zoom-in-up">
            <Image src={`/Images/akande.svg`} width={400} height={400} alt="" />

            <div>
              <h2 className="text-2xl capitalize text-[var(--nav-hover)] pb-1">
                Akande olalekan toheeb
              </h2>
              <p className="text-[var(--faded-text)]">
                Front-end Dev | Technical Writer | Cloud Engineer
              </p>
            </div>
          </div>

          <div className="basis-[60%] space-y-10" data-aos="zoom-in-up">
            <h2 className="text-3xl leading-[40px]">
              As a frontend developer, technical writer, and AWS cloud engineer,
              I specialize in creating innovative digital solutions.
            </h2>

            <div className="text-[var(--faded-text)] space-y-3">
              <span>I am skilled in:</span>
              <ul className="space-y-3">
                <li>
                  - Frontend Development: HTML, CSS, Sass, TailwindCSS, -
                  JavaScript, React, Next.js
                </li>
                <li>
                  - Technical Writing and Documentation: Expertise in creating
                  clear and concise technical documentation.
                </li>
                <li>
                  - AWS Cloud Engineer: Proficient in AWS cloud services and
                  architecture
                </li>
              </ul>
            </div>

            <p className="text-[var(--faded-text)] ">
              I have a passion for transforming static designs into captivating
              interactive experiences. With my expertise in design principles
              and technical prowess, I deliver high-quality results that exceed
              expectations. I have a healthy obsession with design, development,
              and comprehensive documentation. I live it, breathe it, and
              completely embrace the ability to capture the essence of creative
              work.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 px-10 relative">
          <h2
            className="text-center pb-1 text-3xl border-b border-b-[#868e96] mb-14 w-[15%] mx-auto"
            data-aos="zoom-in-up"
          >
            Schedule a call
          </h2>

          <h3
            className="text-[85px] leading-[85px] w-[70%]"
            data-aos="zoom-in-up"
          >
            Turning Ideas into Reality with fine design and development. Got a
            project?
          </h3>

          <button
            data-aos="zoom-in-up"
            type="button"
            className="text-[var(--nav-color)] flex items-center text-[100px] gap-x-1 mt-10 mr-10 
        float-right hover:border-b-2 hover:border-b-[var(--foreground)] hover:text-[var(--foreground)]"
            onClick={handleShowModal}
          >
            <ArrowRight
              size={100}
              className="text-inherit hover:text-inherit"
            />
            <span>Let&apos;s Collab</span>
          </button>
        </div>

        <div className="mt-52">
          <Footer />
        </div>
      </div>

      {showModal && <ContactModal handleModal={handleShowModal} />}
    </>
  );
};

export default About;
