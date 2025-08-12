import { StrictMode } from 'react'
import {createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Login from './pages/Login.tsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path:"/",element:<App />},
  {path:"/Login",element:<Login /> }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
