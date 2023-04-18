import React, { useEffect, useState } from "react";
import useDarkProvider from "../../hooks/useDarkTheme";
import { NavPrivate } from "../../components/Menu";
import { AsideNotification, AsidePrivate } from "../../components/asides";
import Cookies from "../../components/Modals/Cookies";
import { Tooltip } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { TourProvider } from "@reactour/tour";
import { steps } from "../../components/Tour/steps";
import UseTourOpen from "../../components/Tour/UseTourOpen";
import { Link } from "react-router-dom";

export const Private = ({ children }) => {
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

          {children}
        </div>
        <Cookies />
        <div className="fixed bottom-2 right-2">
          <Link to="/dashboard/calendar">
            <Tooltip content="Ver calendario">
              <button className="w-[40px] h-[40px] bg-indigo-900 flex justify-center items-center rounded-full shadow">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="w-[30px] text-white"
                />
              </button>
            </Tooltip>
          </Link>
        </div>
      </div>
      <UseTourOpen />
    </TourProvider>
  );
};
