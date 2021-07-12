import React, {useEffect} from 'react';
import {Switch, Route, Redirect, useLocation} from "react-router-dom"
import {CitySelectPage} from "./pages/CitySelectPage/CitySelectPage";
import {CityWeather} from "./pages/CityWeather/CityWeather";
import {AboutPage} from "./pages/AboutPage/AboutPage";
import {useSelector} from "react-redux";
import {useWeatherActionCreators, weatherSelectors} from "./redux/slices/weatherSlice";
import {staticSelectableCity} from "./static";
import {getCities, setCities} from "./features/citiesManages";

export const App: React.FC = () => {
    const {pathname} = useLocation()
    const isReset = useSelector(weatherSelectors.getIsReset())
    const {setIsReset, reset} = useWeatherActionCreators()

    useEffect(() => {
        const interval = setInterval(() => setIsReset(), 100000) // reset storage once per minute
        return () => {
            window.clearInterval(interval)
        }
    }, [setIsReset])

    useEffect(() => {
        const cities = getCities()
        if (!cities) {
            setCities(staticSelectableCity)
        }
    }, [])

    useEffect(() => {
        if (isReset && !pathname.includes("city_weather")) reset() // reset only if the user is not on the weather page
    }, [isReset, pathname, reset])

    return (
        <div className="container">
            <Switch>
                <Route path={"/city_select"} component={CitySelectPage}/>
                <Route path={"/city_weather/:city"} component={CityWeather}/>
                <Route path={"/about"} component={AboutPage}/>
                <Redirect to={"/city_select"}/>
            </Switch>
        </div>
    );
}
