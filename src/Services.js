import React from 'react'
import { Container, Dropdown } from 'react-bootstrap'
import { useState, useEffect } from 'react';

export default function Services(props) {
    
    const services = [{"id":1,"thingId":1, "name":"Service 1", "icon": "", "desc":""}, {"id":3,"thingId":1, "name":"Service 3", "icon": "", "desc":""},{"id":2,"thingId":2, "name":"Service 2", "icon": "", "desc":""}];
    // let lstDisplayedServices= [];
    console.log("##services",services);
    let selectedThingId = null;
    const [value,setValue]=useState('All');

    const [lstDisplayedServices,setServices] = useState(services);

    const onselectThing=(e)=>{

        console.log(e);
        selectedThingId = e;
        e= e == "All" ? e : "Thing " + e;
        setValue(e)
        displayRelatedServices(selectedThingId);
    }

    const displayRelatedServices=(selectedThingId)=>{

        let randomLst = [];
        if(selectedThingId == "All") {

            randomLst = services;
            setServices(randomLst);
            return;
        }
        console.log("##selectedThingId",selectedThingId);
        for (let index = 0; index < services.length; index++) {

            console.log("services",services[index]);    
            if(services[index].thingId == selectedThingId) {

                randomLst.push(services[index]);
            }            
        }  
        console.log("##lstDisplayedServices--",randomLst); 
        setServices(randomLst);
    }

    return (

      
        <div>
            <Container className="mt-5">
            <Dropdown className onSelect={onselectThing}>

                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {value}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                   
                    <Dropdown.Item eventKey="All">All</Dropdown.Item>

                    {props.lstThings.map(function (i) {
                    return (
                        <>
                            <Dropdown.Item eventKey={i.id}>{i.name}</Dropdown.Item>
                        </>
                    )})}
                </Dropdown.Menu>
            </Dropdown>
            </Container>
            <h4>You selected {value}</h4>
            {lstDisplayedServices.map(function (i) {
                    return (
                        <>
                            <div>{i.name}</div>
                        </>
            )})}
        </div>

       
        // props.servicesList
        
    )
}
