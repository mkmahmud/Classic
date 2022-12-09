import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

const Router = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <div>Hello Clasic!</div>,
        },
      ]);

    return (
        <RouterProvider router={router} />
    );
};



export default Router;