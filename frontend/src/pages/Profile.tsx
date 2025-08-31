import { useState } from "react";
import './Profile.css';
import NavBar from '../NavBar'

function Profile() {
    return (
    <div>
        <img src="/logo.png" alt="logo" className="logo" width="100"></img>
        <h1>Edit Profile</h1>
        <NavBar/>
    </div>
    );
}

export default Profile;