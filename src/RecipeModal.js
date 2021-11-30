import React from 'react'
import { Container, Dropdown, Row, Col, Modal, Button, Alert } from 'react-bootstrap';
import Board from './Board'
import Card from './Card'
import { Test } from './test/Test';
import { useState, useEffect } from 'react';

function RecipeModal(props) {
    const relationdata = [{"name":"realtion1","id":"realtion1", "service2":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""},"service1":{"id":1,"thingId":2,"name":"Service1","icon":"","desc":""}},{"id":1,"name":"relationship1","service1":{"id":1,"thingId":1,"name":"Service1","icon":"","desc":""},"service2":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""}},{"id":2,"name":"relationship2","service1":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""},"service2":{"id":3,"thingId":3,"name":"Service3","icon":"","desc":""}},{"id":3,"name":"relationship3","service1":{"id":3,"thingId":3,"name":"Service3","icon":"","desc":""},"service2":{"id":4,"thingId":4,"name":"Service4","icon":"","desc":""}}];
    let lst = JSON.parse(JSON.stringify(props.recipeData));
    console.log("recipe lst - ", lst.relationships)
    let filteredData = relationdata.filter(ar => !lst.relationships.find(rm => (rm.name === ar.name)  ));
    console.log("recipe temp - ", filteredData)
    const [list, setList] = useState(lst)
    const [newItemsList, setNewItemsList] = useState(filteredData)
    const updateList = () => {
        console.log("update - ",list);
    }

    // const [lstDisplayedServices,setServices] = useState(services);

    // const onselectThing=(e)=>{

    //     console.log(e);
    //     selectedThingId = e;
    //     e= e == "All" ? e : "Thing " + e;
    //     // setValue(e)
    //     // displayRelatedServices(selectedThingId);
    // }

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
                    HELLO
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

export default RecipeModal