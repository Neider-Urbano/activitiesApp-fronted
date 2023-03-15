import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRightToBracket,faUserPlus } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Buttons=()=> {
    return(
    <div className="flex flex-col items-center">
        
        <Link to={`/login`} className="w-[40%]">
          <button className="flex w-full items-center justify-center text-white bg-[#031E36] border-2 border-white py-1 focus:outline-none hover:bg-gray-900 hover:text-indigo-400 rounded text-base mt-3 md:mt-5"><FontAwesomeIcon icon={faArrowRightToBracket}/><p className="md:ml-3">Login</p></button>
        </Link>
        
        <Link to={`/register`} className="w-[40%]">
          <button className="flex w-full items-center justify-center text-white bg-[#031E36] border-2 py-1 focus:outline-none hover:bg-gray-900 hover:text-indigo-400 rounded text-base mt-3 md:mt-5"><FontAwesomeIcon icon={faUserPlus}/><p className="md:ml-3"> Register</p></button>
        </Link>
      
      </div>
    )
};
export default Buttons;