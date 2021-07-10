import React from 'react';
import {WeatherCard} from "./WeatherCard";
import "./blocks.scss"
import {CityDataI} from "../../../types";

interface WeatherCardsContainerProps {
    list: Array<CityDataI>
}

export const WeatherCardsContainer: React.FC<WeatherCardsContainerProps> = ({list}) => (
    <div className="cards-container">
        {list.map((item) => <WeatherCard key={item.dt} {...item} />)}
    </div>
)