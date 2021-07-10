import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom"
import {CitySelectPage} from "./pages/CitySelectPage/CitySelectPage";
import {CityWeather} from "./pages/CityWeather/CityWeather";

export const App: React.FC = () => {
    return (
        <div className="container">
            <Switch>
                <Route path={"/city_select"} component={CitySelectPage}/>
                <Route path={"/city_weather/:city"} component={CityWeather}/>
                <Redirect to={"/city_select"}/>
            </Switch>
        </div>
    );
}
