import {NavLink} from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return ( 
        <nav className="navbar">
                    <NavLink to="/home" className="navbutton">Home</NavLink>
                    <NavLink to="/workouts" className="navbutton">Workouts</NavLink>
                    <NavLink to="/schedule" className="navbutton">Schedule</NavLink>                
                    <NavLink to="/progress" className="navbutton">Progress</NavLink>               
                                  
        </nav>
    );
};

export default NavBar;