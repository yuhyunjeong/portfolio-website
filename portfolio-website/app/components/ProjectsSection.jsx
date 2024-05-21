"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, isInView, useInView } from "framer-motion";

const PROJECT_DATA = [
  {
    id: 1,
    title: "Weather app",
    description: "weather application",
    image: "/images/projects/weatherapp_1.gif",
    skill: [
      "/images/skills/react_2.png",
      "/images/skills/javascript.png",
      "/images/skills/css.png",
      "/images/skills/html.png",
      "/images/skills/openweather.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuhyunjeong/weather-app",
    previewUrl: "https://yuhyunjeong.github.io/weather-app/",
  },
  {
    id: 2,
    title: "Todolist app",
    description: "Todo list application",
    image: "/images/projects/todolist_3.gif",
    skill: [
      "/images/skills/react_2.png",
      "/images/skills/javascript.png",
      "/images/skills/css.png",
      "/images/skills/html.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuhyunjeong/ToDo-list",
    previewUrl: "https://yuhyunjeong.github.io/ToDo-list/",
  },
  {
    id: 3,
    title: "Space shooting game",
    description: "mini space shooting game",
    image: "/images/projects/shooting_game.gif",
    skill: ["/images/skills/javascript.png", "/images/skills/html.png"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuhyunjeong/shooting-game",
    previewUrl: "https://stunning-fudge-a130bb.netlify.app",
  },
  {
    id: 4,
    title: "Calendar",
    description: "calendar",
    image: "/images/projects/calendar_2.gif",
    skill: [
      "/images/skills/javascript.png",
      "/images/skills/css.png",
      "/images/skills/html.png",
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuhyunjeong/calendar",
    previewUrl: "https://yuhyunjeong.github.io/calendar/",
  },
  {
    id: 5,
    title: "Netflix clone",
    description: "clone Netflix webpage",
    image: "/images/projects/netflix-clone.gif",
    skill: ["/images/skills/css.png", "/images/skills/html.png"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuhyunjeong/netflix-clone",
    previewUrl: "",
  },
];

const ProjectsSection = ({ imgUrl, title, description }) => {
  const ref = useRef(null);
  {
    /** It creates a reference for the section using useRef. */
  }
  const isInView = useInView(ref, { once: true });
  {
    /** It detects whether the section is in view using the useInView hook, ensuring it only triggers once. */
  }
  {
    /** Defines initial and animation states for the project cards using the cardVariants object.
     * The initial state is a translation of 50 along the y-axis and a transparency of 0.
     * The animated state means no y-axis translation and no transparency.
     */
  }
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="project" class="grid my-12 md:my-12 py-24 gap-4">
      <h2 className="text-center text-4xl font-bold text-white m-8">
        My Projects
      </h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {PROJECT_DATA.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            {/** Initially, the initial state is applied, and the animation is activated when the corresponding section is visible on the screen.
             *
             * transition property defines the duration and delay of the animation. a duration of 0.3 seconds is used and the delay is adjusted according to the index so that each project card appears sequentially.*/}
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              skill={project.skill}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
