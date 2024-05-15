"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Next.js</li>
        <li>Vanilla Javascript</li>
        <li>CSS</li>
        <li>HTML5</li>
        <li>Java</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          National Institute for Lifelong Education (NILE)
          <br></br>Bachelor of Engineering in Computer Engineering
        </li>
        <li>
          Korea University of Technology and Education
          <br></br>Electrical, Electronics and Communication Engineering
        </li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Responsive Web Design</li>
        <li>SQL Developer</li>
        <li>Computer specialist in Spreadsheet and database Level 1</li>
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
    <section className="text-black" id="about">
      <div className="md:grid md:grid-cols gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:t-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-bold mb-4">About me</h1>
          <p className="text-base lg:text-lg">
            Hello!👋 I'm a junior web developer with a focus on Vanilla
            JavaScript, CSS, and diving into React.
            <br></br>
            <br></br>I bring experience in full-stack development using
            JavaScript, HTML5, CSS, and Bootstrap on the frontend, and Java,
            Spring(boot) and SQL on the backend. My toolkit also includes Git,
            Linux and Docker.
            <br></br>
            <br></br>
            Passionate about elevating my skills as a Front-end developer, I've
            been actively working on various mini projects to enhance my
            frontend development skills. Through these projects, I've practiced
            API calls, implemented responsive web design principles, and
            utilized Figma for UI/UX design. My goal is to continue blending
            functionality with eye-catching UX design as I further develop my
            frontend expertise. 👩🏻‍💻
          </p>
          <div className="flex flex-row mt-8 text-lg">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              Certification
            </TabButton>
          </div>
          <div className="mt-8 text-white">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
