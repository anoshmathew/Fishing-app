import "./AdminPage.css";

import React, { useEffect,useState} from "react";
import AdminHome from "./AdminHome";
import { Link, useNavigate } from 'react-router-dom';
import Logout from "../../Logout";
import UserHome from "../UserPage/UserHome";
import SettingsPage from "../SettingsPage/SettingsPage";
import { render } from "@testing-library/react";


function AdminPage() {
  const navigate = useNavigate();
  const [currentPage , setCurrentPage] = useState(<div></div>);
  var loggedUser = JSON.parse(localStorage.getItem('data'));
 
    function logoutfunction(e) {
        e.preventDefault();
        localStorage.removeItem('data')
        loggedUser = '';
        console.log("LoggedOut");
        navigate('/');
    }


    // need to find a way to render
    function settings(e) {
      e.preventDefault();
      //currentPage = <SettingsPage/>;
      console.log("settings clicked");
    }
  
    
    useEffect(() => {
      if (loggedUser.user_type == 'admin') {
        setCurrentPage(<AdminHome/>)
        
      } else if(loggedUser.user_type == 'user') {
        setCurrentPage(<UserHome/>)
       
      }
      else{
        return(<div>Nothing Nothing</div>);
      }
      
    }, []);

  return (
    <div>
      <div className="admin_page_main">
        <div className="left_main">
          <div>Admin Profile</div>
          <div>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a onClick={()=>setCurrentPage(<SettingsPage setCurrentPage = {setCurrentPage}/>)}>Settings</a>
              </li>
              <li>
                <a onClick={(e)=>logoutfunction(e)}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right_main">
          <div>
            {currentPage}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
