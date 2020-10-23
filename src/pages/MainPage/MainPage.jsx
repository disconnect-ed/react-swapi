import React from "react";
import Row from "react-bootstrap/Row";
import {PlanetCardContainer} from "../../components/PlanetCard/PlanetCardContainer";
import {Pagination} from "../../components/Pagination/Pagination";

export const MainPage = ({response, changePage}) => (
    <div>
        <h1 className='pt-4 pb-4 text-center'>PLANET CARDS</h1>
        <Row>
            {response.results.map(item => {
                return <PlanetCardContainer key={item.name}
                                            title={item.name}
                                            climate={item.climate}
                                            population={item.population}
                                            url={item.url}
                />
            })}
        </Row>
        <Pagination changePage={changePage}
                    prev={response.previous}
                    next={response.next}
        />
    </div>
)