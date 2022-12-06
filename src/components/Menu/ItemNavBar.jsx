import React from "react";

const ItemsNavBar=({nombreDelItem})=> {
    return(
        <div>
            <ul class="inline mt-2 border border-gray-100 rounded-lg  md:mt-0 md:text-sm md:font-medium md:border-0">
                <li>
                    <a href={nombreDelItem} class="p-3 mx-10 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white " aria-current="page">{nombreDelItem}</a>
                </li>
            </ul>
        </div>
    )
};
export default ItemsNavBar;