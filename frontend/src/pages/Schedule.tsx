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
    const [showForm, setShowForm] = useState(false)
    const date = new Date()
    const todayDate = date.getDate()
    const todayDay = date.getDay()
    const dateSunday = todayDate - todayDay
    const weekDay = ["S", "M", "T", "W", "T", "F", "S"]
    function getWeekDates() {
        const weekDates = []
        let current = new Date(date)  
        current.setDate(todayDate - todayDay)
        for (let i = 0; i < 7; i++) {
            weekDates.push(current.getDate())
            current.setDate(current.getDate() + 1)
        }
        return weekDates
    }
    const weekDates = getWeekDates()
    const [workouts, setWorkouts]  = useState<ScheduledWorkout[]>([{date: "5th Sept",workoutType: "Chest and Shoulders", time: "15:00"},{date: "6th Sept",workoutType: "Back and Biceps", time: "15:00"}])
    const [newWorkout, setNewWorkout] = useState({date: "", workoutType: "", time: ""})
    const ScheduleWorkout = () => {
        const entry: ScheduledWorkout = {
            date: newWorkout.date, workoutType: newWorkout.workoutType, time: newWorkout.time
        }
        setWorkouts([...workouts,entry])
        setNewWorkout({ date: "", workoutType: "", time: "" })
        setShowForm(false)
    }
    function removeWorkout(indexRemove: number){
        const currentWorkouts = [...workouts];
        currentWorkouts.splice(indexRemove,1);
        setWorkouts(currentWorkouts);
    }

    return (
    <div>
        <img src="/logo.png" alt="logo" className="logo" width="100"></img>
        <h1>View Schedule</h1>
        <div className="dayStrip">
            {weekDay.map((day, index) => (
                <span key={index} className="letter">{day}</span>
            ))}
        </div>
        <div className="dayStrip">
            {weekDates.map((day, index) => (
                <span key={index} className="letter">{day}</span>
            ))}
        </div>
        <hr></hr>
        <h2>Upcoming Workouts</h2>
        <div className="box">
            {workouts.map((workout,index) => (
                <div key={index}>
                    <span>{workout.date} - </span>
                    <span>{workout.workoutType}: </span>
                    <span>{workout.time} </span>
                    <span><button onClick={() => removeWorkout(index)}>Remove</button></span>
                </div>
            ))}
        </div>
        <button onClick={() => setShowForm(true)}>Add workout to Schedule</button>
        {showForm && (
            <div>
                <input type="text" placeholder="Date" value={newWorkout.date} onChange={(e) => setNewWorkout({...newWorkout, date: e.target.value})}/>
                <input type="text" placeholder="Workout Type" value={newWorkout.workoutType} onChange={(e) => setNewWorkout({...newWorkout, workoutType: (e.target.value)})}/>
                <input type="text" placeholder="Time" value={newWorkout.time} onChange={(e) => setNewWorkout({...newWorkout, time: (e.target.value)})}/>
                <button onClick={ScheduleWorkout}>Save Workout</button>
            </div>
        )}
        
        <NavBar/>
    </div>
    );
}

export default Schedule;