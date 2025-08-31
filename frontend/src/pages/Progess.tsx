import { useState } from "react";
import './Progress.css';
import NavBar from '../NavBar'

function Progress() {
    return (
    <div>
        <img src="/logo.png" alt="logo" className="logo" width="100"></img>
        <h1>
            <span>View Progress</span>
            <span></span>
        </h1>
        <NavBar/>
    </div>
    );
}

export default Progress;