import { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState(""); //stores username input
  const [password, setPassword] = useState(""); // stores password input
  const navigate = useNavigate()
  const handleLogin = () => {
    try { 
      const data = "Correct credentials" //placeholder
      localStorage.clear();
      localStorage.setItem("name",username);
      if (data === "Correct credentials") { 
        navigate('/home');
        return;
    } else {
        alert("Invalid credentials. Please try again."); 
    }
    }
    catch (error) {
      console.error("Login error:", error); //log and alert any errors
      alert("An error occurred. Please try again.");
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <h1>Login</h1>
      <p>Please enter your username and password:</p>
      <div className="box">
      <div className="input-group">
        <label className="text">Username: </label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input-field"/>
      </div>
      <div className="input-group">
        <label className="text" >Password: </label>
        <input type="password"value={password} onChange={(e) => setPassword(e.target.value)} className="input-field"/>
    </div>
      <div>
          <button className="small-button" onClick={handleLogin}>Submit</button>
      </div>
      <p></p>
      </div>
    </div>
  )
}
export default Login;