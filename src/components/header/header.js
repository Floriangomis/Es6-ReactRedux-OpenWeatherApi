import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchCity, storeDataForCity, updateCurrentCityDisplayed } from '../../actions/action-creator';
import { getRequest } from '../../utility/request';
import { config } from '../../utility/config';
import { generateUniqueId, checkThatACityIsNotInHistorics } from '../../utility/utility';

const mapStateToProps = state => {
    return { 
        cityHistoric: state.cityHistoric
    };
};
const mapDispatchToProps = dispatch => {
    return {
        searchCity: (cityObject) => dispatch(searchCity(cityObject)),
        storeDataForCity: (dataObject) => dispatch(storeDataForCity(dataObject)),
        updateCurrentCity: (cityObject) => dispatch(updateCurrentCityDisplayed(cityObject))
    };
};

class Header extends Component {

    inputCity = React.createRef();
    
    // Dispatch Action concerning the Search
    triggerSearchAction = (citySearched, uniqueId) => {
        this.props.searchCity(
            {
                cityId: uniqueId,
                cityName: citySearched,
            }
        );
    };
    // Dispatch Action concerning the data from the APi
    triggerStoreDataCity = (data, uniqueId) => {
        this.props.storeDataForCity(
            {
                id: uniqueId,
                data: data.data
            }
        );
    };
    // Dispatch action which update current city to display in dashboard
    triggerUpdateCurrentCity = (data) => {
        this.props.updateCurrentCity(
            {
                data: data.data
            }
        );
    };

    handleSearchClick = () => {
        const citySearched = this.inputCity.current.value;
        const { cityHistoric } = this.props;

        // If the city name isn't found in the historics state then do the call.
        if(!checkThatACityIsNotInHistorics(citySearched, cityHistoric)) {
            getRequest(`${config.apiUrl}${citySearched}&APPID=${config.apiKey}`, config.requestConfi).then( (data)=>{
                const uniqueId = generateUniqueId();
                this.triggerSearchAction(citySearched, uniqueId);
                this.triggerStoreDataCity(data, uniqueId);
                this.triggerUpdateCurrentCity(data);
            }, (err) => {
                // use something to log the error
                // We could also display an error message on the UI
                return; // Just return nothing for now.
            });
        } else {
            // Select from history this way we saved a called.
        }
    };

    render() {
        const { title, subtitle, btns } = this.props;
        return (
            <header className='header-container'>
                <div className='header-wrapper'>
                    <a href="/">
                        <h1  className='title'>
                            { title }
                        </h1>
                    </a>
                    <div className='subtitle'>
                        { subtitle }
                    </div>
                    <div>
                        {
                            btns.map( (btn, index) => {
                                return ( 
                                    <a key={index} href={btn.link}>
                                        <i className={btn.icon + ' icon'} > </i> 
                                    </a>
                                )
                            })
                        }
                    </div>
                    <div>
                        <input ref={this.inputCity} type="text" />
                        <button onClick={ () => { this.handleSearchClick() } } > Search ! </button>
                    </div>
                </div>
            </header>
        )
    };
};

const HeaderConnected = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderConnected;