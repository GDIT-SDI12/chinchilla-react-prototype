import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Routes from './containers/Routes';
import './App.css';

function App(props) {

  const [isAuthenticated, userHasAuthenticated] = useState(false);

  function handleLogout() {
    //await Auth.signOut();
    userHasAuthenticated(false);
    props.history.push("/login");
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <LinkContainer to="/">
          <Navbar.Brand>Chinchilla</Navbar.Brand>
        </LinkContainer>
        {isAuthenticated ? 
          <Nav className="mr-auto">
            <LinkContainer to="/feed">
              <Nav.Link>Feed</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/chat">
              <Nav.Link>Chat</Nav.Link>
            </LinkContainer>
          </Nav>
          :
          <></>
        }
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            {isAuthenticated ?
                <NavDropdown title="Profile" id="collapsible-nav-dropdown">
                  <LinkContainer to="/profile">
                    <Nav.Link>Profile</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/settings">
                    <Nav.Link>Settings</Nav.Link>
                  </LinkContainer>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </NavDropdown>
              : <>
                  <LinkContainer to="/signup">
                    <Nav.Link>Signup</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                </>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    </div>
  );
}

export default withRouter(App);
