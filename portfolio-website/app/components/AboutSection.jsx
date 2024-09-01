"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-none md:text-lg lg:text-xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <li className="customBullet">
          <div className="socials flex items-center">React</div>
        </li>
        <li className="customBullet">
          <div className="socials flex  items-center">NEXT.js</div>
        </li>
        <li className="customBullet">
          <div className="socials flex items-center">Javascript</div>
        </li>
        <li className="customBullet">
          <div className="socials flex items-center">CSS</div>
        </li>
        <li className="customBullet">
          <div className="socials flex items-center">HTML5</div>
        </li>

        <li className="customBullet">
          <div className="socials flex items-center">JQuery</div>
        </li>
        <li className="customBullet">
          <div className="socials flex items-center">Bootstrap</div>
        </li>
        <li className="customBullet">
          <div className="socials flex items-center">Figma</div>
        </li>

        <li className="customBullet">
          <div className="socials flex items-center">Java</div>
        </li>
        <li className="customBullet">
          <div className="socials flex items-center">Spring</div>
        </li>
        <li className="customBullet">
          <div className="socials flex  items-center">Python</div>
        </li>
        <li className="customBullet">
          <div className="socials flex  items-center">SQL</div>
        </li>

        <li className="customBullet">
          <div className="socials flex  items-center">POSTMAN</div>
        </li>
        <li className="customBullet">
          <div className="socials flex  items-center">Git</div>
        </li>
        <li className="customBullet">
          <div className="socials flex  items-center">Docker</div>
        </li>
        {/* <li>
          <div className="text-lg">
            <div className="socials flex gap-4">
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-28">
                <div className="socials flex gap-2 items-center"># Linux</div>
              </div>
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-28">
                <div className="socials flex gap-2 items-center"># MacOS</div>
              </div>
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-36">
                <div className="socials flex gap-2 items-center"># Windows</div>
              </div>
            </div>
          </div>
        </li>*/}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-lg">
        <li className="customBullet mb-4">
          <div className="mb-2 font-semibold">Computer Engineering</div>
          <div className="mb-2 text-sm">Bachelor / South Korea</div>
          <div className="text-slate-200">
            National Institute for Lifelong Education (NILE)
          </div>
        </li>
        <li className="customBullet">
          <div className="mb-2 font-semibold">
            Electrical, Electronics and Communication Engineering
          </div>
          <div className="mb-2 text-sm">2 years / South Korea</div>
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
        <li className="customBullet mb-2">
          Responsive Web Design
          <div className="text-slate-200">FreeCodeCamp</div>
        </li>
        <li className="customBullet mb-2">
          SQL Developer
          <div className="text-slate-200">Korea Data Agency</div>
        </li>
        <li className="customBullet">
          Computer specialist in Spreadsheet and database Level 1
          <div className="text-slate-200">
            Korea Chamber of Commerce and Industry
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Work",
    id: "work",
    content: (
      <ul className="list-disc pl-2 text-lg">
        <li className="customBullet mb-4">
          <div className="mb-2 font-semibold">Full-stack Developer</div>
          <div className="mb-2 text-sm">
            Nov. 2022 – Feb. 2023 / South Korea
          </div>
          <div className="text-slate-200">Miro IT</div>
        </li>
        <li className="customBullet">
          <div className="mb-2 font-semibold">Software Tester</div>
          <div className="mb-2 text-sm">
            Apr. 2023 – Jun. 2023 / South Korea
          </div>
          <div className="text-slate-200">Avikus</div>
        </li>
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
    <section className="text-white my-12 md:my-20 py-12 md:py-20" id="about">
      <div className="md:grid md:grid-cols gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:t-0 text-left flex flex-col h-full max-w-3xl place-self-center">
          <h1 className="text-teal-100 text-2xl md:text-3xl !font-bold mb-4">
            About me
          </h1>
          <p className="text-base md:text-lg">
            Hello! I&apos;m a junior web developer from South Korea 🇰🇷,{" "}
            <br></br>
            currently on a journey in Canada 🇨🇦.
            <br></br>
            <br></br>
            I have experience as a full-stack developer. <br />
            Passionate about elevating my skills as a frontend developer,
            <br />I am focusing on Vanilla JavaScript, CSS, and diving into
            React.
          </p>
          <div className="flex flex-row mt-8 text-lg">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skill
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("work")}
              active={tab === "work"}
            >
              Work
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
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
