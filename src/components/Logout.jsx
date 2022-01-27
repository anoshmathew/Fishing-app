import React from 'react';

function Logout() {
    function submit(e) {
        e.preventDefault();
        localStorage.removeItem('data')
        console.log("LoggedOut");
    }
  return (
  <div>
      <h3>Logout</h3>
      <button onClick={(e)=>submit(e)}>Logout</button>
  </div>
  );
}

export default Logout;
