import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBellConcierge} from "@fortawesome/free-solid-svg-icons";
import { faAddressBook, faUser } from "@fortawesome/free-regular-svg-icons";

const Header=()=> {
  return(
    <header className="body-font bg-black text-white">
        <div className="flex md:flex-row py-2 md:py-4 items-center">
          <nav className="flex w-full max-w-7xl bottom-7 pl-3 md:pl-5 justify-start text-base whitespace-nowrap mr-[10px] text-[15.5px] md:text-[20px] cursor-pointer xl:mx-auto">
            <a href="#aboutUs2" className="mr-5 hover:text-blue-700"><FontAwesomeIcon icon={faUser}/><p className="hidden md:inline ml-2">About us</p></a>
            <a className="mr-5 hover:text-blue-700"><FontAwesomeIcon icon={faBellConcierge}/><p className="hidden md:inline ml-2">Service</p></a>
            <a href="#contact" className="mr-5 hover:text-blue-700"><FontAwesomeIcon icon={faAddressBook}/><p className="hidden md:inline ml-2">Contact</p></a>            
          </nav>
        </div>
    </header>
    )
};
export default Header;