import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import LoginReg from './components/pages/auth/LoginReg';
import SendPasswordResetEmail from './components/pages/auth/SendPasswordResetEmail';
import ResetPassword from './components/pages/auth/ResetPassword';
import Dashboard from './components/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/',
        element:<Home/>
        // element:<SendPasswordResetEmail/>
      },
      {
        path:'dashboard/',
        element:<Dashboard/>
      },
      {
        path:'contacts/',
        element:<Contact/>
      },
      {
        path:'login/',
        element:<LoginReg/>
      },
      {
        path:'reset/',
        element:<ResetPassword/>
      },
      {
        path:'reset-email/',
        element:<SendPasswordResetEmail/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
