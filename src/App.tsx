import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom"
import {CitySelectPage} from "./pages/CitySelectPage/CitySelectPage";
import {CityWeather} from "./pages/CityWeather/CityWeather";
import {AboutPage} from "./pages/AboutPage/AboutPage";
import {AppWrapper} from "./AppWrapper";

export const App: React.FC = () => (
        <AppWrapper>
            <Switch>
                <Route path={"/city_select"} component={CitySelectPage}/>
                <Route path={"/city_weather/:city"} component={CityWeather}/>
                <Route path={"/about"} component={AboutPage}/>
                <Redirect to={"/city_select"}/>
            </Switch>
        </AppWrapper>
    );