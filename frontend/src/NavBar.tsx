import {NavLink} from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/workouts">Workouts</NavLink>
                </li>
                <li>
                    <NavLink to="/schedule">Schedule</NavLink>
                </li>
                <li>
                    <NavLink to="/progress">Progress</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;