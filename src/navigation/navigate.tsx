import { createBrowserRouter } from "react-router";
import App from "../App";
import { Dashboard } from "../components/organism/Dashboard";
import { Detail } from "../components/organism/Detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
     children: [
      { index: true, element: <Dashboard/> },
      { path: '/detail/:id', element: <Detail/>},
    ],
  },
]);