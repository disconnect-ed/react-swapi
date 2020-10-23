import React from 'react';
import './App.css';
import {PlanetCard} from "./components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Switch from "react-bootstrap/Switch";
import MainPage from "./pages/MainPage/MainPage";
import {Route} from "react-router-dom";

function App() {

  return (
    <div className="app min-vh-100 w-100 position-relative">
      <Container>
        <Switch>
          <Route exact path='/'
                  render={() => <MainPage/>}
          />
        </Switch>


      </Container>

    </div>
  );
}

export default App;
