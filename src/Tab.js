import React from 'react'
import { Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Tab() {
    const [things, setThings] = useState([])
    const servicecall = ()=> {
        const apiUrl = 'http://ef31-184-188-101-162.ngrok.io/things';
        fetch(apiUrl)
          .then((res) => {
              console.log("HEYYY");
                return res.json();
            })
          .then((data) => data.result)
          .then((arr) => setThings(arr));
    }
    useEffect(()=>{
        servicecall();
    }, [])
    return (
        <div>
            {/* {servicecall()} */}
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Things</Nav.Link>
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
        </div>
    )
}
