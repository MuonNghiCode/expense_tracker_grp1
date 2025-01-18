import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layouts/MainLayout/MainLayout";
import TransactionHistory from "./Pages/TransactionHistory/TransactionHistory";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import TransactionDetail from "./Pages/TransactionDetail/TransactionDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <TransactionHistory />,
      },
      {
        path: "/transaction/:id",
        element: <TransactionDetail />,
      },
      {
        path: "/Dashboard",
        element: <div>Dashboard</div>,
      },
      {
        path: "/Calendar",
        element: <div>Calendar</div>,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
