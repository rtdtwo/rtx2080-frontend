import React from 'react'
import { Container, Dropdown } from 'react-bootstrap'

export default function Services() {
    return (
        <div>
            <Container className="mt-5">
            <Dropdown className>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    All
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Thing 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Thing 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Thing 3</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Thing 4</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Container>
        </div>
    )
}
