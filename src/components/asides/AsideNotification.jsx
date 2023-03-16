import React from "react";

const AsideNotification = ({ isOpenOp, setIsOpenOp }) => {
  return (
    <div
      className={
        " fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpenOp
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-full max-w-[70%] md:max-w-[300px] right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpenOp ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-full pb-10 flex flex-col space-y-6 overflow-y-auto h-full">
          <header className="p-4 font-bold text-lg">Header</header>
        </article>
      </section>
      <section
        className="w-full h-full cursor-pointer"
        onClick={() => {
          setIsOpenOp(false);
        }}
      ></section>
    </div>
  );
};

export default AsideNotification;
