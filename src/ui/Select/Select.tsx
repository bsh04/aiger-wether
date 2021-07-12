import React from 'react';
import "./Select.scss"
import {CityI} from "../../types";

interface CustomSelectProps extends React.HTMLProps<HTMLSelectElement> {
    options: Array<CityI>
}

export const Select: React.FC<CustomSelectProps> = (selectProps) => (
    <div className="input-group">
        <select className="form-select" {...selectProps} defaultValue="DEFAULT">
            <option disabled selected value="DEFAULT">Выберите город из списка</option>
            {selectProps.options.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
        </select>
    </div>
)