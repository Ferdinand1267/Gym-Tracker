import { StrictMode } from 'react'
import {createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Login from './pages/Login.tsx'
import Home from './pages/Home.tsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

console.log("main.tsx is running");
const router = createBrowserRouter([
  {path:"/",element:<App />},
  {path:"/login",element:<Login />},
  {path:"/home",element:<Home />}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
