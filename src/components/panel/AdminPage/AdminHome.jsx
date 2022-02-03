import React from 'react';

function AdminHome() {
   
    var loggedUser = JSON.parse(localStorage.getItem('data'));  
    if(loggedUser!=null){
        const usertype = loggedUser.user_type;
        
        console.log("From Local Storage");
        console.log('Logged User Type: ',usertype);
        if(usertype == 'admin'){
            
            return (
                <div>
                    Welcome Admin
                </div>
                );
        }
        else{
           
            return (
                <div>
                    Not Admin
                </div>
            );
        }

    }
    else{
        console.log('Local Storage is Empty');
        return (
            <div>
                    Not Logged In
            </div>
        );
    }
}


export default AdminHome;