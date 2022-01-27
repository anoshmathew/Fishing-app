import './App.css';
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import UserDetails from './components/UserDetails';
import Logout from './components/Logout';

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

    </div>
  )
}

export default App;
