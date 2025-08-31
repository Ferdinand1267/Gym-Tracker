import { useState } from "react";
import './Schedule.css';
import NavBar from '../NavBar'
import { Info, DateTime } from "luxon"

type ScheduledWorkout = {
    date: string;
    workoutType: string;
    time: string;
}


function Schedule() {
    const date = new Date()
    const todayDate = date.getDate()
    const todayDay = date.getDay()
    const dateSunday = todayDate - todayDay

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