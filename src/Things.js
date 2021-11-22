import React from 'react'
import { Accordion } from 'react-bootstrap'
import { useState, useEffect } from 'react';

export default function Things(props) {
    const [things, setThings] = useState(props.thingsList);
    return (
        <div>
            {console.log(props.thingsList)}
            {props.thingsList.map(function (i) {
                return (
                <>
                    <Accordion defaultActiveKey="0">
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
            
        </div>
    )
}
