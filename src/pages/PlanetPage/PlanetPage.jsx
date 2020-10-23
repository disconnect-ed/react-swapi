import React from "react";
import {NavLink} from "react-router-dom";
import {Row} from "react-bootstrap";
import image from '../../images/planet.jpg'
import {ResidentsListContainer} from "../../components/ResidentsList/ResidentsListContainer";

export const PlanetPage = React.memo(({data}) => (
        <div className='planet'>
            <h1 className='text-center pt-4 pb-4'>{data.name}</h1>
            <Row>
                <div className='col-lg-6 col-12 pb-4'>
                    <img className='d-block mw-100' src={image} alt={data.name}/>
                </div>
                <div className="planet-descr col-lg-6 col-12">
                    <p>Name: {data.name}</p>
                    <p>Turnover period: {data.rotation_period}</p>
                    <p>Diameter: {data.diameter}</p>
                    <p>Climate: {data.climate}</p>
                    <p>Gravity: {data.gravity}</p>
                    <p>Terrain type: {data.terrain}</p>
                    <p>Population: {data.population}</p>
                </div>
            </Row>
            <ResidentsListContainer list={data.residents}/>
            <div className='m-auto text-center ' >
                <NavLink className='back pt-4 pb-4' to={'/'}>
                    to main screen
                </NavLink>
            </div>
        </div>
    )
)