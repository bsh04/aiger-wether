import React, {useEffect} from 'react';
import {useFetchWeather} from "./hooks/useFetchWeather";
import {APIRequestWrapper} from "../../features/APIRequestWrapper";
import {CityWeatherTitle} from "./blocks/CityWeatherTitle";
import {WeatherCardsContainer} from "./blocks/WeatherCardsContainer";
import {WeatherTabs} from "./blocks/WeatherTabs";
import {useHistory} from "react-router-dom";

export const CityWeather: React.FC = () => {
    const {fetch, data, status} = useFetchWeather()
    const history = useHistory()

    useEffect(() => {
        fetch()
    }, [history.location.search])

    return (
        <APIRequestWrapper status={status}>
            <CityWeatherTitle name={data?.city.name}/>
            <WeatherTabs/>
            <WeatherCardsContainer list={(data?.list || [])}/>
        </APIRequestWrapper>
    );
};
