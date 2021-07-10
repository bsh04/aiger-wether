import React from 'react';
import {useSelector} from "react-redux";
import {weatherSelectors} from "../../../redux/slices/weatherSlice";
import "./blocks.scss"

export const CityWeatherTitle = () => {
    const data = useSelector(weatherSelectors.getData())

    return (
        <div className="titleContainer">
            <div className="citySelected">
                {data?.city.name}
            </div>
        </div>
    );
};
