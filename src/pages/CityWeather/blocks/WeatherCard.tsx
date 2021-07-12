import React, {memo} from 'react';
import {CityDataI, WeatherTabsIds} from "../../../types";
import "./blocks.scss"
import {getDate, parseIconUrl, parsePrecipitation, toCapitalizeCollocation} from "../../../helpers";
import {DirectionOfWind} from "./DirectionOfWind";
import classNames from "classnames";
import {useQuery} from "../hooks/useQuery";

interface WeatherCardProps extends CityDataI {}

export const WeatherCard: React.FC<WeatherCardProps> = memo(({weather, main, wind, snow, rain, dt_txt, dt}) => {
    const {time, date} = getDate(dt_txt, dt)
    const weatherData = weather[0] // only one item always comes

    const {selectedTab} = useQuery()

    return (
        <div className="card-wrapper">
            <div className={classNames("card-container", {"now-card": selectedTab === WeatherTabsIds.Now})}>
                <div className="main">
                    <div className="date-and-time">{date} {time}</div>
                    <div className="description">
                        <span>{toCapitalizeCollocation(weatherData.description)}</span>
                        <img src={parseIconUrl(weatherData.icon)} alt=""/>
                    </div>
                    <div className="block"><span>Температура воздуха:</span><p>&nbsp;{main.temp.toFixed(1)}&deg;</p></div>
                    <div className="block"><span>Скорость ветра:</span><p>&nbsp;{wind.speed} м/с</p></div>
                </div>
                <DirectionOfWind deg={wind.deg}/>
                {parsePrecipitation({snow, rain})}
            </div>
        </div>
    );
})
