import React, {useState} from "react";
import {useFetch} from "../../hooks/hooks";
import {CustomSpinner} from "../../components/CustomSpinner/CustomSpinner";
import {MainPage} from "./MainPage";

export const MainPageContainer = () => {
    const [url, setUrl] = useState('https://swapi.dev/api/planets/')
    const [isLoading, toggleLoading] = useState(true)
    const response = useFetch(url, [], toggleLoading)

    const changePage = (url) => {
        toggleLoading(true)
        setUrl(url)
        toggleLoading(false)
        window.scrollTo(0, 0);
    }

    if (isLoading) return <CustomSpinner/>

    return <MainPage response={response}
                     changePage={changePage}
    />
}