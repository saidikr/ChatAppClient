import { Suspense, lazy, useState } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import LoadingScreen from "../components/Loader/LoadingScreen";
import AuthLayout from "../layouts/main";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  const [darkMode, setDarkMode] = useState(false);
  return useRoutes([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { element: <LoginPage />, path: "login" },
        { element: <RegisterPage />, path: "register" },
        { element: <ResetPasswordPage />, path: "reset-password" },
        { element: <NewPasswordPage />, path: "new-password" },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/app" replace />, index: true },
        {
          path: "app",
          element: <GeneralApp darkMode={darkMode} setDarkMode={setDarkMode} />,
        },
        {
          path: "setting",
          element: <Setting darkMode={darkMode} setDarkMode={setDarkMode} />,
        },
        {
          path: "group",
          element: <GroupPage darkMode={darkMode} setDarkMode={setDarkMode} />,
        },
        {
          path: "call",
          element: <CallPage darkMode={darkMode} setDarkMode={setDarkMode} />,
        },
        {
          path: "chats",
          element: <Chats darkMode={darkMode} setDarkMode={setDarkMode} />,
        },
        {
          path: "404",
          element: <Page404 darkMode={darkMode} setDarkMode={setDarkMode} />,
        },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);
const LoginPage = Loadable(lazy(() => import("../pages/auth/Login")));
const RegisterPage = Loadable(lazy(() => import("../pages/auth/Register")));
const ResetPasswordPage = Loadable(
  lazy(() => import("../pages/auth/ResetPassword"))
);
const NewPasswordPage = Loadable(
  lazy(() => import("../pages/auth/NewPassword"))
);
const Setting = Loadable(lazy(() => import("../pages/dashboard/Settings")));
const CallPage = Loadable(lazy(() => import("../pages/dashboard/Call")));
const Chats = Loadable(lazy(() => import("../pages/dashboard/Chats")));
const GroupPage = Loadable(lazy(() => import("../pages/dashboard/Group")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
