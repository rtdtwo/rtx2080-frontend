import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Dropdown, Row, Col } from 'react-bootstrap';
import deleteImg from '../src/delete.png';

export default function Apps() {
    const appsData = [{"appId":1,"name":"RTX2080","desc":"This app does nothing","nservices":4,"nrecipe":2,"nrelations":2},{"appId":2,"desc":"This app does something","nservices":4,"nrecipe":2,"nrelations":2}];
    const itemStyle = {
        height: '200px',
    };
    const imgStyle = {
        width: '25px',
    };
    return (
        <Container className="mt-5">
            Relations
            {appsData.map(function (i) {
                return (
                <>
                    <Row className="mt-5 justify-content-md-center border rounded border-secondary">
                        <h4 className="mb-2 text-center">App {i.appId}</h4>
                        <Col xs={5} className="" style={itemStyle}>
                            <div className="text-start pt-2">
                                <p><i className="bi bi-caret-right-fill"></i> <strong>Name: </strong>{i.name}</p>
                                <p><i className="bi bi-caret-right-fill"></i> <strong>Description: </strong>{i.desc}</p>
                                <p><i className="bi bi-caret-right-fill"></i> <strong>Number of recipes: </strong>{i.nrecipe}</p>
                                <p><i className="bi bi-caret-right-fill"></i> <strong>Number of Relations: </strong>{i.nrelations}</p>
                                <p><i className="bi bi-caret-right-fill"></i> <strong>Number of services: </strong>{i.nservices}</p>
                            </div>
                        </Col>
                        <Col xs={4} style={itemStyle}>
                            <div className="text-end pt-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">Enabled </label>
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label className="form-check-label" for="flexRadioDefault2">Disabled </label>
                                <img style={imgStyle} src={deleteImg} id="delete" alt="BigCo Inc. logo"/>
                                <label for="delete">Delete </label>
                            </div>
                        </Col>
                    </Row>
                </>
                );
            })} 
            </Container>
    )
}
