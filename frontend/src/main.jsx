import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "/src/redux/store/store";
import "./main.scss";
import ErrorPage from "/src/pages/Errorpage";
import Home from "/src/pages/Home";
import Signin, {action as signinAction} from "/src/pages/Signin";
import User, {loader as userLoader} from "/src/pages/user";
import Root from "/src/routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Signin />,
        action: signinAction,
      },
      {
        path: "/user",
        element: <User />,
        loader: userLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
