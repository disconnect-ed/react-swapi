import React from 'react';
import './App.css';
import Container from "react-bootstrap/Container";
import {Route, Switch} from "react-router-dom";
import {MainPageContainer} from "./pages/MainPage/MainPageContainer";
import {PlanetPageContainer} from "./pages/PlanetPage/PlanetPageContainer";
import {NotFound} from "./components/NotFound/NotFound";

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
                    <Route exact
                           path='*'
                           render={() => <NotFound text='Page not found :('/>}
                    />
                </Switch>
            </Container>
        </div>
    );
}

export default App;
