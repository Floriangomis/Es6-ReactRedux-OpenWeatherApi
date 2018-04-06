import React from 'react';
import { stringToIcon } from '../../../utility/utility';

const WidgetWeather = (props) => {
    
    const checkDataIsAvailable = () => {
        return (props.currentCity && props.currentCity.data);
    };

    const { date, temp, weather } = props;

    return (
        <div className="widget-container">
            <div>
                { date }
            </div>

            <div>
                { temp } °C
            </div>

            <div>
                <img src={ stringToIcon(weather) } style={ { width: '20px', height: '20px', marginTop: '20px'} } />
            </div>
        </div>
    )
};

export default WidgetWeather;