import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap'
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import About from '../Pages/About'
import Connect from '../Pages/Connect'
import Challanges from '../Pages/Challanges'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'

//<img className="photo" src={FASTLOGO}></img>
function  navbar() {
    return (
        <Router>
            <div className="Navbar">
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand className = 'test'>
                        FAST
                    </Navbar.Brand>
                    
                    <Nav >
                        
                        <Nav.Link as={Link} to="/" className = 'test'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/Connect">Connect</Nav.Link>
                        <Nav.Link as={Link} to="/Challanges">Challanges</Nav.Link>
                        <Nav.Link as={Link} to="/About">About</Nav.Link>
                        <Nav.Link as={Link} to="/Login">Login</Nav.Link>

                        <Nav.Link as={Link} to="/Signup">Signup</Nav.Link>
                       
                    </Nav>

                </Navbar>
            </div>
            <div>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/Connect"><Connect/></Route>
                <Route exact path="/Challanges"> <Challanges/></Route>
                <Route exact path="/About"><About/></Route>
                <Route exact path="/Signup"><Signup/></Route>
            </Switch>
            </div>
        </Router>
    )}

export default navbar;