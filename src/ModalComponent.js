import React from 'react'
import { Container, Dropdown, Row, Col, Modal, Button } from 'react-bootstrap';
import Board from './Board'
import Card from './Card'
function ModalComponent(props) {
    let lst = JSON.parse(JSON.stringify(props.list));
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
                    <div className='flexbox'>
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
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>props.setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
             
    )
}

export default ModalComponent