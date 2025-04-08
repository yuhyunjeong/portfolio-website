"use client";
import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, isInView, useInView } from "framer-motion";
import { supabase } from "../util/supabase/client";

const ProjectsSection = ({ imgUrl, title, description }) => {
  {
    /** It creates a reference for the section using useRef. */
  }
  const ref = useRef(null);

  {
    /** It detects whether the section is in view using the useInView hook, ensuring it only triggers once. */
  }
  const isInView = useInView(ref, { once: true });

  const [projects, setProjects] = useState([]);

  {
    /* Data from database */
  }
  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("order", { ascending: true });

      console.log("Fetched Data:", data);

      if (error) {
        console.error("Supabase fetch error:", error.message);
      } else {
        setProjects(data);
      }
    }

    fetchProjects();
  }, []);

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
    <section
      id="project"
      className="grid my-12 md:my-20 py-12 md:py-20 md:py- gap-4"
    >
      <h2 className="text-center text-4xl !font-bold text-teal-100 m-8">
        Projects
      </h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.li
            key={project.id}
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
              imgUrl={project.image_url}
              skill={project.tech_stack}
              gitUrl={project.repo_url}
              previewUrl={project.project_url}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
