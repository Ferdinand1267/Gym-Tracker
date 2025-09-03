import { useState, useEffect } from "react";
import './Progress.css';
import NavBar from '../NavBar'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Label } from 'recharts'

type Exercise = {name: string; weight: number; reps: number;}
type Workout = { date: string; exercises: Exercise[]}

function Progress() {
    const [workouts, setWorkouts] = useState<Workout[]>([])
    useEffect(() => {
        fetch("http://localhost:8080/api/workouts")
          .then(response => response.json())
          .then(data => setWorkouts(data))
      }, [])
    /*const sampleWorkouts: Workout[] = [
        { date: "2025-08-20", exercises: [
            { name: "Bench Press", weight: 40, reps: 10 },
            { name: "Squat", weight: 60, reps: 12 }
        ]},
        { date: "2025-08-23", exercises: [
            { name: "Bench Press", weight: 45, reps: 8 },
            { name: "Squat", weight: 65, reps: 10 }
        ]},
        { date: "2025-08-26", exercises: [
            { name: "Bench Press", weight: 50, reps: 6 },
            { name: "Squat", weight: 70, reps: 8 }
        ]},
        { date: "2025-08-29", exercises: [
            { name: "Bench Press", weight: 55, reps: 5 },
            { name: "Squat", weight: 75, reps: 8 }
        ]},
        { date: "2025-09-01", exercises: [
            { name: "Bench Press", weight: 60, reps: 5 },
            { name: "Squat", weight: 80, reps: 6 }
        ]}
    ]*/ //sample data for frontend

    const benchData: {date: string, weight: number, reps: number}[] =[]
    workouts.forEach(workout => {
    workout.exercises.forEach(exercise => {
        if (exercise.name == "Bench Press") {
            benchData.push({date: workout.date, weight: exercise.weight, reps: exercise.reps})
        }
    })
    })

    const [metric, setMetric] = useState("weight")
    const [timeRange, setTimeRange] = useState<"all" | "7 days" | "30 days">("all")
    let label ="";
    if (metric=="weight") {
        label="Weight (kg)"
    }
    if (metric=="reps") {
        label="Reps"
    }

    function filterByTimeRange(data: { date: string; weight: number; reps: number }[], range: "all" | "7 days" | "30 days") {
        if (range === "all") {
          return data }
        const today = new Date()
        let howManyDays  
        if (range=="7 days") {
            howManyDays = 7
        } else {
            howManyDays = 30
        }
        const last = new Date(today)
        last.setDate(today.getDate() - howManyDays)
        return data.filter(day => new Date(day.date) >= last)
      }
    const filtered =filterByTimeRange(benchData, timeRange)
    
    function oneRM(weight: number, reps: number): number {
        return weight * (1 + reps/30)
    }
    function exercise1Max(workouts: Workout[], exerciseName: string): number{
        let max=0
        workouts.forEach(workout => {
            workout.exercises.forEach(exercises => {
                if (exercises.name == exerciseName) {
                    const RM = oneRM(exercises.weight, exercises.reps)
                    if (RM > max) {
                        max = RM
                    }
                }
            })
        })
        return max
    }

    return (
    <div>
        <img src="/logo.png" alt="logo" className="logo" width="100"></img>
        <h1>View Progress   </h1>
        <LineChart
        width={500}
        height={300}
        data={filtered}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis>
            <Label value={label}  angle={-90} position="insideLeft" />
        </YAxis>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={metric} stroke="#82ca9d" />
        </LineChart>
        <div>
            <h3>Metrics</h3>
            <button onClick={() => setMetric("weight")}>Weight</button>
            <button onClick={() => setMetric("reps")}>Reps</button>

            <h3>Time Range</h3>
            <button onClick={() => setTimeRange("7 days")}>Last 7 Days</button>
            <button onClick={() => setTimeRange("30 days")}>Last 30 Days</button>
            <button onClick={() => setTimeRange("all")}>All Time</button>
        </div>
        <div className="box">
            <h2>One Rep Max</h2>
            <p>Exercise - Bench Press: {exercise1Max(workouts, "Bench Press")}</p>
        </div>

        <NavBar/>
    </div>
    );
}

export default Progress;