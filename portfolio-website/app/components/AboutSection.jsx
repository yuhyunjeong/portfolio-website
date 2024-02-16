"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>React</li>
        <li>Vanilla Javascript</li>
        <li>CSS</li>
        <li>HTML5</li>
        <li>Java</li>
        <li>Spring</li>
        <li>SQL</li>
        <li>Linux</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>
          National Institute for Lifelong Education (NILE), Bachelor of
          Engineering in Computer Engineering
        </li>
        <li>
          Korea University of Technology and Education, Electrical, Electronics
          and Communication Engineering
        </li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul>
        <li>Responsive Web Design</li>
        <li>SQL Developer</li>
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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <h1 className="text-4xl font-bold mb-4">About me</h1>
        <p className="text-base lg:text-lg">
          I have experience with full-stack development using React,
          JavaScript(JQuery), HTML5, CSS, Bootstrap on the frontend and Java,
          Spring(boot), MySQL, Oracle on the backend. Other skills include
          experience with Docker, Linux and a little bit of Matlab. I can be a
          good front-end developer who can consider both users and back-end
          developers.
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
        <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
      </div>
    </section>
  );
};

export default AboutSection;
