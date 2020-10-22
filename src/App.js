import React from 'react';
import './App.css';
import {PlanetCard} from "./components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className="app min-vh-100 w-100 position-relative">
      <Container fluid>
        <Row>
          <PlanetCard title='Nibiru'/>
        </Row>

      </Container>

    </div>
  );
}

export default App;
