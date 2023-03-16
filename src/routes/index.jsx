import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router({ darkMode, setDarkMode }) {
  return useRoutes([
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
          path: "conversation",
          element: (
            <Conversation darkMode={darkMode} setDarkMode={setDarkMode} />
          ),
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
const Conversation = Loadable(lazy(() => import("../components/Conversation")));
const Chats = Loadable(lazy(() => import("../pages/dashboard/Chats")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
