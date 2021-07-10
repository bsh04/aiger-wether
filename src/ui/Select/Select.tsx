import React from 'react';
import "./Select.scss"
import {DefaultItemProps} from "../../types";

interface CustomSelectProps extends React.HTMLProps<HTMLSelectElement> {
    options: Array<DefaultItemProps>
}

export const Select: React.FC<CustomSelectProps> = (selectProps) => {
    return (
        <div className="input-group mb-3">
            <select className="form-select" {...selectProps}>
                {selectProps.options.map(({id, name}) => <option value={id}>{name}</option>)}
            </select>
        </div>
    );
};
