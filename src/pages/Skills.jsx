import React from "react";
import Skill from "../components/Skill";

export default function Skills() {
    return (
        <>
            <div className="flex flex-row gap-2">
                <Skill 
                heading="Laravel" 
                description="I have an year of experience in laravel PHP.
                    Worked on developing rest api's and
                    build an admin panel for an ecommerce application,
                    a single page application using laravel to monitor and manage workflow.
                    Capable of implementing SOLID principles in laravel and develop a more robust and modular." 
                imageSource="https://ik.imagekit.io/laracasts/series/thumbnails/svg/laravel-explained.svg?tr=w-190"
                />
                <Skill 
                heading="Postgres" 
                description="I have an year of experience in postgres, with which
                    I can perform from the most basic to complex database queries.
                    Capable of working with multi-tenancy database, execute queries at an optimal time,
                    Capable of designing tables with appropriate constrains to ensure data consistency." 
                imageSource="https://ik.imagekit.io/laracasts/series/thumbnails/svg/mysql-database-design.svg?tr=w-190"
                />
            </div>
            <div className="flex flex-row gap-2">
                <Skill 
                heading="Java" 
                description="I have six months of experience in core java, I am familiar with the concepts of collections, 
                wrapper classes and multithreading, have built a console application for booking train tickets. 
                Capable of coding with SOLID principles in java. Capable implementing different data structures like stack, queue, 
                linkedlist, graph using java." 
                imageSource="https://ik.imagekit.io/laracasts/series/thumbnails/svg/advanced-eloquent.svg?tr=w-190"
                />
                <Skill 
                heading="HTML & Tailwind CSS" 
                description="Besides being a backend developer, I have quite a few knowledge in both HTML and CSS,
                    with which I can build a fairly clean and simple frontend,
                    I have an experience of building an admin panel for an ecommerce application with HTML and CSS as frontend
                    and laravel as backend. Besides that the portfolio your looking now is an example of my proficiency." 
                imageSource="https://ik.imagekit.io/laracasts/series/thumbnails/svg/modern-css-workflow.svg?tr=w-190"
                />
            </div>
            <div className="flex flex-row gap-2">
                <Skill 
                heading="React" 
                description="I'm a newbie to react, built a basic todo application which is used to manage your day to day tasks efficiently.
                    And one another thing would be this portfolio which uses react for its javascript functionalities.
                    I'm looking forward to learn and develop a highly modern, classic, super-fast and super catchy web app with react." 
                imageSource="https://ik.imagekit.io/laracasts/series/thumbnails/svg/beginning-react.svg?tr=w-190"
                />
            </div>
        </>
    );
}