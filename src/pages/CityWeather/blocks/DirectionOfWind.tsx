import React from 'react';
import "./blocks.scss"
import NavigationIcon from '@material-ui/icons/Navigation';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {directionOfWind} from "../../../static";

interface DirectionOfWindProps {
    deg: number
}

export const DirectionOfWind: React.FC<DirectionOfWindProps> = ({deg}) => {
    return (
        <div className="direction-of-wind">
            <div className="compass">
                <div className="arrows-wrapper" style={{transform: `rotate(${deg}deg)`}}>
                    <NavigationIcon className="north-arrow" />
                    <FiberManualRecordIcon className="center-icon" />
                    <NavigationIcon className="south-arrow" />
                </div>
            </div>
            <div>{directionOfWind[Math.floor(+(deg / 45))]} ветер</div>
        </div>
    );
};
