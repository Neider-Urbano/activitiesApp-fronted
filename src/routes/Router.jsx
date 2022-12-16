import React from "react";
import { Routes, Route } from "react-router-dom";
import { Page404 } from "../pages/error404/Page404";
import PageForgotPassword from "../pages/login/PageForgotPassword";
import PageLogin from "../pages/login/PageLogin";
import PagePublic from "../pages/public/PagePublic";
import PagePrivate from "../pages/private/PagePrivate";
import { PageRegister } from "../pages/register/PageRegister";


export const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<PagePublic />} />
      <Route path="/home" exact element={<PagePrivate/>} />  
      <Route path="/login" exact element={<PageLogin />} />
      <Route path="/register" exact element={<PageRegister />} />
      <Route path="/forgotpassword" exact element={<PageForgotPassword />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
