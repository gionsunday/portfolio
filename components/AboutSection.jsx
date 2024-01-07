"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>JavaScript</li>
        <li>HTML5/CSS3</li>
        <li>Bootstrap & Tailwind</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Nigeria, Nsukka</li>
        <li>U.B.S.S, Nsukka</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Developer @-Freelance.</li>
        <li>Fullstack Web Developer @-Muchency Photo Studio</li>
        <li>Electronics Engineer @-ARONE Energy LTD.</li>
        <li>Electronics Engineer @-BOT'Y LTD.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-1 xl:gap-16 sm:py-16 xl:px-16">
        <div className=" mt-4 lg:mt-0 place-self-center">
          <div
            className="rounded-full mt-4 bg-[#181818] w-[300px] h-[300px]
          lg:w-[350px] lg:h-[350px] relative"
          >
            <Image
              src="/67315872.png"
              alt="HeroImag"
              width={280}
              height={280}
              className="absolute rounded-full   transform -translate-x-1/2
            -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>

        {/* <Image src="/JOHN.jpg" alt="HeroImag" className="rounded-full" width={500} height={500} /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, MongoDB,
            jQuery, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
