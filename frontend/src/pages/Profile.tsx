import { useState } from "react";
import './Profile.css';

function Profile() {
    return (
    <div>
        <img src="/logo.png" alt="logo" className="logo" width="100"></img>
        <h1>
            <span>Edit Profile</span>
            <span></span>
        </h1>
    </div>
    );
}

export default Profile;