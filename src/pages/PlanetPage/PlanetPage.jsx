import React, {useState, useCallback} from "react";
import {NavLink, useHistory} from "react-router-dom";
import CustomSpinner from "../../components/Spinner/Spinner";
import {useFetch} from "../../hooks/hooks";
import {Row} from "react-bootstrap";
import image from '../../images/planet.jpg'
import {ResidentsList} from "../../components/ResidentsList/ResidentsList";
import {NotFound} from "../../components/NotFound/NotFound";
import Button from "react-bootstrap/Button";

export const PlanetPage = React.memo(() => {
    const history = useHistory();
    const url = `https://swapi.dev/api${history.location.pathname}`
    const [isLoading, toggleLoading] = useState(true)
    const data = useFetch(url, [], toggleLoading)
    console.log(data)
    if (data.detail) return <NotFound text='Planet not found :('/>
    if (isLoading) return <CustomSpinner/>

    return (
        <div className='planet'>
            <h1 className='text-center pt-4 pb-4'>{data.name}</h1>
            <Row>
                <div className='col-6'>
                    <img className='d-block mw-100' src={image} alt={data.name}/>
                </div>
                <div className="planet-descr col-6">
                    <p>Name: {data.name}</p>
                    <p>Turnover period: {data.rotation_period}</p>
                    <p>Diameter: {data.diameter}</p>
                    <p>Climate: {data.climate}</p>
                    <p>Gravity: {data.gravity}</p>
                    <p>Terrain type: {data.terrain}</p>
                    <p>Population: {data.population}</p>
                </div>
            </Row>
            <ResidentsList list={data.residents}/>
            <div className='m-auto'>
                <NavLink className='back text-center' to={'/'}>
                    to main screen
                </NavLink>
            </div>
        </div>
    )

})