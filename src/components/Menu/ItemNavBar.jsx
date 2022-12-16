import React from "react";
import { Link } from "react-router-dom";

const ItemsNavBar=({nombreDelItem})=> {
    return(
        <div>
            <ul className="mt-2 border border-gray-100 rounded-lg md:text-md lg:text-xl md:mt-0 md:font-bold md:border-0">
                <li>
                    <Link to={nombreDelItem} className="p-3 rounded hover:underline text md:bg-transparent md:text-white md:p-0 md:hover:text-gray-800 md:mx-10 lg:mx-20" aria-current="page">{nombreDelItem}</Link>
                </li>
            </ul>
        </div>
    )
};
export default ItemsNavBar;