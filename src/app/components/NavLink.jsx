import React from "react";
import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href}>
      <span className="cursor-pointer hover:text-blue-400 transition-colors duration-200 font-medium">
        {title}
      </span>
    </Link>
  );
};

export default NavLink;
