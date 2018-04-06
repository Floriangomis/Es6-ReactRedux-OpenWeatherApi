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
                        <React.Fragment>
                            <h3 className='city-name'>
                                Weather in 
                                <span> { props.currentCity.data.city.name } </span>
                                For the next 5 days.
                            </h3>
                            {
                                props.currentCity.data.list.map( (value) => {
                                    return (
                                        <WidgetWeather 
                                            key={value.dt} 
                                            date={value.dt_txt} 
                                            temp={value.main.temp} 
                                            weather={value.weather[0]['description']} />
                                    )
                                })
                            }
                        </React.Fragment>
                    )
                : 
                    (
                        <div className='no-data'>
                            <h1> No Data to display </h1>
                        </div>
                    )
            }
        </div>
    )
};

export default DataDashboardPresentational;