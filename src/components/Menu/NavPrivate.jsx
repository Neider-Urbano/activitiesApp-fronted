import React from "react";
import logoApp from "../../assets/images/public/logoApp2.png";
import imgUser from "../../assets/images/public/neider.png";
import { OptionPage } from "../../components/optionPage/OptionPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faCookie, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "flowbite-react";

const NavPrivate = ({ setShowSidebar, setIsOpenOp, statesOP, actionsOP }) => {
  const { darkTheme, textIdioma } = statesOP.optionPage;

  return (
    <nav className="fixed top-0 right-0 left-0 shadow-sm bg-white md:z-50">
      <div className="w-full flex justify-between min-w-[320px] px-[20px] py-[12px]">
        <div className="flex items-center gap-1 ">
          <button
            type="button"
            className="inline-flex items-center p-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            onClick={() => setShowSidebar(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <img
            src={logoApp}
            alt="logo activities app"
            className="h-[30px] w-[50px]"
          />
          <h1 className="hidden md:block">Activities app</h1>
        </div>
        <div className="flex gap-1 ">
          <div className="flex items-center gap-3 ">
            <OptionPage
              darkTheme={darkTheme}
              textIdioma={textIdioma}
              actionsOP={actionsOP}
            />
            <Dropdown
              label={
                <div
                  className="h-[31px] inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none "
                  type="button"
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                  </svg>
                  <div className="relative flex">
                    <div className="relative inline-flex w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-2 right-3 "></div>
                  </div>
                </div>
              }
              placement="bottom"
              arrowIcon={false}
              inline="true"
              pill="true"
            >
              <Dropdown.Header>
                <span className="block text-md">Notifications</span>
              </Dropdown.Header>
              <Dropdown.Item className="flex gap-2 text-md">
                <div className="flex px-4 py-3 hover:bg-gray-100 ">
                  <div className="flex-shrink-0">
                    <img
                      className="rounded-full w-11 h-11"
                      src={imgUser}
                      alt="img user"
                    />
                    <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border border-white rounded-full ">
                      <svg
                        className="w-3 h-3 text-white"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-[120px] md:w-[200px] pl-3">
                    <div className="text-gray-500 text-sm mb-1.5 ">
                      <span className="font-semibold text-gray-900 ">
                        Robert Brown
                      </span>
                      posted a new video: Glassmorphism
                    </div>
                    <div className="text-xs text-blue-600 ">3 hours ago</div>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                className="flex gap-2 text-md"
                onClick={() => setIsOpenOp(true)}
              >
                <div className="inline-flex items-center ">
                  <svg
                    className="w-4 h-4 mr-2 text-gray-500 "
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  View all
                </div>
              </Dropdown.Item>
            </Dropdown>
          </div>
          <div className="flex items-center ">
            <Dropdown
              label={
                <div className="flex items-center">
                  <div className="overflow-hidden w-[31px] h-[31px] p-1 rounded-full ring-2 ring-primary md:mr-2">
                    <img className="w-full" src={imgUser} alt="img user" />
                  </div>
                  <p className="hidden md:block">Bonnie Green</p>
                </div>
              }
              className="w-[240px]"
              placement="bottom-start"
              inline="true"
              pill="true"
            >
              <Dropdown.Header>
                <span className="block text-md">Bonnie Green</span>
                <span className="block text-md font-medium truncate">
                  bonnie@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item className="flex gap-2 text-md">
                <FontAwesomeIcon icon={faCircleUser} />
                <p>perfil</p>
              </Dropdown.Item>
              <Dropdown.Item className="flex gap-2 text-md">
                <FontAwesomeIcon icon={faCookie} />
                <p>preferencias de cookies</p>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className="flex gap-2 text-md">
                <FontAwesomeIcon icon={faPowerOff} />
                <p>cerrar sesión</p>
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavPrivate;
