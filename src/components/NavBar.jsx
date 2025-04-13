import React from "react";
import NavLink from "./NavLink";

export default function NavBar() {
    return (
        <nav className="flex text-nowrap gap-x-5 items-baseline bg-card rounded-xl py-3">
            <NavLink to="my-portfolio/projects" />
            <NavLink to="my-portfolio/skills" />
            <NavLink to="my-portfolio/education" />
        </nav>
    )
}