import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import {PageLazyPublic,PageLazyPrivate,PageLazyLogin,PageLazyRegister,PageLazyPassword,PageLazy404} from "./index.js"
import Loader from "../components/loader/Loader.jsx"



export const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Suspense fallback={<Loader/>}><PageLazyPublic/></Suspense>} />
      <Route path="/home" exact element={<Suspense fallback={<Loader/>}><PageLazyPrivate/></Suspense>} />
      <Route path="/login" exact element={<Suspense fallback={<Loader/>}><PageLazyLogin/></Suspense>} />
      <Route path="/register" exact element={<Suspense fallback={<Loader/>}><PageLazyRegister/></Suspense>} />
      <Route path="/forgotpassword" exact element={<Suspense fallback={<Loader/>}><PageLazyPassword /></Suspense>} />
      <Route path="*" element={<Suspense fallback={<Loader/>}><PageLazy404 /></Suspense>} />
    </Routes>
  )
};
