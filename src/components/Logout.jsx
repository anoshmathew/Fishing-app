import React from 'react';
import { useNavigate } from 'react-router-dom';


function Logout() {
    const navigate = useNavigate();
    function submit(e) {
        e.preventDefault();
        localStorage.removeItem('data')
        console.log("LoggedOut");
        navigate('/');
    }
  return (
  <div>
      <h3>Logout</h3>
      <button onClick={(e)=>submit(e)}>Logout</button>
  </div>
  );
}

export default Logout;
