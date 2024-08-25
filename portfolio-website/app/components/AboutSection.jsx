"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-none pl-2 text-sm">
        <li>
          <div className="mb-2">
            <div className="socials flex gap-4">
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-28">
                <div className="socials flex gap-2 items-center"># React</div>
              </div>
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-44">
                <div className="socials flex gap-2 items-center">
                  # React Native
                </div>
              </div>
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-32">
                <div className="socials flex gap-2 items-center"># NEXT.js</div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="mb-2">
            <div className="socials flex gap-4">
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-40">
                <div className="socials flex gap-2 items-center">
                  # Javascript
                </div>
              </div>
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-24">
                <div className="socials flex gap-2 items-center"># CSS</div>
              </div>
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-28">
                <div className="socials flex gap-2 items-center"># HTML5</div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="mb-2">
            <div className="socials flex gap-4">
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-32">
                <div className="socials flex gap-2 items-center"># JQuery</div>
              </div>
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-36">
                <div className="socials flex gap-2 items-center">
                  # Bootstrap
                </div>
              </div>
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-38">
                <div className="socials flex gap-2 items-center"># Figma</div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="mb-2">
            <div className="socials flex gap-4">
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-24">
                <div className="socials flex gap-2 items-center"># Java</div>
              </div>
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-32">
                <div className="socials flex gap-2 items-center"># Spring</div>
              </div>
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-32">
                <div className="socials flex gap-2 items-center"># Python</div>
              </div>
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-24">
                <div className="socials flex gap-2 items-center"># SQL</div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="mb-2">
            <div className="socials flex gap-4">
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-24">
                <div className="socials flex gap-2 items-center"># Git</div>
              </div>
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-32">
                <div className="socials flex gap-2 items-center"># POSTMAN</div>
              </div>
              <div class="border-2 border-gray-300 rounded-full py-2 px-4 w-32">
                <div className="socials flex gap-2 items-center"># Docker</div>
              </div>
            </div>
          </div>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:t-0 text-left flex flex-col h-full max-w-3xl place-self-center">
          <h1 className="text-teal-100 text-2xl font-bold mb-4">About me</h1>
          <p className="text-base">
            Hello!👋 I'm a junior web developer from South Korea🇰🇷, <br></br>
            currently on a journey in Canada🇨🇦.
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
