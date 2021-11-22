import React from 'react'
import { Nav } from 'react-bootstrap';
import Things from './Things';
import { useState, useEffect } from 'react';
// import { Router } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default function Tab() {
    const dummy = [[{desc:"",id:1, name:"Thing1"}, {desc:"",id:2, name:"Thing1"},]];
    const [things, setThings] = useState([])
    const servicecall = ()=> {
        // const apiUrl = 'http://ef31-184-188-101-162.ngrok.io/things';
        // fetch(apiUrl)
        //   .then((res) => {
        //       console.log("HEYYY");
        //         return res.json();
        //     })
        //   .then((data) => data.result)
        //   .then((arr) => setThings(arr));
        setThings(dummy[0]);

        console.log(dummy[0]);
    }
    useEffect(()=>{
        servicecall();
    }, [])
    return (
        // <div>
            <Router>
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        {/* <Nav.Link href="/">Things</Nav.Link> */}
                        <Nav.Link href="/">Things</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Relationships</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Apps</Nav.Link>
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
                </Routes>
            </Router>
        // </div>
    )
}
