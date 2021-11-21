import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

export default function NavBar() {
    
    return (
        <div>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                <Nav.Item>
                    <Nav.Link href="/home">RTX2080</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
