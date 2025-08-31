import { useState } from "react";
import './Workouts.css';
import NavBar from '../NavBar'

function Workouts() {
    return (
    <div>
        <img src="/logo.png" alt="logo" className="logo" width="100"></img>
        <h1>Create Workout</h1>
        <NavBar/>
    </div>
    );
}

export default Workouts;