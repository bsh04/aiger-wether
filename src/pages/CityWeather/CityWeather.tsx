import React from 'react';
import {useFetchWeather} from "./hooks/useFetchWeather";
import {useSelector} from "react-redux";
import {weatherSelectors} from "../../redux/slices/weatherSlice";
import {APIRequestWrapper} from "../../features/APIRequestWrapper";
import {CityWeatherTitle} from "./blocks/CityWeatherTitle";
import {WeatherCardsContainer} from "./blocks/WeatherCardsContainer";

export const CityWeather: React.FC = () => {
    useFetchWeather()
    const status = useSelector(weatherSelectors.getStatus())
    const data = useSelector(weatherSelectors.getData())

    return (
        <APIRequestWrapper status={status}>
            <CityWeatherTitle name={data?.city.name} />
            <WeatherCardsContainer list={(data?.list || [])} />
        </APIRequestWrapper>
    );
};
