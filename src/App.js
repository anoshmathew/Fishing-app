import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import RegisterForm from './components/RegisterPage/RegisterForm'
import LoginForm from './components/LoginPage/LoginForm'
import UserDetails from './components/UserDetails';
import Logout from './components/Logout';
import ResetPassword from './components/ResetPassword';
import EditUserData from './components/EditUserData';
import EditUserStatus from './components/EditUserStatus';
import AdminPage from './components/panel/AdminPage/AdminPage';
import AdminHome from './components/panel/AdminPage/AdminHome';

function App() {
  
  return (
    <div className="App">
      
     
      
      <Routes>
      <Route path="/" element={<LoginForm/>} />
      <Route path="register" element={<RegisterForm/>} />
      <Route path="admin/*" element={<AdminPage/>} /> 
      <Route path="userdetails" element={<UserDetails/>} /> 
      </Routes>
      {/*<br/>
      <Logout/>
      <br/>
      <UserDetails/>
      <br/>
      <ResetPassword/>
      <br/>
      <EditUserData/>
      <br/>
      <EditUserStatus/>
      */}
    </div>
  )
}

export default App;
