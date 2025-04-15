"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

import NavLink from "./NavLink";
import Menu from "./Menu";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import { supabase } from "../util/supabase/client";

const navLink = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Project",
    path: "#project",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [isHidden, setHidden] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  let lastScrollTop = useRef(0);

  const [logo, setLogo] = useState(null);

  useEffect(() => {
    async function fetchLogo() {
      const { data, error } = await supabase
        .from("logo")
        .select("*")
        .maybeSingle(); // fetch one row if exists, or return null

      console.log("logo:", data);

      console.log("logo.image_url:", logo?.image_url);

      if (error) {
        console.error("Supabase fetch error:", error.message);
      } else {
        setLogo(data);
      }
    }

    fetchLogo();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop.current) {
        // Scroll down
        setHidden(true);
        setScrolled(false);
      } else if (currentScrollTop === 0) {
        // At the top of the page
        setHidden(false);
        setScrolled(false);
      } else {
        // Scroll up
        setHidden(false);
        setScrolled(true);
      }
      lastScrollTop.current = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`${
        isHidden ? "-translate-y-full" : isScrolled ? "shadow-lg" : ""
      } fixed w-full top-0 left-0 z-50 transition-all duration-500 ease-in-out bg-[#d6b9d6]`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto py-6 lg:py-4 pl-7 pr-5">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-slate-200 font-semibold"
        >
          {logo?.image_url && (
            <div className="relative w-10 h-10">
              <Image src={logo.image_url} alt={logo.alt_text || "logo"} fill />
            </div>
          )}
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center  px-3 py-2 border-2 rounded border-white  text-white hover:text-teal-100 hover:border-teal-100"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center  px-3 py-2 border-2 rounded border-white  text-white hover:text-teal-100 hover:border-teal-100"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto p-5" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLink.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <Menu link={navLink} /> : null}
    </nav>
  );
};

export default Navbar;
