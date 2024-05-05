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
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuhyunjeong/weather-app",
    previewUrl: "https://yuhyunjeong.github.io/weather-app/",
  },
  {
    id: 2,
    title: "Todolist app",
    description: "Todo list application",
    image: "/images/projects/todolist_3.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuhyunjeong/ToDo-list",
    previewUrl: "https://yuhyunjeong.github.io/ToDo-list/",
  },
  {
    id: 3,
    title: "Space shooting game",
    description: "mini space shooting game",
    image: "/images/projects/shooting_game.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuhyunjeong/shooting-game",
    previewUrl: "https://stunning-fudge-a130bb.netlify.app",
  },
  {
    id: 4,
    title: "Calendar",
    description: "calendar",
    image: "/images/projects/calendar_2.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yuhyunjeong/calendar",
    previewUrl: "https://yuhyunjeong.github.io/calendar/",
  },
];

const ProjectsSection = ({ imgUrl, title, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="project">
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
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
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
