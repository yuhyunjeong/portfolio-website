import React from "react";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const ProjectCard = ({
  skill,
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div>
      <div
        className="h-96 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay absolute items-center justify-center top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full  border-[#ADB7BE] hover:border-teal-200 group/link"
          >
            {/*<CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />*/}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ">
              CODE
            </div>
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full  border-[#ADB7BE] hover:border-teal-200 group/link"
          >
            {/*<EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />*/}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ">
              DEMO
            </div>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl px-4 py-6">
        <h5 className="text-teal-100 text-xl !font-semibold mb-2">{title}</h5>
        {/*<p className="text-white mb-2">{description}</p>*/}
        <div className="relative w-10 h-10 ">
          {skill.map((item, index) => (
            <span key={index} className="mr-2">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
