import React from 'react';
import './App.css';
import Container from "react-bootstrap/Container";
import Switch from "react-bootstrap/Switch";
import {Route} from "react-router-dom";
import {MainPageContainer} from "./pages/MainPage/MainPageContainer";
import {PlanetPageContainer} from "./pages/PlanetPage/PlanetPageContainer";

function App() {

  return (
    <div className="app min-vh-100 w-100 position-relative">
      <Container>
        <Switch>
          <Route exact
                 path='/'
                 render={() => <MainPageContainer/>}
          />
            <Route exact
                   path='/planets/:id'
                   render={() => <PlanetPageContainer/>}
            />
        </Switch>


      </Container>

    </div>
  );
}

export default App;
