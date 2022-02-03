import "./AdminPage.css";

import React, { useEffect,useState} from "react";
import AdminHome from "./AdminHome";
import {Routes, Route, Link, useNavigate } from 'react-router-dom';
import Logout from "../../Logout";
import UserHome from "../UserPage/UserHome";
import SettingsPage from "../SettingsPage/SettingsPage";

import EditUserData from "../../EditUserData";
import EditUserStatus from "../../EditUserStatus";
import ResetPassword from "../../ResetPassword";



function AdminPage() {
  
  const navigate = useNavigate();
  var loggedUser = JSON.parse(localStorage.getItem('data'));
 
    function logoutfunction(e) {
        e.preventDefault();
        localStorage.removeItem('data')
        loggedUser = '';
        console.log("LoggedOut");
        navigate('/');
    }
if(loggedUser != ''){


  return (
    <div>
      <div className="admin_page_main">
        <div className="left_main">
          <div>Admin Profile</div>
          <div>
            <ul>
              <li>
              <Link to="home">Home</Link>
              </li>
              <li>
                <Link to="settings">Settings</Link>
              </li>
              <li>
                <a onClick={(e)=>logoutfunction(e)}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right_main">
          <div>
          
            
            <Routes>
                <Route path="home" element={<AdminHome/>}/>
                <Route path="settings" element={<SettingsPage/>}/>
                <Route path="settings/edituserdata" element={<EditUserData/>}/>
                <Route path="settings/edituserstatus" element={<EditUserStatus/>}/>
                <Route path="settings/changepassword" element={<ResetPassword/>}/>
            </Routes>
            
          </div>
        </div>
      </div>
    </div>
  );
}
else{
  return(<div>
    <h3>Wrong Username or Password <span><Link to='/'>Retry</Link></span></h3>
  </div>)
}
}

export default AdminPage;
