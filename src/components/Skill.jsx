import React from "react";

export default function Skill(props) {
    return (
        <div className="flex bg-card gap-2 rounded-xl overflow-hidden w-1/2 card-animation">
            <div className="flex flex-col p-2 h-fit">
            <h2 className="text-center text-2xl font-semibold leading-tight lg:text-3xl">{props.heading}</h2>
            <div className="p-3 flex justify-center items-center leading-loose w-fit">
                {props.description}
            </div>
            <div className="w-full h-64 rounded-xl relative">
                <img src={props.imageSource} alt="bot" className="w-full absolute"/>
            </div>
            </div>
        </div>
    );
}