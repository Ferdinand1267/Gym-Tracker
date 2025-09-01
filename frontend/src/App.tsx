import './App.css'
import Login from './pages/Login.tsx'
import Home from './pages/Home.tsx'
import Workouts from './pages/Workouts.tsx'
import Schedule from './pages/Schedule.tsx'
import Progress from './pages/Progess.tsx'
import Profile from './pages/Profile.tsx'
import NavBar from './NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {

  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Login />} />
           <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>  
  )
}

export default App
