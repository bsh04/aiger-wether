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
        <div className="DirectionOfWind">
            <div className="compass">
                <div className="arrows-wrapper" style={{transform: `rotate(${deg}deg)`}}>
                    <NavigationIcon className="northArrow" />
                    <FiberManualRecordIcon className="centerIcon" />
                    <NavigationIcon className="southArrow" />
                </div>
            </div>
            <div>{directionOfWind[+(deg / 45).toFixed()]} ветер</div>
        </div>
    );
};
