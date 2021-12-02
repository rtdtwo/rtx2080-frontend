import React from 'react'
import { Container, Dropdown } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import Card from './Card'
import { URL } from "./test/constants";
export default function Services(props) {
    
    // let lstDisplayedServices= [];
    console.log("##services - things: ",props.lstThings);
    let selectedThingId = null;
    const [value,setValue]=useState('All');
    // const services = [{"id":1,"thingId":1, "name":"Service 1", "icon": "", "desc":""}, {"id":3,"thingId":1, "name":"Service 3", "icon": "", "desc":""},{"id":2,"thingId":2, "name":"Service 2", "icon": "", "desc":""}];
    // const [lstDisplayedServices,setServices] = useState(services);
    const [lstDisplayedServices,setServices] = useState([]);

    const servicecall = ()=> {
        const apiUrl = URL+'services';
        fetch(apiUrl)
          .then((res) => {
              console.log("HEYYY");
                return res.json();
            })
          .then((data) => data.result)
          .then((arr) => setServices(arr));
        // setThings(dummy[0]);
        console.log("##services - ", lstDisplayedServices);
    }
    useEffect(()=>{

        servicecall();
    }, [])


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

            randomLst = lstDisplayedServices;
            setServices(randomLst);
            return;
        }
        console.log("##selectedThingId",selectedThingId);
        for (let index = 0; index < lstDisplayedServices.length; index++) {

            // console.log("services",lstDisplayedServices[index]);    
            if(lstDisplayedServices[index].thing.id == selectedThingId) {

                randomLst.push(lstDisplayedServices[index]);
            }            
        }  
        console.log("##lstDisplayedServices--",randomLst); 
        setServices(randomLst);
    }

    return (
        <Container className="mt-5">
            <div className="mb-3">
            Filter: 
            <Dropdown className onSelect={onselectThing}>

                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {value}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                   
                    <Dropdown.Item eventKey="All">All</Dropdown.Item>

                    {props.lstThings.map(function (i) {
                    return (
                        <>
                            <Dropdown.Item eventKey={i.id}>{i.id}</Dropdown.Item>
                        </>
                    )})}
                </Dropdown.Menu>
            </Dropdown>
            </div>
            
            
            {/* <h4>You selected {value}</h4> */}
            {console.log("##services - ", lstDisplayedServices)}
            {lstDisplayedServices.map(function (i) {
                    return (
                        <Card id={i.id} name={i.name} className='servicecard' desc={i.desc} showDesc='false' draggable='false'>
                        </Card>
            )})}
        </Container>
       
        // props.servicesList
        
    )
}
