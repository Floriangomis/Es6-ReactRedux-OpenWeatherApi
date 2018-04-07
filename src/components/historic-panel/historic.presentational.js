import React from 'react';

const HistoricPresentational = (props) => {
    const { historics, clickHandler} = props;
    return (
        <div className='historic-container'>
            <span style={ { 
                borderBottom: '1px solid black'
                } 
            }>
                City searched previously :
            </span>
            <ul style={ {
                    marginTop: '20px'
            } }>
                { 
                    historics.map( (historic) => {
                        return (
                            <li key={historic.cityId} onClick={ clickHandler.bind(this, historic.cityId) } > 
                                { historic.cityName } 
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default HistoricPresentational;