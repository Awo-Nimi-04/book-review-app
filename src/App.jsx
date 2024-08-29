import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserPlaces from "./pages/UserPlaces";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/auth", element: <Login /> },
        { path: "/new-user", element: <Signup /> },
        { path: "/:uid/places", element: <UserPlaces /> },
      ],
    },
    ,
  ]);

  return (
    <>
      <main className="bg-gradient-to-t from-cyan-500  min-h-screen">
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
