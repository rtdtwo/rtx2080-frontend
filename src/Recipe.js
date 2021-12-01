import React from 'react'
import { useState, useEffect } from 'react';
// <<<<<<< Updated upstream
import Card from './Card'
import ModalComponent from './ModalComponent'
import { Container, Dropdown, Row, Col, Modal, Button } from 'react-bootstrap';
import RecipeModal from './RecipeModal'

export default function Recipe() {

    const [show, setShow] = useState(false);
    const [selectedList, setSelectedList] = useState([]);
    const [selectedName, setSelectedName] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const sendCreatedata = () =>{
        setSelectedName("Create")
        handleShow()
    }
    let selectedRelationship = null; 
    const recipedata = [{"id":"recipe1","name":"recipe1","relationships":[{"id":"relationship1","name":"relationship1", "service1":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""},"service2":{"id":1,"thingId":2,"name":"Service1","icon":"","desc":""}},{"id":"realtion2","name":"realtion2", "service1":{"id":3,"thingId":4,"name":"Service3","icon":"","desc":""},"service2":{"id":4,"thingId":4,"name":"Service4","icon":"","desc":""}}]}];
    const relationdata = [{"id":1,"name":"relationship1","service1":{"id":1,"thingId":1,"name":"Service1","icon":"","desc":""},"service2":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""}},{"id":2,"name":"relationship2","service1":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""},"service2":{"id":3,"thingId":3,"name":"Service3","icon":"","desc":""}},{"id":3,"name":"relationship3","service1":{"id":3,"thingId":3,"name":"Service3","icon":"","desc":""},"service2":{"id":4,"thingId":4,"name":"Service4","icon":"","desc":""}}];
    // console.log(relationdata[0])
    const lstExistingRecipes = [{"id":"Recipe 1","name":"Recipe 1","relationships":[{"id":"relationship1","name":"relationship1","service1":{"id":1,"thingId":1,"name":"Service1","icon":"","desc":""},"service2":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""}},{"id":"relationship2","name":"relationship2","service1":{"id":3,"thingId":3,"name":"Service3","icon":"","desc":""},"service2":{"id":4,"thingId":4,"name":"Service4","icon":"","desc":""}},{"id":"relationship3","name":"relationship3","service1":{"id":4,"thingId":4,"name":"Service4","icon":"","desc":""},"service2":{"id":5,"thingId":5,"name":"Service5","icon":"","desc":""}},
                                                                    {"id":"relationship4","name":"relationship4","service1":{"id":5,"thingId":5,"name":"Service5","icon":"","desc":""},"service2":{"id":6,"thingId":6,"name":"Service6","icon":"","desc":""}},{"id":"relationship5","name":"relationship5","service1":{"id":7,"thingId":7,"name":"Service7","icon":"","desc":""},"service2":{"id":8,"thingId":8,"name":"Service8","icon":"","desc":""}},{"id":"relationship6","name":"relationship6","service1":{"id":9,"thingId":9,"name":"Service9","icon":"","desc":""},"service2":{"id":10,"thingId":10,"name":"Service10","icon":"","desc":""}}]},
                                {"id":"Recipe 2","name":"Recipe 2","relationships":[{"id":"relationship1","name":"relationship1","service1":{"id":1,"thingId":1,"name":"Service1","icon":"","desc":""},"service2":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""}},{"id":"relationship2","name":"relationship2","service1":{"id":3,"thingId":3,"name":"Service3","icon":"","desc":""},"service2":{"id":4,"thingId":4,"name":"Service4","icon":"","desc":""}},{"id":"relationship3","name":"relationship3","service1":{"id":4,"thingId":4,"name":"Service4","icon":"","desc":""},"service2":{"id":5,"thingId":5,"name":"Service5","icon":"","desc":""}},
                                                                    {"id":"relationship4","name":"relationship4","service1":{"id":5,"thingId":5,"name":"Service5","icon":"","desc":""},"service2":{"id":6,"thingId":6,"name":"Service6","icon":"","desc":""}}]}
                                       ];
    const handleEditRecipe = (relJsonData, e)=> {
        selectedRelationship = [];
        selectedRelationship.push(relJsonData.relationships)
        setSelectedList(relJsonData.relationships)
        setSelectedName(relJsonData.name)
        // setShow(true);
        handleShow()
    }

    const returnModal = ()=>{
        return (
            <RecipeModal show={show} name={selectedName} recipeData={selectedList} dummyData={recipedata[0]} setShow={setShow}></RecipeModal>
            // <RecipeModal show={show} name={recipedata[0].name} recipeData={recipedata[0]} setShow={setShow}></RecipeModal>
            // ""
        )
    }
    return (
        <div>
            <Container>
                <Button className="mb-3 mt-3" onClick={sendCreatedata}>Create Recipe</Button>
                {show ? returnModal() : ""}
                {/* <RecipeModal show={show} name={recipedata[0].name} recipeData={recipedata[0]} setShow={setShow}></RecipeModal> */}
                {/* <h4>You selected {value}</h4> */}
                {lstExistingRecipes.map(function (i) {
                    let intRelSize = i.relationships.length;
                    // console.log("## i size - ", intRelSize);
                    return (
                        <Card id={i.id} name={i.name} className='servicecard' relSize={intRelSize} showDesc='false' isRecipeTab = "true" draggable='false'>
                                                    <div><Button onClick={(e) => handleEditRecipe(i, e)}>Edit</Button></div>

                        </Card>
                        
                    )
                })}
{/* =======
import { Container, Dropdown, Row, Col, Modal, Button } from 'react-bootstrap';
import arrow from '../src/darrow.jpg';
import Board from './Board'
import Card from './Card'
import RecipeModal from './RecipeModal'

export default function Recipe() {
    // const recipedata = [{"id":"recipe1","name":"recipe1","relationships":[{"name":"realtion1","id":"realtion1", "service2":{"id":2,"thingId":2,"name":"Service2","icon":"","desc":""},"service1":{"id":1,"thingId":2,"name":"Service1","icon":"","desc":""}},{"name":"realtion2","id":"realtion2", "service3":{"id":3,"thingId":4,"name":"Service3","icon":"","desc":""},"service4":{"id":4,"thingId":4,"name":"Service4","icon":"","desc":""}}]}];

    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Container>
                Recipe
                <Button onClick={handleShow} >Create Recipe</Button>
                <RecipeModal show={show} name={recipedata[0].name} recipeData={recipedata[0]} setShow={setShow}></RecipeModal>
>>>>>>> Stashed changes */}
            </Container>
        </div>
    )
}
