import React from 'react'
import { Modal, Button, Alert, Card } from 'react-bootstrap';
// import Board from './Board'
// import Card from './Card'
// import { Test } from './test/Test';
// import { useState, useEffect } from 'react';

function AppsModal(props) {
    
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
                    <Modal.Title>Logs</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                Hello
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