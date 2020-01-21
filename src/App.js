import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Routes from './containers/Routes';
import './App.css';

function App(props) {

  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            {/* TODO: add link to home "/" */}
            <Link to="/">Chinchilla</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/signup">
              <NavItem>Signup</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* TODO: add Routes "/", "/signup", "/login" */}
      <Routes appProps={{isAuthenticated, userHasAuthenticated}} />
    </div>
  );
}

export default App;
