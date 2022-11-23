import React from "react";


const ItemsNavBar=({nombreDelItem})=> {
    return(
        <div>
                <ul class="flex flex-col p-4 mt-4 mx-5 border border-gray-100 rounded-lg bg-gray-50 md:flex-row  md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">{nombreDelItem}</a>
                    </li>
                </ul>
        </div>
    )
};

export default ItemsNavBar;