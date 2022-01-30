import React,{useState} from 'react';
import Axios from "axios";


function LoginForm() {

    const url="http://work.phpwebsites.in/fishing/api/login"
    const [data,setData] = useState({  
        username: "",
        password: ""
        
    });

    function submit(e) {
        e.preventDefault();
        Axios.post(url,{
            username:data.username,
            password:data.password
        })
        .then(res=>{
            let info = res.data.data;
          //  let token =info.api_token ;
            localStorage.setItem('data',JSON.stringify(info))
            console.log(info)

            //var loggedUser = JSON.parse(localStorage.getItem('data'));  
           // console.log('loggedUser Token: ',loggedUser.api_token);
  
        })
    }
    function handle(e){
        const newdata = {...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    }



  return (
  <div>
      <h3>Login</h3>
      <form onSubmit={(e)=>submit(e)}>
          <label>Username: 
              <input type="text" id="username" onChange={(e)=>handle(e)} value={data.username}/>
          </label>
          <br/>
          <label>Password: 
              <input type="password" id="password" onChange={(e)=>handle(e)} value={data.password}/>
          </label>
          <br/>
          <button>Login</button>
      </form>
  </div>
  );
}
export default LoginForm;

