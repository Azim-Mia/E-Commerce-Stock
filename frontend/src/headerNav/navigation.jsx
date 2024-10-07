import React from 'react';
import {
NavLink,
Outlet
} from "react-router-dom";
const Nav = ()=>{
  return (<>
  <div>
  <ul>
  <li><NavLink to="/Login">LogIn</NavLink></li>
 <li><NavLink to="/password/change">Change Password</NavLink></li>
 </ul>
  </div>
  <Outlet />
  </>)
}

export default Nav;
