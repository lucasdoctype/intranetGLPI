import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Container, Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { BsFillGearFill } from "react-icons/bs";

const App = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <div style={{ marginLeft: "10px" }}>
            <img
              alt=""
              src="https://www.culturainglesa.com.br/app/uploads/2019/06/cultura-inglesa-logo.svg"
              width="85px"
              height="35px"
              className="d-inline-block align-top"
            />
          </div>
        </Navbar.Brand>
      
      </Navbar>
    </>
  );
};

export default App;
