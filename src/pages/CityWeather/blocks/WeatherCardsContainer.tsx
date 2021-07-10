import React from 'react';
import {WeatherCard} from "./WeatherCard";
import {useSelector} from "react-redux";
import {weatherSelectors} from "../../../redux/slices/weatherSlice";
import "./blocks.scss"

export const WeatherCardsContainer = () => {
    const data = useSelector(weatherSelectors.getData())
    return (
        <div className="cardsContainer">
            {data?.list.map((item) => <WeatherCard key={item.dt} {...item} />)}
        </div>
    );
};
