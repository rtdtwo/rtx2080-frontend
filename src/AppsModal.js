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
            //   console.log("HEYYY");
                return res.json();
            })
          .then((data) => data.result)
          .then((arr) => {
            //   console.log("Array - ", arr)
              setLogList(arr.result);
              setLoading(false);
          }).catch((e) => {
                
        });
        // setThings(dummy[0]);
        // console.log(things);
    }
    useEffect(()=>{

        servicecall();
    }, [])

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5
            }}
        />
    );
    return (
            <Modal
                show={props.show}
                onHide={props.setShow}
                backdrop="static"
                keyboard={false}
                size='xl'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Atlas Logs</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {loading ? <Spinner animation="border" /> : (
                        <div className="cards flexboxcards">
                            <Card className="mt-3">
                                    <Card.Header>
                                        <h5 style={{display: 'inline-block'}}>Response</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        {logList.map(function (i) {
                                            // {console.log("LOGLIST ITEM : ", i)}
                                            return (
                                                    <Card.Text>
                                                        <p>RelationShip : {i.relationship.name}</p>
                                                        {
                                                            i.result.map(function (j){
                                                                // {console.log("LOGLIST relation - ", j)}
                                                                return (<p> <span>&#183;</span> {j.service.name} result : <span  style={{backgroundColor: 'green'}}>successful</span></p>)
                                                            })
                                                        }
                                                    </Card.Text>
                                            )
                                        })}
                                    </Card.Body>
                                    
                                </Card>
                        
                        </div> 
                    )}

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