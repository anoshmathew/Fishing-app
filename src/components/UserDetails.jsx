import React from 'react';
import Axios from "axios";

function UserDetails() {

    const url="http://work.phpwebsites.in/fishing/api/userdetail"
    //const [data,setData] = useState({  
    //    Token:"",
    //    id: ""
    //});
   // console.log(token)
    //console.log(uid)
    
    
    function submit(e) {
        e.preventDefault();
        var loggedUser = JSON.parse(localStorage.getItem('data'));  
    if(loggedUser!=null){
        const token = loggedUser.api_token;
        const uid= loggedUser.id;
        console.log("From Local Storage");
        console.log('loggedUser Token: ',token);
        console.log('loggedUser ID: ',uid);
        Axios.post(url,{user_id:uid},{headers:{'Token':token}
        })
        .then(res=>{
            console.log(res.data);
        })
    }
    else{
        console.log('Local Storage is Empty');
    }
        

    }

  return (
  <div>
      <h3>User Details</h3>
      <form onSubmit={(e)=>submit(e)}> 
          <br/>
          <button>Get User Details</button>
      </form>
  </div>
  );
}

export default UserDetails;