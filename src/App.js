import './App.css';
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import UserDetails from './components/UserDetails';
import Logout from './components/Logout';
import ResetPassword from './components/ResetPassword';
import EditUserData from './components/EditUserData';
import EditUserStatus from './components/EditUserStatus';

function App() {
  
  return (
    <div className="App">
      <RegisterForm/>
      <br/>
      <LoginForm/>
      <br/>
      <Logout/>
      <br/>
      <UserDetails/>
      <br/>
      <ResetPassword/>
      <br/>
      <EditUserData/>
      <br/>
      <EditUserStatus/>
    </div>
  )
}

export default App;
