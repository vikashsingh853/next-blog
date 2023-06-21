import Link from "next/link";
import React from "react";
import DarkModeToggler from "../darkmodetoggler/DarkModeToggler";

interface NavLinks {
  title: string;
  id: number;
  url: string;
}
const links: NavLinks[] = [
  {
    title: "Home",
    url: "/",
    id: 1,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    id: 2,
  },
  {
    title: "blog",
    url: "/blog",
    id: 2,
  },
  {
    title: "Contacts Us",
    url: "/contact",
    id: 3,
  },
  {
    title: "Portfolio",
    url: "/portfolio",
    id: 4,
  },
  {
    title: "About",
    url: "/about",
    id: 5,
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 bold text-2xl ">
      <Link href={"/"}>Blog</Link>
      <div className="flex gap-4 semibold text-base">
        <DarkModeToggler />
        {links.map((link: NavLinks) => {
          return (
            <Link href={link.url} key={link.id}>
              {link.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
