import React, {useEffect} from 'react';
import {useFetchWeather} from "./hooks/useFetchWeather";
import {APIRequestWrapper} from "../../features/APIRequestWrapper";
import {CityWeatherTitle} from "./blocks/CityWeatherTitle";
import {WeatherCardsContainer} from "./blocks/WeatherCardsContainer";
import {WeatherTabs} from "./blocks/WeatherTabs";
import {useHistory} from "react-router-dom";
import "./blocks/blocks.scss"
import {ActionsButton} from "./blocks/ActionsButton";

export const CityWeather: React.FC = () => {
    const {fetch, data, status} = useFetchWeather()
    const history = useHistory()

    useEffect(() => {
        fetch()
        // eslint-disable-next-line
    }, [history.location.search])

    return (
        <div className="city-weather-container">
            <APIRequestWrapper status={status}>
                <div className="title-and-favorite">
                    <CityWeatherTitle name={data?.city.name}/>
                    <ActionsButton {...data?.city} />
                </div>
                <WeatherTabs/>
                <WeatherCardsContainer timezone={data?.city.timezone} list={(data?.list || [])}/>
            </APIRequestWrapper>
        </div>
    );
};
