import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {useWeatherActionCreators, weatherSelectors} from "./redux/slices/weatherSlice";
import {getCities, setCities} from "./features/citiesManages";
import {staticSelectableCity} from "./static";
import "./index.css"

export const AppWrapper: React.FC = ({children}) => {
    const {pathname} = useLocation()
    const isReset = useSelector(weatherSelectors.getIsReset())
    const {setIsReset, reset} = useWeatherActionCreators()

    useEffect(() => {
        const interval = setInterval(() => setIsReset(), 60000) // reset storage once per minute
        return () => {
            window.clearInterval(interval)
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => { // When you start the application for the first time, add defaults cities to local storage
        const cities = getCities()
        if (!cities) {
            setCities(staticSelectableCity)
        }
    }, [])

    useEffect(() => {
        if (isReset && !pathname.includes("city_weather")) reset() // reset only if the user is not on the weather page
    }, [isReset, pathname, reset])

    return <div className="container">{children}</div>
};
