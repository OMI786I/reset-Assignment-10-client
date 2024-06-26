import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root";
import Home from "./components/Home";
import AllTouristSpot from "./components/AllTouristSpot";
import AddTouristSpot from "./components/AddTouristSpot";
import MyList from "./components/MyList";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./components/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import Details from "./components/Details";
import DetailsForAddSpot from "./components/DetailsForAddSpot";
import UpdateTouristSpot from "./components/UpdateTouristSpot";
import ErrorPage from "./components/ErrorPage";
import CountrySpot from "./components/CountrySpot";
import DetailsCountrySpot from "./components/DetailsCountrySpot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/tourist-spot-section"),
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch("http://localhost:5000/addedSection"),
      },
      {
        path: "/addTouristSpot",
        element: (
          <PrivateRoute>
            <AddTouristSpot></AddTouristSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/addedSection"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/tourist-spot-section/"),
      },
      {
        path: "/detailsAddSpot/:id",
        element: (
          <PrivateRoute>
            <DetailsForAddSpot></DetailsForAddSpot>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/addedSection"),
      },
      {
        path: "/updateAddSpot/:id",
        element: (
          <PrivateRoute>
            <UpdateTouristSpot></UpdateTouristSpot>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addedSection/${params.id}`),
      },
      {
        path: "/country/:name",
        element: <CountrySpot></CountrySpot>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.name}`),
      },

      {
        path: "/detailsCountrySpot/:name/:id",
        element: <DetailsCountrySpot></DetailsCountrySpot>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/${params.name}/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
