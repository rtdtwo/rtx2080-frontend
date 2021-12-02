import React from 'react'
import { Modal, Button, Alert, Card, Spinner } from 'react-bootstrap';
// import Board from './Board'
// import Card from './Card'
// import { Test } from './test/Test';
import { useState, useEffect } from 'react';
import { URL } from "./test/constants";

function AppsModal(props) {
    const [loading, setLoading] = useState(true)
    const [logList, setLogList] = useState([])
    const servicecall = ()=> {
        const apiUrl = URL+'recipes/'+props.recipeID+"/run";
        fetch(apiUrl)
          .then((res) => {
              console.log("HEYYY");
                return res.json();
            })
          .then((data) => data.result)
          .then((arr) => {
              setLogList(arr.result);
              setLoading(false);
          });
        // setThings(dummy[0]);
        // console.log(things);
    }
    useEffect(()=>{

        servicecall();
    }, [])
    return (
            <Modal
                show={props.show}
                onHide={props.setShow}
                backdrop="static"
                keyboard={false}
                size='xl'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Logs</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* {loading ? <Spinner animation="border" /> : (
                        <div className="cards flexboxcards">
                            <Card className="mt-3">
                                    <Card.Header>
                                        <h5 style={{display: 'inline-block'}}>Response</h5>
                                    </Card.Header>
                                    {logList.map(function (i) {
                                        return (
                                            <Card.Body>
                                                <Card.Text>
                                                    <p>Service 1 : {i.service1.name}</p>
                                                    <p>Service 2 : {i.service2.name}</p>
                                                </Card.Text>
                                            </Card.Body>
                                        )
                                    })}
                                    
                                </Card>
                        
                        </div> 
                    )} */}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>props.setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
             
    )
}

export default AppsModal