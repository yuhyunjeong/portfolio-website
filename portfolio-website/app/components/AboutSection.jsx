"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-lg">
        <li>
          <div className="text-lg">
            <div className="socials flex gap-4">
              <div className="relative w-14 h-14">
                <Image
                  src="/images/skills/react_2.png"
                  alt="react icon"
                  layout="fill"
                />
              </div>
              <div className="relative w-14 h-14">
                <Image
                  src="/images/skills/javascript.png"
                  alt="javascript icon"
                  layout="fill"
                />
              </div>
              <div className="relative w-14 h-14">
                <Image
                  src="/images/skills/css.png"
                  alt="css icon"
                  layout="fill"
                />
              </div>
              <div className="relative w-14 h-14">
                <Image
                  src="/images/skills/html.png"
                  alt="html icon"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="text-lg">
            <div>Javascript CSS HTML5 SQL Java Python</div>
          </div>
        </li>
        <li>
          <div className="text-lg">
            <div className="socials flex gap-4">
              <div className="relative w-14 h-14">
                <Image
                  src="/images/skills/jquery.png"
                  alt="jquery icon"
                  layout="fill"
                />
              </div>
              <div className="relative w-14 h-14">
                <Image
                  src="/images/skills/java.png"
                  alt="java icon"
                  layout="fill"
                />
              </div>
              <div className="relative w-14 h-14">
                <Image
                  src="/images/skills/bootstrap.png"
                  alt="bootstrap icon"
                  layout="fill"
                />
              </div>
            </div>
            <div>React Next.js JQuery Bootstrap Spring(Boot) JUnit</div>
          </div>
        </li>
        <li>
          <div className="text-lg">
            <div className="socials flex gap-4">
              <div className="relative w-14 h-14">
                <Image
                  src="/images/skills/git.png"
                  alt="git icon"
                  layout="fill"
                />
              </div>
              <div className="relative w-14 h-14">
                <Image
                  src="/images/skills/docker.png"
                  alt="docker icon"
                  layout="fill"
                />
              </div>
              <div className="relative w-14 h-14">
                <Image
                  src="/images/skills/linux.png"
                  alt="linux icon"
                  layout="fill"
                />
              </div>
              <div className="relative w-14 h-14">
                <Image
                  src="/images/skills/mac.png"
                  alt="mac icon"
                  layout="fill"
                />
              </div>
              <div className="relative w-14 h-14">
                <Image
                  src="/images/skills/windows.png"
                  alt="windows icon"
                  layout="fill"
                />
              </div>
              <div className="relative w-14 h-14">
                <Image
                  src="/images/skills/figma.png"
                  alt="figma icon"
                  layout="fill"
                />
              </div>
            </div>
            <div>
              Git JSON Docker Linux MacOS Windows VS Code Eclipse Intelli J
              Figma
            </div>
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-lg">
        <li>
          <div>Bachelor of Engineering in Computer Engineering</div>
          <div className="text-slate-200">
            National Institute for Lifelong Education (NILE)
          </div>
        </li>
        <li>
          <div>Electrical, Electronics and Communication Engineering</div>
          <div className="text-slate-200">
            Korea University of Technology and Education
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2 text-lg">
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
