import React from 'react';
import "./blocks.scss"

interface CityWeatherTitleProps {
    name?: string
}

export const CityWeatherTitle: React.FC<CityWeatherTitleProps> = ({name}) => (
    <div className="city-title">
        {name}
    </div>
)