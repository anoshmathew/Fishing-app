import React from 'react';
import { Link } from 'react-router-dom';
import EditUserData from '../../EditUserData';

function SettingsPage() {
    console.log("settings Page clicked");
  return <div className='settingsMainDiv'>
      <div className='SettingsContent'>
            <ul>
                <li>
                    <Link to="edituserdata">Change User Details</Link>
                </li>
                <li>
                    <Link to='edituserstatus'>Change Status</Link>
                </li>
                <li>
                    <Link to='changepassword'>Change Password</Link>
                </li>
            </ul>
      </div>
  </div>;
}

export default SettingsPage;
