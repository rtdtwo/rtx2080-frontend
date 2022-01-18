import React from 'react'
import { Nav } from 'react-bootstrap';
import Things from './Things';
import Services from './Services';
import { useState, useEffect } from 'react';
import { URL } from "./test/constants";
// import { Router } from 'react-router';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Relationships from './Relationships';
import Recipe from './Recipe';
import Apps from './Apps';

export default function Tab() {

    // const dummy = [[{desc:"",id:1, name:"Thing1"}, {desc:"",id:2, name:"Thing2"},]];
    const [things, setThings] = useState([])
    const servicecall = ()=> {
        const apiUrl = URL+'things';
        fetch(apiUrl)
          .then((res) => {
              console.log("HEYYY");
                return res.json();
            })
          .then((data) => data.result)
          .then((arr) => setThings(arr))
          .catch((e) => {
                
        });
        // setThings(dummy[0]);
        // console.log(things);
    }
    useEffect(()=>{

        servicecall();
    }, [])

    return (

        // <div>
            <Router>
                <Nav fill variant="tabs" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link eventKey="/">
                            <Link to="/" className="text-decoration-none">Things </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/services">
                            <Link to="/services" className="text-decoration-none">Services </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/relations">
                            <Link to="/relations" className="text-decoration-none">Relationships </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/recipe">
                            <Link to="/recipe" className="text-decoration-none">Recipe </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/apps">
                            <Link to="/apps" className="text-decoration-none">Apps </Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                {/* <Routes> */}
                    
                        {/* <Route exact path="/" render={()=>{
                            return (
                                <>
                                    <Things/>
                                </>
                            )
                        }}> */}
                            {/* <Things thingsList={things}/> */}
                        {/* </Route> */}
                    {/* <Route path="/services">
                        <Things />
                    </Route> */}
                {/* </Routes> */}
                <Routes>
                    <Route path="/" element={<Things thingsList={things}/>}/>
                    <Route exact path="/services" element={<Services lstThings={things}/>}/>
                    <Route exact path="/relations" element={<Relationships servicesList={things}/>}/>
                    <Route exact path="/recipe" element={<Recipe servicesList={things}/>}/>
                    <Route exact path="/apps" element={<Apps servicesList={things}/>}/>
                </Routes>
            </Router>
        // </div>
    )
}
