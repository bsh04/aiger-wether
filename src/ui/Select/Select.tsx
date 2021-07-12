import React from 'react';
import "./Select.scss"
import {CityI} from "../../types";
import StarRateIcon from '@material-ui/icons/StarRate';
import classNames from "classnames";

interface CustomSelectProps extends React.HTMLProps<HTMLSelectElement> {
    options: Array<CityI>
}

export const Select: React.FC<CustomSelectProps> = (selectProps) => {
    return (
        <div className="input-group">
            <select className="form-select" {...selectProps}>
                <option disabled selected defaultValue="1">Выберите город из списка</option>
                {selectProps.options.map(({id, name, init}) =>
                    <option
                        key={id}
                        value={id}
                        className={classNames({"favorite": !init})}
                    >
                        {name}
                    </option>
                )}
            </select>
        </div>
    );
};
