import React from "react";
import {PlanetCard} from "./PlanetCard";

export const PlanetCardContainer = ({title, climate, population, url}) => {
    const planetInd = url.indexOf('planets/')
    const newUrl = url.slice(planetInd)

    return <PlanetCard title={title} climate={climate}
                       population={population}
                       url={newUrl}
    />
}