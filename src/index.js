import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {

    path: "/XTASY-2K24",
    element:<App/>,
  },
 
  
]);

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <RouterProvider router={router} />

   );
