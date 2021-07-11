import React from 'react';
import {CityDataI} from "../../../types";
import "./blocks.scss"
import {getDate, parseIconUrl, parsePrecipitation} from "../../../helpers";
import {DirectionOfWind} from "./DirectionOfWind";

export const WeatherCard: React.FC<CityDataI> = ({dt, weather, main, sys, wind, snow, rain}) => {
    const {time, date} = getDate(dt)
    const weatherData = weather[0] // only one item always comes

    return (
        <div className="card-container">
            <div className="main">
                <div className="date-and-time">{date} {time}</div>
                <div className="description">
                    <span>{weatherData.description}</span>
                    <img src={parseIconUrl(weatherData.icon)} alt=""/>
                </div>
                <div>+ {main.temp.toFixed(1)}&deg;</div>
                <div>{wind.speed} м/с</div>
            </div>
            <DirectionOfWind deg={wind.deg}/>
            {parsePrecipitation({snow, rain})}
        </div>
    );
};
