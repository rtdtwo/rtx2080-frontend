import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Dropdown, Row, Col } from 'react-bootstrap';
import deleteImg from '../src/delete.png';

export default function Apps() {
    const [isDisabled , setIsDisabled ] = useState(false)
    const appsData = [{"appId":1,"name":"RTX2080","desc":"This app does nothing","nservices":4,"nrecipe":2,"nrelations":2},{"appId":2,"desc":"This app does something","nservices":4,"nrecipe":2,"nrelations":2}];
    const itemStyle = {
        height: '200px',
    };
    const imgStyle = {
        width: '25px',
    };
    const onDisable = (event) => {
        if (!isDisabled) {
            setIsDisabled(true);
        }else{
            setIsDisabled(false);
        }
      }
    // var divStyle = {
    //     display:this.state.disableDiv?'block':'none'
    // };
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
                                {/* {console.log("Enabled - ", (i.appId+100))}
                                {console.log("Enabled - ", (i.appId+21))} */}
                                <input className="form-check-input" type="radio" name={"flexRadioDefault"+i.appId} id={i.appId+100} defaultChecked='true'/>
                                <label className="form-check-label" htmlFor={i.appId+100}>Enabled </label>
                                <input className="form-check-input" type="radio" name={"flexRadioDefault"+i.appId} id={i.appId+21}/>
                                <label className="form-check-label" htmlFor={i.appId+21}>Disabled </label>
                                <img style={imgStyle} src={deleteImg} id="delete" alt="BigCo Inc. logo"/>
                                <label htmlFor="delete">Delete </label>
                            </div>
                        </Col>
                    </Row>
                </>
                );
            })} 
            </Container>
    )
}
