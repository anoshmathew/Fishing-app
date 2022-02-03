import React from 'react';
import EditUserData from '../../EditUserData';

function SettingsPage({setCurrentPage}) {
  return <div className='settingsMainDiv'>
      <div className='SettingsContent'>
            <ul>
                <li>
                    <a onClick={()=>setCurrentPage(<EditUserData/>) }>Change User Details</a>
                </li>
                <li>
                    <a hreh=''>Change Status</a>
                </li>
                <li>
                    <a hreh=''>Change Password</a>
                </li>
            </ul>
      </div>
  </div>;
}

export default SettingsPage;
