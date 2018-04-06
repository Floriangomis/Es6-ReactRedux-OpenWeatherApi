import React from 'react';

import WidgetWeather from './widget-weather/widgetweather';

const DataDashboardPresentational = (props) => {
    
    const checkDataIsAvailable = () => {
        return (props.currentCity && props.currentCity.data);
    };

    return (
        <div className='dashboard-container'>
            { 
                (checkDataIsAvailable()) ?
                    (
                        <div>
                            {
                                props.currentCity.data.list.map( (value) => {
                                    return (
                                        <WidgetWeather key={value.dt} date={value.dt_txt} temp={value.main.temp} weather={value.weather[0]['description']}/>
                                    )
                                })
                            }
                        </div>
                    )
                : 
                    (
                        <h1> No Data to display </h1>
                    )
            }
        </div>
    )
};

export default DataDashboardPresentational;