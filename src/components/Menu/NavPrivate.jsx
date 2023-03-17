import React from "react";
import logoApp from "../../assets/images/public/logoApp2.png";
import { OptionPage } from "../../components/optionPage/OptionPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import DropdownNotification from "../Dropdown/DropdownNotification";
import DropdownPerfil from "../Dropdown/DropdownPerfil";

const NavPrivate = ({ setShowSidebar, setIsOpenOp, statesOP, actionsOP }) => {
  const { darkTheme, textIdioma } = statesOP.optionPage;

  return (
    <nav className="fixed top-0 right-0 left-0 shadow-sm bg-white md:z-50">
      <div className="w-full flex justify-between min-w-[320px] px-[20px] py-[12px]">
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="inline-flex items-center p-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            onClick={() => setShowSidebar(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="flex items-center gap-1">
            <img
              src={logoApp}
              alt="logo activities app"
              className="h-[30px] w-[50px]"
            />
            <h1 className="hidden md:block">Activities app</h1>
          </div>
        </div>
        <div className="flex gap-1 ">
          <div className="flex items-center gap-3 ">
            <OptionPage
              darkTheme={darkTheme}
              textIdioma={textIdioma}
              actionsOP={actionsOP}
            />
            <DropdownNotification setIsOpenOp={setIsOpenOp} />
          </div>
          <div className="flex items-center ">
            <DropdownPerfil />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavPrivate;
