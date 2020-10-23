import React, {useState} from "react";
import {useFetch} from "../../hooks/hooks";
import {NotFound} from "../../components/NotFound/NotFound";
import {CustomSpinner} from "../../components/CustomSpinner/CustomSpinner";
import {useHistory} from "react-router-dom";
import {PlanetPage} from "./PlanetPage";


export const PlanetPageContainer = () => {
    const history = useHistory();
    const url = `https://swapi.dev/api${history.location.pathname}`
    const [isLoading, toggleLoading] = useState(true)
    const data = useFetch(url, [], toggleLoading)

    if (isLoading) return <CustomSpinner/>

    if (data.detail) return <NotFound text='Planet not found :('/>

    return <PlanetPage data={data}/>
}