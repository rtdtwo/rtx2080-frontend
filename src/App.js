import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Tab from './Tab';
import Things from './Things';
import React from "react";
import { Test } from './test/Test';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
        <NavBar></NavBar>
        <Tab></Tab>
        {/* <Test></Test> */}
    </>
  );
}

export default App;
