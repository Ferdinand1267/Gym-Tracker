import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    return (    
    <div>
        <img src="/logo.png" alt="logo" className="logo" width="100"></img>
        <h1>
            <span>Welcome Back, </span>
            <span></span>
        </h1>
    </div>
    );
}

export default Home;