import React, { useState } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css"
import LoaderButton from "../components/LoaderButton";

export default function Login(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true);

        // sleep for 3 seconds
        await new Promise( r => setTimeout(r, 3000));

        // TODO: call login endpoint
        try {
            //alert('Logged in');
            try {
                props.userHasAuthenticated(true);
                props.history.push("/");
            } catch (e) {
                alert(e.message);
                setIsLoading(false);
            }
        } catch (e) {
            alert(e.message);
        }
    }

    return (
        <div className="Login">
            <div className="logo">
                <img src="android-chrome-384x384.png" alt="logo" />
            </div>
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="username" bsSize="large">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                        autoFocus
                        type="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </FormGroup>
                <LoaderButton
                    block
                    type="submit"
                    bsSize="large"
                    isLoading={isLoading}
                    disabled={!validateForm()}
                >
                    Login
                </LoaderButton>
            </form>
        </div>
    );
}