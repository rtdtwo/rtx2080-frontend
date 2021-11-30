import React from 'react'
import { Accordion, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react';

export default function Things(props) {
    return (
        <Container>
            <div className="mt-5"></div>
            {props.thingsList.map(function (i) {
                return (
                <>
                    <Accordion defaultActiveKey="0" className="mt-3">
                        <Accordion.Item eventKey={i.id}>
                            <Accordion.Header>Thing {i.id}</Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <div className="col-md-5 text-start pt-2">
                                        <p><i className="bi bi-caret-right-fill"></i> <strong>ID: </strong>{i.id}</p>
                                        <p><i className="bi bi-caret-right-fill"></i> <strong>Desc: </strong>{i.id}</p>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </>
                );
            })}
            
        </Container>
    )
}
