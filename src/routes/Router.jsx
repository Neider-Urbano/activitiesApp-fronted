import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {PageLazyPublic,PageLazyPrivate,PageLazyLogin,PageLazyRegister,PageLazyPassword,PageLazy404} from "./index.js"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Suspense fallback={<h1>Cargando inicio</h1>}><PageLazyPublic/></Suspense>} />
      <Route path="/home" exact element={<Suspense fallback={<h1>Cargando home</h1>}><PageLazyPrivate/></Suspense>} />
      <Route path="/login" exact element={<Suspense fallback={<h1>Cargando...</h1>}><PageLazyLogin/></Suspense>} />
      <Route path="/register" exact element={<Suspense fallback={<h1>Cargando...</h1>}><PageLazyRegister/></Suspense>} />
      <Route path="/forgotpassword" exact element={<Suspense fallback={<h1>Cargando...</h1>}><PageLazyPassword /></Suspense>} />
      <Route path="*" element={<Suspense fallback={<h1>Cargando...</h1>}><PageLazy404 /></Suspense>} />
    </Routes>
  );
};
