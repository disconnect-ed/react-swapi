import React from "react";
import Card from "react-bootstrap/Card";
import planet from '../../images/planet.jpg'
import {NavLink} from "react-router-dom";

export const PlanetCard = ({title, climate, population, url}) => (
    <NavLink to={url || '/'} className='col-xl-3 text-center mb-5 d-block'>
        <Card>
            <Card.Img variant="top" src={planet} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Climate: {climate}
                </Card.Text>
                <Card.Text>
                    Population: {population}
                </Card.Text>
            </Card.Body>
        </Card>
    </NavLink>
)

