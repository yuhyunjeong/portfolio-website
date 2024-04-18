import React from "react";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
      <div className="text-white">
        <h5 className="text-xl font-semibold">{title}</h5>
        <p className="text-slate-200">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
