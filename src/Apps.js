import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Dropdown, Row, Col, Button, Icon, Form } from 'react-bootstrap';
// import deleteImg from '../src/delete.png';
import AppsModal from './AppsModal'
import { URL } from "./test/constants";
import Image from 'react-bootstrap/Image'
import logo from './logo.svg'; // with import

export default function Apps() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [recipeList, setRecipeList] = useState([]);
    const handleShow = () => setShow(true);
    const [isDisabled, setIsDisabled] = useState(false)

    const servicecallForRecipes = ()=> {
        const apiUrl = URL+'recipes';
        fetch(apiUrl)
          .then((res) => {
              console.log("HEYYY recipe");
                return res.json();
            })
          .then((data) => data.result)
          .then((arr) => {
            setRecipeList(arr)
          });
    }

    useEffect(()=>{
        servicecallForRecipes();
    }, [])
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
    const [recipeID, setRecipeID] = useState("");

    const handleOnClickEnableDisable = (id, e) => {
        const apiUrl = URL+'recipes/'+id.name+"/enableDisable";
        fetch(apiUrl,{
            method: 'PUT'
        })
          .then((res) => {
              console.log("HEYYY");
                return res.json();
            })
          .then((data) => {
            console.log("RESULT",data.result);
            servicecallForRecipes()
          });


        console.log("## inside handleOnClickEnableDisable---", id);
        if (document.getElementById("enDis" + id.id).innerHTML == "Enable") {

            console.log("Enable was clicked");
            document.getElementById("enDis" + id.id).innerHTML = "Disable";
            //On click of enable
        } else if (document.getElementById("enDis" + id.id).innerHTML == "Disable") {

            console.log("Disable was clicked");
            document.getElementById("enDis" + id.id).innerHTML = "Enable"

            //On click of diable
        }

        
    }
    const handleOnClickRun = (i, e) => {
        setRecipeID(i.id)
        handleShow()
        setSelectedName(i.name)
        setSelectedList(i.recipes)
        console.log("## inside handleOnClickRun---", i.recipes);

    }
    const onImport = (e) => {

        console.log("## inside onImport---", e);

    }
    const handleOnClickDelete = (id, e) => {

        console.log("## inside handleOnClickDelete---", id);
        document.getElementById(id.id).style.display = "none";
        //Call logic for deletion of app;
        const apiUrl = URL+'recipes/'+id.name;
        fetch(apiUrl, {
            method: 'DELETE'
        })
            .then((res) => {
                console.log("HEYYY");
                return res.json();
            })
            .then((data) => {
                console.log("RESULT", data.result);
                servicecallForRecipes();
            }); 
    }

    const handleOnClickExport = async (recipeJson, e) => {

        const fileName = "export";
        const json = JSON.stringify(recipeJson);
        const blob = new Blob([json],{type:'application/json'});
        const href = await global.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
    }
    const handleOnClickImport = async ( e) => {

        console.log("##1",e.target.files);
        console.log("##2",e.target.files[0]);
        let file = e.target.files[0]
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evt) {
                const jsonData = JSON.parse(evt.target.result)
                console.log("##3",jsonData);
                window.alert("App has been imported successfully!");

                const apiUrl = URL+'recipes/import';
                fetch(apiUrl,{
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(jsonData)
                })
                .then((res) => {
                    console.log("HEYYY after put api call");
                    window.location.reload();

                    })
                ;
            }
            reader.onerror = function (evt) {
                window.alert("Error importing.")
            }


        }
                
    }


    return (
        <Container className="mt-5">
            {show ? (<AppsModal show={show} recipeID={recipeID} setShow={setShow}></AppsModal>) : ""}
            <Form>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Import App</Form.Label>
                <Form.Control type="file" onChange= {(e) => handleOnClickImport(e)}/>
            </Form.Group>
          
            </Form>
            {/* <Button variant ="success" onClick={onImport}>Import App</Button> */}
            {/* <Button onClick={handleShow}>Create App</Button> */}
            {/* {returnModal()} */}
            {recipeList.map(function (i) {
                {console.log("Inside - ", i)}
                let intRecipeSize = i.relationships.length;
                // let imgSource = 
                let index = i.id - 1;
                return (
                    <>
                        <Row id={i.id} className="mt-5 justify-content-md-center border rounded border-secondary">
                            <h4 className="mb-2 text-center">App {i.id}</h4>
                            <Col>
                                <Image src={logo} responsive />
                            </Col>
                            <Col xs={5} className="" style={itemStyle}>
                                <div className="text-start pt-2">
                                    <p><i className="bi bi-caret-right-fill"></i> <strong>Id: </strong>{i.id}</p>
                                    <p><i className="bi bi-caret-right-fill"></i> <strong>Name: </strong>{i.name}</p>
                                    <p><i className="bi bi-caret-right-fill"></i> <strong>Description: </strong>{i.desc}</p>
                                    <p><i className="bi bi-caret-right-fill"></i> <strong>Number of relationships: </strong>{intRecipeSize}</p>
                                </div>
                            </Col>
                            <Col xs={4} style={itemStyle}>
                                <div className="text-end pt-2">
                                    <Button className="m-1" variant="primary" id={"enDis" + i.id} size="sm" onClick={(e) => handleOnClickEnableDisable(i, e)}>
                                        {i.enabled ? "Disable" : "Enable"}
                                    </Button>
                                    {i.enabled ? (<Button className="m-1" variant="success" id={"run" + i.id} size="sm" onClick={(e) => handleOnClickRun(i, e)}>Run
                                    </Button>) : ""}
                                    
                                    <Button className="m-1" variant="danger" id={"delete" + i.id} size="sm" onClick={(e) => handleOnClickDelete(i, e)}>
                                        Delete
                                    </Button>
                                    {i.enabled ? (<Button className="m-1" variant="primary" id={"export" + i.id} size="sm" onClick={(e) => handleOnClickExport(i, e)}>Export
                                    </Button>) : ""}
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
