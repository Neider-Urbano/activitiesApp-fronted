import React, { useEffect, useState } from "react";
import useDarkProvider from "../../hooks/useDarkTheme";
import { NavPrivate } from "../../components/Menu";
import { AsideNotification, AsidePrivate } from "../../components/asides";
import Cookies from "../../components/Modals/Cookies";
import { Tooltip } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { TourProvider } from "@reactour/tour";
import { steps } from "./steps.js";
import UseTourOpen from "./UseTourOpen";

export const Private = () => {
  const [statesOP, actionsOP, t] = useDarkProvider();
  const { darkTheme, textIdioma } = statesOP.optionPage;
  const [isOpenOp, setIsOpenOp] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <TourProvider steps={steps}>
      <div className={`${darkTheme ? "darkTheme" : "divLogin"} `}>
        <div
          className={`flex items-center min-w-[320px] min-h-[480px] flex-col pt-[55px] md:pl-[250px]`}
        >
          <NavPrivate
            statesOP={statesOP}
            actionsOP={actionsOP}
            setShowSidebar={setShowSidebar}
            setIsOpenOp={setIsOpenOp}
          />
          <AsidePrivate
            setShowSidebar={setShowSidebar}
            showSidebar={showSidebar}
          />
          <AsideNotification setIsOpenOp={setIsOpenOp} isOpenOp={isOpenOp} />
          <div className="p-[30px] w-full">
            <div className="w-full mb-8 ">
              <div className="w-full flex justify-between mb-4 first-step">
                <p>Agrega tus actividades</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-5 lg:justify-between">
                <div className="flex lg:w-[50%] ">
                  <div className="rounded border-gray-300 border-dashed border-2 h-24 w-full"></div>
                  <div className="text-center third-step">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                      Inn
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2"
                    >
                      Add
                    </button>
                  </div>
                </div>
                <div className="rounded border-gray-300 border-dashed border-2 h-24 w-full lg:w-[40%]"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex justify-between mb-4">
                <p>Recientes</p>
                <p>Ver todas</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full ">
                <div className="rounded border-gray-300 border-dashed border-2 h-24 second-step"></div>
                <div className="rounded border-gray-300 border-dashed border-2 h-24"></div>
                <div className="rounded border-gray-300 border-dashed border-2 h-24"></div>
                <div className="rounded border-gray-300 border-dashed border-2 h-24"></div>
              </div>
            </div>
          </div>
        </div>
        <Cookies />
        <div className="fixed bottom-2 right-2">
          <Tooltip content="Ver calendario">
            <button className="w-[40px] h-[40px] bg-indigo-900 flex justify-center items-center rounded-full shadow">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="w-[30px] text-white"
              />
            </button>
          </Tooltip>
        </div>
      </div>
      <UseTourOpen />
    </TourProvider>
  );
};
