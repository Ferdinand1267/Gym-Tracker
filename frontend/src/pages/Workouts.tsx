import { useState } from "react";
import './Workouts.css';
import NavBar from '../NavBar'
import { SearchBar } from "../components/SearchBar.tsx"

type Exercise = {
    name: string;
    weight: number;
    reps: number;
}

type Workout = {
    date: string;
    exercises: Exercise[]
}

function Workouts() {
    const [workouts, setWorkouts] = useState([{date: "Jan 1st", exercises: [{name: "Bench Press", weight: 40, reps: 8},{name: "Bicep Curl", weight: 10, reps: 12}]}]);
    const [showForm, setShowForm] = useState(false)
    const [newWorkout, setNewWorkout] = useState<Workout>({date: "", exercises: []})
    const [newExercise, setNewExercise] = useState<Exercise>({name: "", weight: 0, reps: 0})

    const handleUpdate = () => {
        const entry = {
            date: newWorkout.date, exercises: [newExercise]
        }
        setWorkouts([...workouts, entry])
        setNewWorkout({date: "", exercises: []})
        setNewExercise({name: "",weight: 0, reps: 0})
        setShowForm(false)
    }

    return (
    <div className="container">
        <img src="/logo.png" alt="logo" className="logo" width="100"></img>
        <h1>Create and View Workout</h1>
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
        <div className="displaybox">
            {workouts.map((workout,index) => (  
                <div key={index}>
                    <h3>{workout.date}</h3>
                    <ul>
                        {workout.exercises.map((exercise,index) => (
                            <li key={index}>{exercise.name} - weight: {exercise.weight} * reps: {exercise.reps}</li>
                        ))}
                    </ul>
                </div>  
                ))}
        </div >
        <NavBar/>
    </div>
    );
}

export default Workouts;