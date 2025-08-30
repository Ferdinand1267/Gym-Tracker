import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const username = localStorage.getItem("name");
    
    return (    
    <div>
        <img src="/logo.png" alt="logo" className="logo" width="100"></img>
        <h1>
            <span>Welcome Back, </span>
            <span>{username || "Guest"}</span>
        </h1>
    </div>
    );
}

export default Home;