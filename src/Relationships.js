import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Dropdown, Row, Col } from 'react-bootstrap';
import arrow from '../src/darrow.jpg';

export default function Relationships() {
    const itemStyle = {
        height: '200px',
    };
    const imgStyle = {
        width: '50px',
    };
    const relationdata = [{"id":1,"name":"relationship1","service1":{"id":1,"thingId":1,"name":"Service1","icon":"","desc":""},"service2":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""}},{"id":2,"name":"relationship2","service1":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""},"service2":{"id":3,"thingId":3,"name":"Service3","icon":"","desc":""}},{"id":3,"name":"relationship3","service1":{"id":3,"thingId":3,"name":"Service3","icon":"","desc":""},"service2":{"id":4,"thingId":4,"name":"Service4","icon":"","desc":""}}];
    console.log(relationdata[0])
    return (
        <Container className="mt-5">
            Relations
            {relationdata.map(function (i) {
                return (
                <>
                    <Row className="mt-5 justify-content-md-center">
                        <h4 className="mb-2 text-center">Relationship {i.id}</h4>
                        <Col xs={4} className="border rounded border-secondary" style={itemStyle}>
                            <h5 className="mt-3 text-center">Service {i.service1.id}</h5>
                            <div className="col-md-5 text-start pt-2">
                                <p><i className="bi bi-caret-right-fill"></i> <strong>ID: </strong>{i.service1.id}</p>
                                <p><i className="bi bi-caret-right-fill"></i> <strong>Name: </strong>{i.service1.name}</p>
                                <p><i className="bi bi-caret-right-fill"></i> <strong>Description: </strong>{i.service1.desc}</p>
                            </div>
                        </Col>
                        <Col xs={2} className="justify-content-center d-flex flex-wrap align-items-center">
                            <img style={imgStyle} src={arrow} alt="BigCo Inc. logo"/>
                        </Col>
                        <Col xs={4} className="border rounded border-secondary">
                            <h5 className="mt-3 text-center">Service {i.service2.id}</h5>
                            <div className="col-md-5 text-start pt-2">
                                <p><i className="bi bi-caret-right-fill"></i> <strong>ID: </strong>{i.service2.id}</p>
                                <p><i className="bi bi-caret-right-fill"></i> <strong>Name: </strong>{i.service2.name}</p>
                                <p><i className="bi bi-caret-right-fill"></i> <strong>Description: </strong>{i.service2.desc}</p>
                            </div>
                        </Col>
                    </Row>
                </>
                );
            })} 
            </Container>
    )
}
