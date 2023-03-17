import { createBrowserRouter, Navigate } from "react-router-dom";

import {
  CadastroPage,
  HomePage,
  LoginPage,
  DashboardPage,
  ResetPassword,
} from "../pages";

import { MountLayout } from "./mountLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: MountLayout(<HomePage />),
  },
  {
    path: "/login",
    element: MountLayout(<LoginPage />),
  },
  {
    path: "/cadastro",
    element: MountLayout(<CadastroPage />),
  },
  {
    path: "/recuperar-senha",
    element: MountLayout(<ResetPassword />),
  },
  {
    path: "/dashboard",
    element: MountLayout(<DashboardPage />),
  },

  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
