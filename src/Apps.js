import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Dropdown, Row, Col, Button, Icon, Form } from 'react-bootstrap';
import deleteImg from '../src/delete.png';
import AppsModal from './AppsModal'

export default function Apps() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isDisabled, setIsDisabled] = useState(false)
    const lstExistingRecipes = [{
        "id": 1, "name": "Recipe 1", "Relationships": [{ "id": 1, "name": "relationship1", "service1": { "id": 1, "thingId": 1, "name": "Service1", "icon": "", "desc": "" }, "service2": { "id": 2, "thingId": 2, "name": "Service2", "icon": "", "desc": "" } }, { "id": 2, "name": "relationship2", "service1": { "id": 3, "thingId": 3, "name": "Service3", "icon": "", "desc": "" }, "service2": { "id": 4, "thingId": 4, "name": "Service4", "icon": "", "desc": "" } }, { "id": 3, "name": "relationship3", "service1": { "id": 4, "thingId": 4, "name": "Service4", "icon": "", "desc": "" }, "service2": { "id": 5, "thingId": 5, "name": "Service5", "icon": "", "desc": "" } },
        { "id": 4, "name": "relationship4", "service1": { "id": 5, "thingId": 5, "name": "Service5", "icon": "", "desc": "" }, "service2": { "id": 6, "thingId": 6, "name": "Service6", "icon": "", "desc": "" } }, { "id": 5, "name": "relationship5", "service1": { "id": 7, "thingId": 7, "name": "Service7", "icon": "", "desc": "" }, "service2": { "id": 8, "thingId": 8, "name": "Service8", "icon": "", "desc": "" } }, { "id": 6, "name": "relationship6", "service1": { "id": 9, "thingId": 9, "name": "Service9", "icon": "", "desc": "" }, "service2": { "id": 10, "thingId": 10, "name": "Service10", "icon": "", "desc": "" } }]
    },
    {
        "id": 2, "name": "Recipe 2", "Relationships": [{ "id": 1, "name": "relationship1", "service1": { "id": 1, "thingId": 1, "name": "Service1", "icon": "", "desc": "" }, "service2": { "id": 2, "thingId": 2, "name": "Service2", "icon": "", "desc": "" } }, { "id": 2, "name": "relationship2", "service1": { "id": 3, "thingId": 3, "name": "Service3", "icon": "", "desc": "" }, "service2": { "id": 4, "thingId": 4, "name": "Service4", "icon": "", "desc": "" } }, { "id": 3, "name": "relationship3", "service1": { "id": 4, "thingId": 4, "name": "Service4", "icon": "", "desc": "" }, "service2": { "id": 5, "thingId": 5, "name": "Service5", "icon": "", "desc": "" } },
        { "id": 4, "name": "relationship4", "service1": { "id": 5, "thingId": 5, "name": "Service5", "icon": "", "desc": "" }, "service2": { "id": 6, "thingId": 6, "name": "Service6", "icon": "", "desc": "" } }]
    },
    {
        "id": 3, "name": "Recipe 3", "Relationships": [{ "id": 1, "name": "relationship1", "service1": { "id": 1, "thingId": 1, "name": "Service1", "icon": "", "desc": "" }, "service2": { "id": 2, "thingId": 2, "name": "Service2", "icon": "", "desc": "" } }, { "id": 2, "name": "relationship2", "service1": { "id": 3, "thingId": 3, "name": "Service3", "icon": "", "desc": "" }, "service2": { "id": 4, "thingId": 4, "name": "Service4", "icon": "", "desc": "" } }, { "id": 3, "name": "relationship3", "service1": { "id": 4, "thingId": 4, "name": "Service4", "icon": "", "desc": "" }, "service2": { "id": 5, "thingId": 5, "name": "Service5", "icon": "", "desc": "" } },
        { "id": 4, "name": "relationship4", "service1": { "id": 5, "thingId": 5, "name": "Service5", "icon": "", "desc": "" }, "service2": { "id": 6, "thingId": 6, "name": "Service6", "icon": "", "desc": "" } }, { "id": 5, "name": "relationship5", "service1": { "id": 7, "thingId": 7, "name": "Service7", "icon": "", "desc": "" }, "service2": { "id": 8, "thingId": 8, "name": "Service8", "icon": "", "desc": "" } }]
    }
    ];
    const appsData = [
        {
            "id": 1, "name": "RTX2080", "desc": "This app does something 1", "icon": "testIcon1",
            "recipes": [
                {
                    "id": 1, "name": "Recipe 1", "Relationships": [{ "id": 1, "name": "relationship1", "service1": { "id": 1, "thingId": 1, "name": "Service1", "icon": "", "desc": "" }, "service2": { "id": 2, "thingId": 2, "name": "Service2", "icon": "", "desc": "" } }, { "id": 2, "name": "relationship2", "service1": { "id": 3, "thingId": 3, "name": "Service3", "icon": "", "desc": "" }, "service2": { "id": 4, "thingId": 4, "name": "Service4", "icon": "", "desc": "" } }, { "id": 3, "name": "relationship3", "service1": { "id": 4, "thingId": 4, "name": "Service4", "icon": "", "desc": "" }, "service2": { "id": 5, "thingId": 5, "name": "Service5", "icon": "", "desc": "" } },
                    { "id": 4, "name": "relationship4", "service1": { "id": 5, "thingId": 5, "name": "Service5", "icon": "", "desc": "" }, "service2": { "id": 6, "thingId": 6, "name": "Service6", "icon": "", "desc": "" } }, { "id": 5, "name": "relationship5", "service1": { "id": 7, "thingId": 7, "name": "Service7", "icon": "", "desc": "" }, "service2": { "id": 8, "thingId": 8, "name": "Service8", "icon": "", "desc": "" } }, { "id": 6, "name": "relationship6", "service1": { "id": 9, "thingId": 9, "name": "Service9", "icon": "", "desc": "" }, "service2": { "id": 10, "thingId": 10, "name": "Service10", "icon": "", "desc": "" } }]
                }
            ],
            "enabled": "true"
        },
        {
            "id": 2, "name": "App 2", "desc": "This app does something 2", "icon": "testIcon2",
            "recipes": [
                {
                    "id": 2, "name": "Recipe 2", "Relationships": [{ "id": 1, "name": "relationship1", "service1": { "id": 1, "thingId": 1, "name": "Service1", "icon": "", "desc": "" }, "service2": { "id": 2, "thingId": 2, "name": "Service2", "icon": "", "desc": "" } }, { "id": 2, "name": "relationship2", "service1": { "id": 3, "thingId": 3, "name": "Service3", "icon": "", "desc": "" }, "service2": { "id": 4, "thingId": 4, "name": "Service4", "icon": "", "desc": "" } }, { "id": 3, "name": "relationship3", "service1": { "id": 4, "thingId": 4, "name": "Service4", "icon": "", "desc": "" }, "service2": { "id": 5, "thingId": 5, "name": "Service5", "icon": "", "desc": "" } },
                    { "id": 4, "name": "relationship4", "service1": { "id": 5, "thingId": 5, "name": "Service5", "icon": "", "desc": "" }, "service2": { "id": 6, "thingId": 6, "name": "Service6", "icon": "", "desc": "" } }]
                }
            ],
            "enabled": "true"
        },
        {
            "id": 3, "name": "App 3", "desc": "This app does something 3", "icon": "testIcon3",
            "recipes": [
                {
                    "id": 3, "name": "Recipe 3", "Relationships": [{ "id": 1, "name": "relationship1", "service1": { "id": 1, "thingId": 1, "name": "Service1", "icon": "", "desc": "" }, "service2": { "id": 2, "thingId": 2, "name": "Service2", "icon": "", "desc": "" } }, { "id": 2, "name": "relationship2", "service1": { "id": 3, "thingId": 3, "name": "Service3", "icon": "", "desc": "" }, "service2": { "id": 4, "thingId": 4, "name": "Service4", "icon": "", "desc": "" } }, { "id": 3, "name": "relationship3", "service1": { "id": 4, "thingId": 4, "name": "Service4", "icon": "", "desc": "" }, "service2": { "id": 5, "thingId": 5, "name": "Service5", "icon": "", "desc": "" } },
                    { "id": 4, "name": "relationship4", "service1": { "id": 5, "thingId": 5, "name": "Service5", "icon": "", "desc": "" }, "service2": { "id": 6, "thingId": 6, "name": "Service6", "icon": "", "desc": "" } }, { "id": 5, "name": "relationship5", "service1": { "id": 7, "thingId": 7, "name": "Service7", "icon": "", "desc": "" }, "service2": { "id": 8, "thingId": 8, "name": "Service8", "icon": "", "desc": "" } }]
                }
            ],
            "enabled": "false"
        }
    ];
    const itemStyle = {
        height: '200px',
    };
    const imgStyle = {
        width: '25px',
    };
    const onDisable = (event) => {

        if (!isDisabled) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }

    // const handleEditApp = (selectedAppData, e)=> {
    //     selectedRelationship = [];
    //     console.log("##On selecting a recipe to edit--", selectedAppData);
    //     setShow(true);
    // }
    const [selectedList, setSelectedList] = useState([]);
    const [selectedName, setSelectedName] = useState("");

    const handleOnClickEnableDisable = (id, e) => {

        console.log("## inside handleOnClickEnableDisable---", id);
        if (document.getElementById("enDis" + id).innerHTML == "Enable") {

            console.log("Enable was clicked");
            document.getElementById("enDis" + id).innerHTML = "Disable";
            //On click of enable
        } else if (document.getElementById("enDis" + id).innerHTML == "Disable") {

            console.log("Disable was clicked");
            document.getElementById("enDis" + id).innerHTML = "Enable"

            //On click of diable
        }
    }
    const handleOnClickRun = (i, e) => {
        setSelectedName(i.name)
        setSelectedList(i.recipes)
        console.log("## inside handleOnClickRun---", i.recipes);

    }
    const onImport = (e) => {

        console.log("## inside onImport---", e);

    }
    const handleOnClickDelete = (id, e) => {

        console.log("## inside handleOnClickDelete---", id);
        document.getElementById(id).style.display = "none";
        //Call logic for deletion of app;       
    }

    // const returnModal = ()=>{
    //     return (
    //         // <AppsModal show={show} name={selectedName} recipeData={selectedList} setShow={setShow}></AppsModal>
    //         // <RecipeModal show={show} name={recipedata[0].name} recipeData={recipedata[0]} setShow={setShow}></RecipeModal>
    //         ""
    //     )
    // }

    // var divStyle = {
    //     display:this.state.disableDiv?'block':'none'
    // };

    return (
        <Container className="mt-5">

            <Form>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Import App</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
          
            </Form>
            {/* <Button variant ="success" onClick={onImport}>Import App</Button> */}
            {/* <Button onClick={handleShow}>Create App</Button> */}
            {/* {returnModal()} */}
            {appsData.map(function (i) {

                let intRecipeSize = i.recipes.length;
                let index = i.id - 1;
                //     if(i.enabled == "true") {

                //         setBtnTitle("Disable");
                //     } else {

                //         setBtnTitle("Enable");
                //    }
                return (
                    <>
                        <Row id={i.id} className="mt-5 justify-content-md-center border rounded border-secondary">
                            <h4 className="mb-2 text-center">App {i.id}</h4>
                            <Col xs={5} className="" style={itemStyle}>
                                <div className="text-start pt-2">
                                    <p><i className="bi bi-caret-right-fill"></i> <strong>Id: </strong>{i.id}</p>
                                    <p><i className="bi bi-caret-right-fill"></i> <strong>Name: </strong>{i.name}</p>
                                    <p><i className="bi bi-caret-right-fill"></i> <strong>Description: </strong>{i.desc}</p>
                                    <p><i className="bi bi-caret-right-fill"></i> <strong>Number of recipes: </strong>{intRecipeSize}</p>
                                </div>
                            </Col>
                            <Col xs={4} style={itemStyle}>
                                <div className="text-end pt-2">
                                    <Button variant="primary" id={"enDis" + i.id} size="sm" onClick={(e) => handleOnClickEnableDisable(i.id, e)}>
                                        {i.enabled == "true" ? "Disable" : "Enable"}
                                    </Button>
                                    <Button variant="success" id={"run" + i.id} size="sm" onClick={(e) => handleOnClickRun(i, e)}>
                                        Run
                                    </Button>
                                    <Button variant="danger" id={"delete" + i.id} size="sm" onClick={(e) => handleOnClickDelete(i.id, e)}>
                                        Delete
                                    </Button>
                                    {/* <input className="form-check-input" type="radio" name={"flexRadioDefault"+i.appId} id={i.appId+100} defaultChecked='true'/>
                                <label className="form-check-label" htmlFor={i.appId+100}>Enabled </label>
                                <input className="form-check-input" type="radio" name={"flexRadioDefault"+i.appId} id={i.appId+21}/>
                                <label className="form-check-label" htmlFor={i.appId+21}>Disabled </label> */}

                                </div>
                            </Col>
                        </Row>
                    </>
                );
            })}
        </Container>
    )
}
