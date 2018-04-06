import React from 'react';
import { stringToIcon, formatDate } from '../../../utility/utility';

const WidgetWeather = (props) => {
    const { date, temp, weather } = props;
    return (
        <div className="widget-container">
            <div>
                { formatDate(date) }
            </div>
            <div style={ { marginTop: '20px'} }>
                { temp } °C
            </div>
            <div>
                <img alt="weather icon" src={ stringToIcon(weather) } style={ { width: '40px', height: '40px', marginTop: '20px'} } />
            </div>
            <div style={ { fontSize: '12px' } }>
                { weather }
            </div>
        </div>
    )
};

export default WidgetWeather;