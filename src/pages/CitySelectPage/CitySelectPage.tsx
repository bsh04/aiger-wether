import React from 'react';
import "./CitySelectPage.scss"
import {Input} from "../../ui/Input/Input";
import {Select} from "../../ui/Select/Select";
import {staticSelectableCity} from "../../static";
import {useHistory} from "react-router-dom"

export const CitySelectPage: React.FC = () => {
    const {push} = useHistory()

    const handleSearch = (e: any) => push(`/city_weather/${e.target.value}`)

    return (
        <div className="CitySelectPageContainer">
            <div className="title">
                <h2>Привет! Хотите быстро узнать погоду? Это к нам!</h2>
                <p>Вы можете выбрать город из выпадающего списка или ввести свой город вручную</p>
            </div>
            <div className="form">
                <div className="select-city">
                    <label htmlFor="selectCity">Выберите город</label>
                    <Select options={staticSelectableCity} onChange={handleSearch} />
                </div>
                <div className="search-city">
                    <label htmlFor="searchCity">Введите название города</label>
                    <Input id="searchCity" placeholder="Введите название" onKeyPress={(e) => e.code === "Enter" && handleSearch(e)} />
                </div>
            </div>
        </div>
    );
};
