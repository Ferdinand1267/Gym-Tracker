import './Home.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar'

function Home() {
    const username = localStorage.getItem("name");
    
    return (    
    <div className="container">
        <img src="/logo.png" alt="logo" className="logo" width="100"></img>
        <h1>
            <span>Welcome Back, </span>
            <span>{username || "Guest"}</span>
        </h1>
         <div className="boxes">   
            <div className="box">
                <h3>Summary</h3>
            </div>
            <div className="box">
                <h3>Schedule</h3>
            </div>
        </div>
        <button>Add Workout</button>
        <NavBar/>
    </div>
    );
}

export default Home;