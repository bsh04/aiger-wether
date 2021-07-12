import React, {useEffect} from 'react';
import {useFetchWeather} from "./hooks/useFetchWeather";
import {APIRequestWrapper} from "../../features/APIRequestWrapper";
import {CityWeatherTitle} from "./blocks/CityWeatherTitle";
import {WeatherCardsContainer} from "./blocks/WeatherCardsContainer";
import {WeatherTabs} from "./blocks/WeatherTabs";
import {useHistory} from "react-router-dom";
import "./blocks/blocks.scss"
import {FavoriteButton} from "./blocks/FavoriteButton";

export const CityWeather: React.FC = () => {
    const {fetch, data, status} = useFetchWeather()
    const history = useHistory()

    useEffect(() => {
        fetch()
    }, [history.location.search])

    return (
        <APIRequestWrapper status={status}>
            <CityWeatherTitle name={data?.city.name}/>
            <div className="tabs-and-favorite">
                <WeatherTabs/>
                <FavoriteButton {...data?.city} />
            </div>
            <WeatherCardsContainer list={(data?.list || [])}/>
        </APIRequestWrapper>
    );
};
