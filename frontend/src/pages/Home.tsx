import './Home.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar'
import { useState, useEffect } from "react";
import { SearchBar } from "../components/SearchBar.tsx"

type Exercise = {name: string; weight: number; reps: number}
type Workout = {date: string; exercises: Exercise[]}

function Home() {
    const username = localStorage.getItem("name");

    const [workouts, setWorkouts] = useState<any[]>([/*{date: "Jan 1st", exercises: [{name: "Bench Press", weight: 40, reps: 8},{name: "Bicep Curl", weight: 10, reps: 12}]}*/]);
    const [showForm, setShowForm] = useState(false)
    const [newWorkout, setNewWorkout] = useState<Workout>({date: "", exercises: []})
    const [newExercise, setNewExercise] = useState<Exercise>({name: "", weight: 0, reps: 0})

    useEffect(() => {
        fetch("http://localhost:8080/api/workouts")
          .then(response => response.json())
          .then(data => setWorkouts(data))
      }, [])

    const handleUpdate = () => {
        //this is for frontend testing only
        /*const entry = {
            date: newWorkout.date, exercises: [newExercise]
        }
        setWorkouts([...workouts, entry])
        setNewWorkout({date: "", exercises: []})
        setNewExercise({name: "",weight: 0, reps: 0})
        setShowForm(false)*/
        const workoutToSave = {
            date: newWorkout.date,
            exercises: [newExercise]}   
        fetch("http://localhost:8080/api/workouts",{
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(workoutToSave)
        })
        .then(response => response.json())
        .then(savedWorkout => {
            setWorkouts([...workouts, savedWorkout])
            setShowForm(false)
        })
    }
    
    return (    
    <div className="container">
        <img src="/logo.png" alt="logo" className="logo" width="100"></img>
        <h1>
            <span>Welcome Back, </span>
            <span>{username || "Guest"}</span>
        </h1>
         <div className="boxes">   
            <div className="box">
                <h3>Summary</h3>
            </div>
            <div className="box">
                <h3>Schedule</h3>
            </div>
        </div>
        <button onClick={() => setShowForm(true)}>Add Workout</button>
        {showForm && (
            <div>
                <input type="text" placeholder="Date" value={newWorkout.date} onChange={(e) => setNewWorkout({...newWorkout, date: e.target.value})}/>
                <SearchBar value={newExercise.name} onSearch={(val) => setNewExercise({...newExercise, name: val})}/>
                <input type="number" placeholder="Weight" value={newExercise.weight} onChange={(e) => setNewExercise({...newExercise, weight: Number(e.target.value)})}/>
                <input type="number" placeholder="Reps" value={newExercise.reps} onChange={(e) => setNewExercise({...newExercise, reps: Number(e.target.value)})}/>
                <button onClick={handleUpdate}>Save Workout</button>
            </div>
        )}
        <NavBar/>
    </div>
    );
}

export default Home;