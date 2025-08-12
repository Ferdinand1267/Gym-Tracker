import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';


function App() {

  return (
    <>
      <h1>You're currently logged in!</h1>
      <Link to={"/Login"}>
        <button>Go to Login</button>
      </Link>
    </>  
  )
}

export default App
