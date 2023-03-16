import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Cookies = () => {
  const [onClose, setOnClose] = useState(null);
  const appCookies = window.localStorage.getItem("appCookies");
  useEffect(() => {
    if (!appCookies) {
      setOnClose(false);
    } else {
      setOnClose(true);
    }
  }, []);
  const handleOnClose = (name) => {
    if (name === "close") {
      window.localStorage.setItem("appCookies", "refused");
    } else {
      window.localStorage.setItem("appCookies", "accept");
    }
    setOnClose(true);
  };

  return (
    !onClose && (
      <div className="fixed bottom-0 left-0 z-50 w-full shadow-lg">
        <div className="p-5 md:p-7 bg-indigo-800 dark:bg-gray-800 dark:border-gray-700">
          <div className="w-full text-right md:mb-5">
            <button
              onClick={() => {
                handleOnClose("close");
              }}
            >
              X
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-between w-full">
            <div>
              <FontAwesomeIcon icon={faCookieBite} fontSize={"40px"} />
            </div>
            <div className="text-center md:text-left">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Accept or manage cookies
              </h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Go to this step by step guideline process on how to certify for
                your weekly benefits.
              </p>
            </div>
            <div>
              <button
                type="button"
                className="mr-5 px-5 py-2.5 text-sm font-medium text-white focus:outline-none bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300    dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800"
                onClick={() => handleOnClose("accept")}
              >
                Accept
              </button>
              <button
                type="button"
                className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg  hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => setOnClose(true)}
              >
                Manage
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
  return onClose && <></>;
};

export default Cookies;
