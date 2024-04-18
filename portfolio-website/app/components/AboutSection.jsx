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
            Hi! 👋 I'm a junior web developer with a focus on Vanilla
            JavaScript, CSS, and I'm diving into React.js. I'm moving to
            Toronto, Canada 🇨🇦 with a 2-year work permit soon. <br></br>I have
            experience with full-stack development using JavaScript, HTML5, CSS,
            and Bootstrap on the frontend, and Java, Spring(boot), MySQL, and
            Oracle on the backend. My experience extends to Docker, Linux, and a
            bit of Matlab. <br></br>
            Currently passionate about elevating my skills as a Front-end
            developer, I aim to blend functionality with eye-catching UX design.
            👩🏻‍💻
          </p>
          <div className="flex flex-row mt-8">
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
