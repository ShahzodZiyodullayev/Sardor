import { lazy } from "react";

// component import
// import AuthGuard from "../Auth/AuthGuard";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Loadable from "../components/Loadable";
import AuthGuard from "../Auth/AuthGuard";

const Models = Loadable(lazy(() => import("../pages/Models/Models")));
const SubModels = Loadable(lazy(() => import("../pages/SubModels/SubModels")));
const ModelsDetail = Loadable(
  lazy(() => import("../pages/ModelsDetail/ModelsDetail")),
);
const Admin = Loadable(lazy(() => import("../pages/Admin/Admin")));
const SignIn = Loadable(lazy(() => import("../pages/SignIn/SignIn")));
const SignUp = Loadable(lazy(() => import("../pages/SignUp/SignUp")));

const MainRoutes = [
  {
    element: (
      <AuthGuard>
        <MainLayout />
      </AuthGuard>
    ),
    children: [
      { path: "/", element: <Models /> },
      { path: "/models/:subModels", element: <SubModels /> },
      { path: "/models/modelsDetail/:detailId", element: <ModelsDetail /> },
      { path: "/admin", element: <Admin /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  // {
  //   element: (
  //     <AuthGuard>
  //       <MainLayout />
  //     </AuthGuard>
  //   ),
  //   children: [
  //     {
  //       path: "/",
  //       element: <MyBooks />,
  //     },
  //     {
  //       path: "search",
  //       element: <SearchBook />,
  //     },
  //   ],
  // },
  // {
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       path: "/signin",
  //       element: <SignIn />,
  //     },
  //     {
  //       path: "/signup",
  //       element: <SignUp />,
  //     },
  //   ],
  // },
  // { path: "/session/signin", element: <SignIn /> },
  // { path: "/session/register", element: <Registration /> },
  // { path: "/session/404", element: <NotFound /> },
  // { path: "/", element: <NotFound to="dashboard/default" /> },
  // { path: "*", element: <NotFound /> }
];

export default MainRoutes;
