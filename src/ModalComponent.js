import React from 'react'
import { Container, Dropdown, Row, Col, Modal, Button } from 'react-bootstrap';
import Board from './Board'
import Card from './Card'
import { Test } from './test/Test';
import { useState, useEffect } from 'react';
import { URL } from "./test/constants";

function ModalComponent(props) {
    let lst = JSON.parse(JSON.stringify(props.list));
    // console.log("Initial - ", lst)
    const [list, setList] = useState(lst)
    const [relationName, setRelationName] = useState("")
    const [updatedList, setUpdatedList] = useState([])
    const updateList = (a) => {
        setUpdatedList(a)
        // setUpdatedList(prevState => {
        //     return [...prevState, a]
        // })
        console.log("update - ",a);
    }

    const relationshipServiceCall = () => {
        console.log("Before service call - ", updatedList)
        let data = {"name":"relationship", "desc":"Created relation", "service1":updatedList[0].id,"service2":updatedList[1].id}
        console.log("Before service call - ", data)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        //Make service call
        
        fetch(URL+"relationships",requestOptions)
          .then((res) => {
              console.log("HEYYY");
                return res.json();
            })
          .then((data) => {
              console.log("RESULT",data.result);
              props.setShow(false)
            //   data.result
          });

        //   props.setShow(false)
    }

    // useEffect(()=>{
    //     // setList(lst)
    //     updateList();
    // }, lst)
    return (
            <Modal
                show={props.show}
                onHide={props.setShow}
                backdrop="static"
                keyboard={false}
                size='xl'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{display: 'flex', justifyContent: 'center'}} className="mb-3 text-center justify-content-center">
                        <input type="text" value={relationName} onChange={(e)=>{setRelationName(e.target.value)}} className="form-control" style={{ width: '70%' }} placeholder="Enter the relationship name" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div className="cards flexboxcards">
                        <Test setList={updateList} list={list}></Test>
                    </div>
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
                    <Button variant="primary" onClick={relationshipServiceCall}>Save</Button>
                </Modal.Footer>
            </Modal>
             
    )
}

export default ModalComponent