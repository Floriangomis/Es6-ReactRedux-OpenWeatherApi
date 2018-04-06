import React from 'react';

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
                                        <p key={ value.dt }>  
                                            Date : { value.dt_txt} 
                                            <br />
                                            Temp : { value.main.temp } Celcius
                                            <br />
                                            Weather : { value.weather[0]['description'] }
                                        </p>
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