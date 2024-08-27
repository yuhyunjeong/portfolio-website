import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-white sm:text-lg rounded md:p-0 hover:text-teal-100"
    >
      {title}
    </Link>
  );
};

export default NavLink;
