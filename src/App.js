import React from 'react';
import { Container, Row, Col, Badge, Card } from 'react-bootstrap';

import NavBar from './Components/NavBar/NavBar'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import './App.css'
import RequestAPI from './apiRequest'

const App = () => {
  return (
    <>
        <NavBar></NavBar>
        <Content></Content>
        <Footer></Footer> 

    </>
  );
}

export default App;