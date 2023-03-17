import { lazy } from "react";

const PageLazy404 = lazy(() => import("../pages/error404/Page404"));
const PageLazyPassword = lazy(() => import("../pages/auth/PageForgotPassword"));
const PageLazyLogin = lazy(() => import("../pages/auth/PageLogin"));
const PageLazyPublic = lazy(() => import("../pages/public/PagePublic"));
const PageLazyRegister = lazy(() => import("../pages/auth/PageRegister.jsx"));
const PageLazyPrivate = lazy(() => import("../pages/private/PagePrivate"));

export {
  PageLazy404,
  PageLazyPassword,
  PageLazyLogin,
  PageLazyPublic,
  PageLazyRegister,
  PageLazyPrivate,
};
