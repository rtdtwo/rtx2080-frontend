import React from 'react'
import { Dropdown, Modal, Button, Card, Alert } from 'react-bootstrap';
// import Board from './Board'
// import Card from './Card'
// import { Test } from './test/Test';
import { useState, useEffect } from 'react';
import { URL } from "./test/constants";

function RecipeModal(props) {
    
    // const relationdata = [{"name":"relationship1","id":"relationship1", "service2":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""},"service1":{"id":1,"thingId":2,"name":"Service1","icon":"","desc":""}},{"id":1,"name":"relationship1","service1":{"id":1,"thingId":1,"name":"Service1","icon":"","desc":""},"service2":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""}},{"id":2,"name":"relationship2","service1":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""},"service2":{"id":3,"thingId":3,"name":"Service3","icon":"","desc":""}},{"id":3,"name":"relationship3","service1":{"id":3,"thingId":3,"name":"Service3","icon":"","desc":""},"service2":{"id":4,"thingId":4,"name":"Service4","icon":"","desc":""}}];
    // const relationdata = [{"id":"relationship1","name":"relationship1","service1":{"id":1,"thingId":1,"name":"Service1","icon":"","desc":""},"service2":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""}},{"id":"relationship2","name":"relationship2","service1":{"id":3,"thingId":3,"name":"Service3","icon":"","desc":""},"service2":{"id":4,"thingId":4,"name":"Service4","icon":"","desc":""}},{"id":"relationship3","name":"relationship3","service1":{"id":4,"thingId":4,"name":"Service4","icon":"","desc":""},"service2":{"id":5,"thingId":5,"name":"Service5","icon":"","desc":""}},
    // {"id":"relationship4","name":"relationship4","service1":{"id":5,"thingId":5,"name":"Service5","icon":"","desc":""},"service2":{"id":6,"thingId":6,"name":"Service6","icon":"","desc":""}},{"id":"relationship5","name":"relationship5","service1":{"id":7,"thingId":7,"name":"Service7","icon":"","desc":""},"service2":{"id":8,"thingId":8,"name":"Service8","icon":"","desc":""}},{"id":"relationship6","name":"relationship6","service1":{"id":9,"thingId":9,"name":"Service9","icon":"","desc":""},"service2":{"id":10,"thingId":10,"name":"Service10","icon":"","desc":""}},{"id":"relationship7","name":"relationship7","service1":{"id":12,"thingId":9,"name":"Service12","icon":"","desc":""},"service2":{"id":11,"thingId":10,"name":"Service11","icon":"","desc":""}}]
    // let lst = JSON.parse(JSON.stringify(props.recipeData));
    let lst= props.recipeData
    // console.log("Recipe modal list- ", lst)
    // console.log("Recipe modal list- ", relationList)
    
    // setRelationList(lst)
    const [value,setValue]=useState('select');
    
    
    let fData = props.relationdata.filter(ar => !lst.find(rm => (rm.name == ar.name)));
    const [relationList,setRelationList]=useState(lst);
    const [filteredData, setFilteredData] = useState(fData) 
    const [recipeName, setRecipeName] = useState("")
    
    const recipeServiceCall = () => {
        if(recipeName === ""){
            console.log("Recipe name Null")
        }else{

            let relList = []
            for(var i=0;i<relationList.length;i++){
                console.log("u[pdated - " ,relationList[i]);
                relList.push(relationList[i].name)
            }
            let data = {"name":recipeName, "relationships":relList}
            console.log("Before service call - ", data)
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            //Make service call
            
            fetch(URL+"recipes",requestOptions)
            .then((res) => {
                console.log("HEYYY");
                return res.json();
            })
            .then((data) => {
                console.log("RESULT",data.result);
                props.setShow(false)
                setRecipeName("")
                //   data.result
            });
            
            //   props.setShow(false)
        }
    }

    const onselectThing=(i)=>{
        console.log("Selected:",i)
        let newList = filteredData.filter((el)=> {
            return el.name === i;
        });
        console.log("Selected NewList:",newList)
        let updatedList = filteredData.filter((el)=> {
            return el.name !== i;
        });
        console.log("Selected updatedList:",updatedList)
        setFilteredData(updatedList)
        setRelationList(prevState => {
            return [...prevState, newList[0]]
        })
        
    }

    const handleClose = (i,e) => {
        let newList = relationList.filter((el)=> {
            return el.name === i.name;
        });
        let updatedList = relationList.filter((el)=> {
            return el.name !== i.name;
        });
        setRelationList(updatedList)
        setFilteredData(prevState => {
            return [...prevState, newList[0]]
        })
    }

    useEffect(()=>{
        console.log("useeffect List - ", lst)
        setRelationList(lst);
        setFilteredData(fData);
        console.log("useeffect relationList List - ", relationList)
    },[])

    const relationshipServiceCall = () => {
        recipeServiceCall()
        //Make service call
    }
    return (
            <Modal
                show={props.show}
                onHide={props.setShow}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {props.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="mb-3 text-center justify-content-center">
                        <input type="text" value={recipeName} onChange={(e)=>{setRecipeName(e.target.value)}} className="form-control" style={{ width: '100%' }} placeholder="Enter the relationship name" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                <div className="mb-3">
                    Select Relationships: 
                    <Dropdown className onSelect={onselectThing}>

                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {value}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>

                            {filteredData.map(function (i) {
                            return (
                                <>
                                    <Dropdown.Item eventKey={i.name}>{i.name}</Dropdown.Item>
                                </>
                            )})}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="cards flexboxcards">
                    {relationList.map(function (i) {
                        return (
                            <Card className="mt-3">
                                <Card.Header>
                                    <h5 style={{display: 'inline-block'}}>{i.name}</h5>
                                    <button type="button" className="btn-close float-end" aria-label="Close" onClick={(e) => handleClose(i, e)}></button>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p>Service 1 : {i.service1.name}</p>
                                        <p>Service 2 : {i.service2.name}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div> 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>props.setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={relationshipServiceCall}>Create Recipe</Button>
                </Modal.Footer>
            </Modal>
             
    )
}

export default RecipeModal