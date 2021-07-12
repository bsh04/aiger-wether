import React from 'react';
import "./blocks.scss"
import NavigationIcon from '@material-ui/icons/Navigation';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {directionOfWind, shortDirectionOfWind} from "../../../static";
import {getWindIndex} from "../../../helpers";

interface DirectionOfWindProps {
    deg: number
}

export const DirectionOfWind: React.FC<DirectionOfWindProps> = ({deg}) => (
    <div className="direction-of-wind">
        <div className="compass">
            <div className="letter-wrapper">
                {shortDirectionOfWind.map((item) => <div key={item} className="direction-of-wind-letter">{item}</div>)}
            </div>
            <div className="arrows-wrapper" style={{transform: `rotate(${deg}deg)`}}>
                <NavigationIcon className="north-arrow"/>
                <FiberManualRecordIcon className="center-icon"/>
                <NavigationIcon className="south-arrow"/>
            </div>
        </div>
        <div>{directionOfWind[getWindIndex(deg)]} ветер</div>
    </div>
)
