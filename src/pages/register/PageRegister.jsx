import React from "react";
import imgRegister from "../../assets/images/register3.png";
import Register from "../../containers/register/Register";

const PageRegister = () => {
  return (
    <main className="antialiased bg-slate-200 flex h-screen">
      <div className=" bg-white p-16 md:p-8 lg:p-20 w-screen md:w-auto lg:w-2/5">
        <h1 className="text-xl font-medium text-slate-900">Sing up</h1>
        <Register />
      </div>
      <div className="w-3/5 hidden md:flex justify-center items-center">
        <img src={imgRegister} alt="imagen principal de pagina de registro" />
      </div>
    </main>
  );
};
export default PageRegister;