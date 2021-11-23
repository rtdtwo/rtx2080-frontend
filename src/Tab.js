import React from 'react'
import { Nav } from 'react-bootstrap';
import Things from './Things';
import Services from './Services';
import { useState, useEffect } from 'react';
// import { Router } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Relationships from './Relationships';
import Recipe from './Recipe';
import Apps from './Apps';

export default function Tab() {

    const dummy = [[{desc:"",id:1, name:"Thing1"}, {desc:"",id:2, name:"Thing2"},]];
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
                        <Nav.Link eventKey="/">
                            <Link to="/">Things </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/services" eventKey="/services">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/relations' eventKey="link-2">Relationships</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/recipe' eventKey="link-3">Recipe</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/apps' eventKey="link-4">Apps</Nav.Link>
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
