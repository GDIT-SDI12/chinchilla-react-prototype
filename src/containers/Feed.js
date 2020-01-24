import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import "./Feed.css"

export default function Feed(props) {

    return (
        <div className="Feed container">
            <Jumbotron>
                <h1>Hello World 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <p>
                    <Button variant="primary">Learn More</Button>
                </p>
            </Jumbotron>
            <Jumbotron>
                <h1>Hello World 2</h1>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <p>
                    <Button variant="primary">Learn More</Button>
                </p>
            </Jumbotron>
            <Jumbotron>
                <h1>Hello World 3</h1>
                <p>Ut enim ad minim veniam</p>
                <p>
                    <Button variant="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    );
}