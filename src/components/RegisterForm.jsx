import React, { useState } from "react";
import Axios from "axios";

function RegisterForm(){
    const url="http://work.phpwebsites.in/fishing/api/register"
    const [data,setData] = useState({
        mail: "",
        mobile: "",
        password: "",
        name: "",
        username: "",
        type: ""
    });
    function submit(e) {
        e.preventDefault();
        Axios.post(url,{email:data.mail,
            mobile:data.mobile,
            password:data.password,
            username:data.username,
            name:data.name,
            user_type:data.type
        })
        .then(res=>{
            console.log(res.data)
        })
    }
    function handle(e){
        const newdata = {...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }
    

return(
    <div>
      <h3>Register</h3>
        <form onSubmit={(e)=>submit(e)}>
        <label>Email
          <input onChange={(e)=>handle(e)} value={data.mail} id="mail" type="text" name="mail"/>
        </label>
        <br/>
        <label>Mobile
          <input onChange={(e)=>handle(e)} value={data.mobile} id="mobile" type="tel" name="mobile"/>
        </label>
        <br/>
        <label>Password
          <input onChange={(e)=>handle(e)} value={data.password} id="password" type="password" name="password"/>
        </label>
        <br/>
        <label>Username
          <input onChange={(e)=>handle(e)} value={data.username} id="username" type="text" name="username"/>
        </label>
        <br/>
        <label>Name
        <input onChange={(e)=>handle(e)} value={data.name} id="name" type="text" name="name"/>
        </label>
        <br/>
        <label>User Type
          <input onChange={(e)=>handle(e)} value={data.type} id="type" type="text" name="usertype"/>
        </label>
        <br/>
        <button>Register</button>
      </form>
    </div>
)
}
export default RegisterForm;