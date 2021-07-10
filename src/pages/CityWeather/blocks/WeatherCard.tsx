import React from 'react';
import {CityDataI} from "../../../types";
import "./blocks.scss"
import {getDate} from "../../../helpers";
import {openweatherImageUrl} from "../../../config.json"
import {DirectionOfWind} from "./DirectionOfWind";

const parseIconUrl = (icon: string) => openweatherImageUrl + icon + ".png"

export const WeatherCard: React.FC<CityDataI> = ({dt, dt_txt, weather, main, sys, wind}) => {
    const {time, date} = getDate(dt)
    return (
        <div className="cardContainer">
            <div className="main">
                <div className="date-and-time">{date} {time}</div>
                <div className="description">
                    <span>{weather[0].description}</span>
                    <img src={parseIconUrl(weather[0].icon)} alt=""/>
                </div>
                <div>+ {main.temp.toFixed(1)}&deg;</div>
                <div>{wind.speed} м/с</div>
            </div>
            <DirectionOfWind deg={wind.deg}/>
        </div>
    );
};
