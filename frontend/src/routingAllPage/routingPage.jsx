import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import LogIn from '../../src/authentication/user/login';
import ChangePassword from '../../src/authentication/changePassword';
import Nav from '../../src/headerNav/navigation';
const router = createBrowserRouter([
{
  path:"/",
  element:<Nav />,
  children:[
    {
    path: "/login",
    element: <LogIn />,
  },
      {
    path: "/password/change",
    element: <ChangePassword />,
  },
    ],
}
]);
export default router;
