import React from "react";

export default function Skill(props) {
    return (
        <div className="flex bg-card gap-2 rounded-xl overflow-hidden w-1/2 card-animation">
            <div className="flex relative">
                <div className="p-5 flex flex-col gap-2">
                    <h2 className="text-start text-2xl font-semibold leading-tight lg:text-3xl">{props.heading}</h2>
                    <div className="leading-loose">
                        {props.description}
                    </div>
                </div>
                <div className="w-full h-full mr-16">
                    { props.heading == 'Java' && <img src={props.imageSource} alt="bot" className="w-80 absolute left-[60%]"  />}
                    { props.heading != 'Java' && <img src={props.imageSource} alt="bot" className="w-80 absolute"  />}
                </div>
            </div>
        </div>
    );
}