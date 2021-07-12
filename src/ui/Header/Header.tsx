import React from 'react';
import {Link} from "react-router-dom"
import "./Header.scss"
import WbSunnyIcon from '@material-ui/icons/WbSunny';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand brand" to="/">
                    <WbSunnyIcon/>
                    <p>AigerWeather</p>
                </Link>
                <Link className="btn about" to="/about" type="submit">О сервисе</Link>
            </div>
        </nav>
    );
}
