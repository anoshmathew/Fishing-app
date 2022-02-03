import React,{useState} from 'react';
import Axios from "axios";


function EditUserData() {
    const url="http://work.phpwebsites.in/fishing/api/edituser"
    const [data,setData] = useState({  
        User_ID:"",
        Email:"",
        Mobile:"",
        UserName:"",
        Name:""
    });
    
    function submit(e) {
        e.preventDefault();
        var loggedUser = JSON.parse(localStorage.getItem('data'));  
    if(loggedUser!=null){
        const token = loggedUser.api_token;
        console.log("From Local Storage");
        console.log('loggedUser Token: ',token);
        Axios.post(url,{user_id:data.User_ID, email:data.Email, mobile:data.Mobile, username:data.UserName, name:data.Name },{headers:{'Token':token}
        })
        .then(res=>{
            console.log(res.data);
        })
    }
    else{
        console.log('Local Storage is Empty');
    }
    }
    function handle(e){
        const newdata = {...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    
    }

  return (
  <div>
      <h3>Edit User Details</h3>
      <form onSubmit={(e)=>submit(e)}> 
          <br/>
          <label>User ID:
              <input type="text" id="User_ID" onChange={(e)=>handle(e)} value={data.User_ID}/>
          </label>
          <br/>
          <br/>
          <label>Email:
              <input type="text" id="Email" onChange={(e)=>handle(e)} value={data.Email}/>
          </label>
          <br/>
          <br/>
          <label>Mobile:
              <input type="text" id="Mobile" onChange={(e)=>handle(e)} value={data.Mobile}/>
          </label>
          <br/>
          <br/>
          <label>Username:
              <input type="text" id="UserName" onChange={(e)=>handle(e)} value={data.UserName}/>
          </label>
          <br/>
          <br/>
          <label>Name:
              <input type="text" id="Name" onChange={(e)=>handle(e)} value={data.Name}/>
          </label>
          <br/>
          <button>Submit Edit</button>
      </form>
  </div>
  );
}

export default EditUserData;