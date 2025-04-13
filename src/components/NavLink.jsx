import React from "react";
import { Link } from "react-router-dom";

export default function NavLink(props) {

    function pathToTitle(path) {
        let formattedPath = path.replace(/^\//, '');
        
        return formattedPath.slice(13).toLowerCase();
    }

    return (
        <Link 
            to={props.to} 
            className="text-grey-600 text-sm px-3 py-1 uppercase rounded-xl text-center"
            >
                {pathToTitle(props.to)}
        </Link>
    );
}