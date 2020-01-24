import React, { useState } from "react";
import "./Home.css"

export default function Home(props) {

    const [isLoading, setIsLoading] = useState(true);

    function renderHome() {
        return (
            <div className="chinchilla container">
                <h1>Chinchilla</h1>
                <p>
                    THIS IS THE LANDING PAGE AFTER LOGIN<br/>
                </p>
            </div>
        );
    }

    function renderLander() {
        return (
            <div className="lander">
                <img src="android-chrome-384x384.png" alt="logo" />
                <h1>Chinchilla</h1>
                <p>
                    Chinchilla is a platform to connect people.<br />
                    We connect those who want to work and those who need help.
                </p>
            </div>
        );
    }

    return (
        <div className="Home">
            {props.isAuthenticated ? renderHome() : renderLander()}
        </div>
    );
}