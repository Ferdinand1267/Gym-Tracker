import { useState } from "react";
import './Progress.css';
import NavBar from '../NavBar'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

type Exercise = {
    name: string;
    weight: number;
    reps: number;
}

type Workout = {
    date: string;
    exercises: Exercise[]
}

function Progress() {
    const [workouts, setWorkouts] = useState([{date: "Jan 1st", exercises: [{name: "Bench Press", weight: 40, reps: 8},{name: "Bicep Curl", weight: 10, reps: 12}]}]);

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