import React from 'react'
import { Container, Dropdown, Row, Col, Modal, Button, Alert, Card } from 'react-bootstrap';
import Board from './Board'
// import Card from './Card'
import { Test } from './test/Test';
import { useState, useEffect } from 'react';

function AppsModal(props) {
    // const relationdata = [{"name":"relationship1","id":"relationship1", "service2":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""},"service1":{"id":1,"thingId":2,"name":"Service1","icon":"","desc":""}},{"id":1,"name":"relationship1","service1":{"id":1,"thingId":1,"name":"Service1","icon":"","desc":""},"service2":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""}},{"id":2,"name":"relationship2","service1":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""},"service2":{"id":3,"thingId":3,"name":"Service3","icon":"","desc":""}},{"id":3,"name":"relationship3","service1":{"id":3,"thingId":3,"name":"Service3","icon":"","desc":""},"service2":{"id":4,"thingId":4,"name":"Service4","icon":"","desc":""}}];
    const relationdata = [{"id":"relationship1","name":"relationship1","service1":{"id":1,"thingId":1,"name":"Service1","icon":"","desc":""},"service2":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""}},{"id":"relationship2","name":"relationship2","service1":{"id":3,"thingId":3,"name":"Service3","icon":"","desc":""},"service2":{"id":4,"thingId":4,"name":"Service4","icon":"","desc":""}},{"id":"relationship3","name":"relationship3","service1":{"id":4,"thingId":4,"name":"Service4","icon":"","desc":""},"service2":{"id":5,"thingId":5,"name":"Service5","icon":"","desc":""}},
    {"id":"relationship4","name":"relationship4","service1":{"id":5,"thingId":5,"name":"Service5","icon":"","desc":""},"service2":{"id":6,"thingId":6,"name":"Service6","icon":"","desc":""}},{"id":"relationship5","name":"relationship5","service1":{"id":7,"thingId":7,"name":"Service7","icon":"","desc":""},"service2":{"id":8,"thingId":8,"name":"Service8","icon":"","desc":""}},{"id":"relationship6","name":"relationship6","service1":{"id":9,"thingId":9,"name":"Service9","icon":"","desc":""},"service2":{"id":10,"thingId":10,"name":"Service10","icon":"","desc":""}},{"id":"relationship7","name":"relationship7","service1":{"id":12,"thingId":9,"name":"Service12","icon":"","desc":""},"service2":{"id":11,"thingId":10,"name":"Service11","icon":"","desc":""}}]
    let lst = JSON.parse(JSON.stringify(props.recipeData));
    
    
    // const [relationList,setRelationList]=useState(relationdata);
    console.log("Relation List - ", lst)
    
    // setRelationList(lst)
    const [value,setValue]=useState('select');
    // let jsn = JSON.parse(lst[0]);
    // lst = lst.relationships;
    // let dummylst = JSON.parse(JSON.stringify(props.dummyData));
    // console.log("recipe lst - ", lst)
    // console.log("recipe lst - ", jsn.relationships)
    // console.log("recipe dummy lst - ", dummylst.relationships)
    // console.log("recipe lst - ", relationdata)
    // let filteredData = relationdata.filter(ar => !dummylst.relationships.find(rm => (rm.name === ar.name)));
    let fData = relationdata.filter(ar => !lst.find(rm => (rm.name == ar.name)));
    // const [filteredData, setFiltereddata] = useState(relationdata) 
    // console.log("recipe filteredData - ", filteredData)
    // const [list, setList] = useState(lst)
    // const [newItemsList, setNewItemsList] = useState(filteredData)
    // const updateList = () => {
    //     console.log("update - ",list);
    // }

    // const [lstDisplayedServices,setServices] = useState(services);

    // const onselectThing=(e)=>{

    //     console.log(e);
    //     selectedThingId = e;
    //     e= e == "All" ? e : "Thing " + e;
    //     // setValue(e)
    //     // displayRelatedServices(selectedThingId);
    // }
    const onselectThing=(i)=>{
        console.log("HEYY", i)
        let newList = fData.filter((el)=> {
            console.log("HEyy2", el.name," -i - ",i)
            return el.name === i;
        });
        // setRelationList(prevState => {
        //     return {...prevState, newList}
        // })
        console.log("NewList" ,newList);
        // let fData = filteredData.filter(ar => !newList.find(rm => (rm.name === ar.name)));
        // setFiltereddata(fData);
        // selectedThingId = e;
        // e= e == "All" ? e : "Thing " + e;
        // setValue(e)
        // displayRelatedServices(selectedThingId);
    }

    useEffect(()=>{
        console.log("useeffect List - ", lst)
        // setRelationList(lst);
        // setFiltereddata(fData);
        // console.log("useeffect relationList List - ", relationList)
    },[])

    const relationshipServiceCall = () => {
        //Make service call
    }
    return (
            <Modal
                show={props.show}
                onHide={props.setShow}
                backdrop="static"
                keyboard={false}
                size='xl'
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Alert key={props.name} variant='dark'>
                            {props.name}
                        </Alert>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div>
                    Select Relationships: 
                    <Dropdown className onSelect={onselectThing}>

                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {value}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>

                            {fData.map(function (i) {
                            return (
                                <>
                                    <Dropdown.Item eventKey={i.name}>{i.name}</Dropdown.Item>
                                </>
                            )})}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                    {lst.map(function (i) {
                        console.log("inside",i);
                        return (
                            <Card className="mt-3">
                                <Card.Header>{i.name}</Card.Header>
                                <Card.Body>
                                    {/* <Card.Title>{i.name}</Card.Title> */}
                                    <Card.Text>
                                        <p>Service 1 : {i.service1.name}</p>
                                        <p>Service 2 : {i.service2.name}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
                {/* <div>
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
                                    <Dropdown.Item eventKey={i.id}>{i.name}</Dropdown.Item>
                                </>
                            )})}
                        </Dropdown.Menu>
                    </Dropdown>
                </div> */}
                    {/* <div className='flexbox'>
                        <Board id='board1' className='board'>
                            {lst.map(function (i) {
                                return (
                                <>
                                    <Card id={i.id} name={i.name} className='card' desc={i.desc} showDesc='false' draggable='true'>
                                    </Card>
                                </>
                                );
                            })}
                        </Board>

                        <div>
                            <Board id='boardside2' className='board'>
                                
                            </Board>
                        </div>
                    </div> */} 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>props.setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={relationshipServiceCall}>Understood</Button>
                </Modal.Footer>
            </Modal>
             
    )
}

export default AppsModal