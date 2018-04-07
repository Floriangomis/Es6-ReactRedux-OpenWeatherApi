import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchCity, storeDataForCity, updateCurrentCityDisplayed } from '../../actions/action-creator';
import { getRequest } from '../../utility/request';
import { config } from '../../utility/config';
import { generateUniqueId, checkThatACityIsNotInHistorics, findObjectFromNameInarray, findObjectFromIdInArray } from '../../utility/utility';

const mapStateToProps = state => {
    return { 
        cityHistoric: state.cityHistoric,
        datacity: state.datacity
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

    state = {
        errMessage: ''
    }

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
    // Function to retrieve data from store instead of making an http request done in the past
    retrieveDataFromStore = (citySearched) => {
        const { cityHistoric, datacity } = this.props;
        // Select from history this way we saved an http call.
        const filteredArray = findObjectFromNameInarray(citySearched, cityHistoric)[0];
        const cityToDisplay = findObjectFromIdInArray(filteredArray.cityId, datacity)[0];
        // Trigger action which update the state of current city in the store and then display a new set of data in dashboard.
        this.props.updateCurrentCity( cityToDisplay );
    };
    // Click handler on search button
    handleSearchClick = () => {
        this.search();
    };
    // Handle the enter press button when focus is on the input
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.search();
        }
    };
    // Process a search via the API or via the redux store
    search() {
        // Reset the error message
        this.setState({
            ...this.state,
            errMessage: ''
        });
        // This replace function avoid to let user enter 'Paris' and ' Paris'. And to lowerCase to avoid 'Rouen' and 'rouen'.
        const citySearched = this.inputCity.current.value.replace(/\s+/g, '').toLowerCase();
        const { cityHistoric } = this.props;

        // If the city name isn't found in the historics state then do the call.
        if(!checkThatACityIsNotInHistorics(citySearched, cityHistoric)) {
            getRequest(`${config.apiUrl}${citySearched}&APPID=${config.apiKey}&units=metric`, config.requestConfig).then( (data)=>{
                const uniqueId = generateUniqueId();
                this.triggerSearchAction(citySearched, uniqueId);
                this.triggerStoreDataCity(data, uniqueId);
                this.triggerUpdateCurrentCity(data);
            }, (err) => {
                const e = JSON.stringify(err);
                if(e.includes('400')) {
                    this.setState({
                        ...this.state,
                        errMessage: 'Enter a city name'
                    });
                } else if ( e.includes('404')) {
                    this.setState({
                        ...this.state,
                        errMessage: 'City Not found please retry with another name'
                    });
                }
                // use something to log the error
                // We could also display an error message on the UI
                return; // Just return nothing for now.
            });
        } else {
            this.retrieveDataFromStore(citySearched);
        }
        this.inputCity.current.value = '';
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
                        <input ref={this.inputCity} type="text" onKeyPress={ this.handleKeyPress  } />
                        <button onClick={  this.handleSearchClick } > Search ! </button>
                    </div>
                    {
                        (this.state.errMessage) ?
                            <div className='err-msg'>
                                { this.state.errMessage }
                            </div>
                        :
                            ''
                    }
                </div>
            </header>
        )
    };
};

const HeaderConnected = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderConnected;