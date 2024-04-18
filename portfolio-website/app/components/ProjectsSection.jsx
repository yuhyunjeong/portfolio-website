import React from "react";
import ProjectCard from "./ProjectCard";

const PROJECT_DATA = [
  {
    id: 1,
    title: "Weather app",
    description: "weather application",
    image: "/images/projects/weatherapp_1.gif",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Todolist app",
    description: "Todo list application",
    image: "/images/projects/todolist_3.gif",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Space shooting game",
    description: "mini space shooting game",
    image: "/images/projects/shooting_game.gif",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Calendar",
    description: "calendar",
    image: "/images/projects/calendar_2.gif",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = ({ imgUrl, title, description }) => {
  return (
    <section id="project">
      <h2 className="text-center text-4xl font-bold text-white m-8">
        My Projects
      </h2>
      <div>
        {PROJECT_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
