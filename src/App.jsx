import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/auth", element: <Login /> },
        { path: "/new-user", element: <Signup /> },
      ],
    },
    ,
  ]);

  return (
    <>
      <main className="bg-blue-200 min-h-screen">
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
