import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/loader/Loader.jsx";
import Dashboard from "../containers/private/Dashboard.jsx";
import { calendarData } from "./calendarData.js";
import {
  PageLazyPublic,
  PageLazyPrivate,
  PageLazyLogin,
  PageLazyRegister,
  PageLazyPassword,
  PageLazy404,
} from "./index.js";
import MyCalendar from "../containers/private/MyCalendar.jsx";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <Suspense fallback={<Loader />}>
            <PageLazyPublic />
          </Suspense>
        }
      />

      <Route path="/dashboard">
        <Route path={"perfil"} element={<p>Perfil</p>} />
        <Route path={"favorites"} element={<p>favorites</p>} />
        <Route
          path={"calendar"}
          element={
            <Suspense fallback={<h1>Cargando Calendar</h1>}>
              <PageLazyPrivate>
                <MyCalendar data={calendarData} />
              </PageLazyPrivate>
            </Suspense>
          }
        />
        <Route
          index
          element={
            <Suspense fallback={<h1>Cargando home</h1>}>
              <PageLazyPrivate>
                <Dashboard />
              </PageLazyPrivate>
            </Suspense>
          }
        />
      </Route>

      <Route
        path="/login"
        exact
        element={
          <Suspense fallback={<h1>Cargando...</h1>}>
            <PageLazyLogin />
          </Suspense>
        }
      />
      <Route
        path="/register"
        exact
        element={
          <Suspense fallback={<h1>Cargando...</h1>}>
            <PageLazyRegister />
          </Suspense>
        }
      />
      <Route
        path="/forgotpassword"
        exact
        element={
          <Suspense fallback={<h1>Cargando...</h1>}>
            <PageLazyPassword />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<h1>Cargando...</h1>}>
            <PageLazy404 />
          </Suspense>
        }
      />
    </Routes>
  );
};
