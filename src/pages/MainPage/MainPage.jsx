import React, {useState} from "react";
import {useFetch} from "../../hooks/hooks";
import Row from "react-bootstrap/Row";
import PlanetCard from "../../components/PlanetCard/PlanetCard";
import {Pagination} from "../../components";
import CustomSpinner from "../../components/Spinner/Spinner";

const MainPage = () => {
    const [url, setUrl] = useState('https://swapi.dev/api/planets/')
    const [isLoading, toggleLoading] = useState(true)
    const useFetchResponse = useFetch(url, [], toggleLoading)

    const changePage = (url) => {
        toggleLoading(true)
        setUrl(url)
        toggleLoading(false)
        window.scrollTo(0, 0);
    }

    if (isLoading) return <CustomSpinner/>

    return <div>
        <h1 className='pt-4 pb-4 text-center'>PLANET CARDS</h1>
        <Row>
            {useFetchResponse.results.map(item => {
                return <PlanetCard key={item.name}
                                   title={item.name}
                                   climate={item.climate}
                                   population={item.population}
                                   url={item.url}
                />
            })}

        </Row>
        <Pagination changePage={changePage}
                    prev={useFetchResponse.previous}
                    next={useFetchResponse.next}
        />
    </div>

}

export default MainPage