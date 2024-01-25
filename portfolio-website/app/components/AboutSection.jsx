"use client";
import React, { useTransition, useState } from "react";

const AboutSection = () => {
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
          <span className="mr-3 font-semibold text-slate-200 hover:text-white border-b">
            Skills
          </span>
          <span>Education</span>
          <span>Certification</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
