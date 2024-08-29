import React from "react";
import NavLink from "./NavLink";

export default function NavBar() {
    return (
        <nav className="flex text-nowrap gap-x-5 items-baseline bg-card rounded-xl py-3">
            <NavLink to="/projects" />
            <NavLink to="/skills" />
            <NavLink to="/education" />
        </nav>
    )
}