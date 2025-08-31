import { useState } from "react";
import './Schedule.css';
import NavBar from '../NavBar'

function Schedule() {
    return (
    <div>
        <img src="/logo.png" alt="logo" className="logo" width="100"></img>
        <h1>
            <span>View Schedule</span>
            <span></span>
        </h1>
        <NavBar/>
    </div>
    );
}

export default Schedule;