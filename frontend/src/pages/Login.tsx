import { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate()
  const handleLogin = async () => {
    const response = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
    const data: boolean = await response.json();
    if (data) {
      localStorage.setItem("username", username); 
      navigate("/home");          
    } else {
      alert("Username or password is incorrect.");
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