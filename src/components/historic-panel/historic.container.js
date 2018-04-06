import React from 'react';
import { connect } from 'react-redux';
import { updateCurrentCityDisplayed } from '../../actions/action-creator';

import { findObjectFromIdInArray } from "../../utility/utility";

import HistoricPresentational from './historic.presentational';

const mapDispatchToProps = dispatch => {
    return {
        updateCurrentCity: (cityObject) => dispatch(updateCurrentCityDisplayed(cityObject))
    };
};

const mapStateToProps = state => {
    return { 
        cityHistoric: state.cityHistoric,
        datacity: state.datacity
    };
};

class HistoricContainer extends React.Component {
    clickHandler = (cityId) => {
        const cityToDisplay = findObjectFromIdInArray(cityId, this.props.datacity)[0];
        // Trigger action which update the state of current city in the store and then display a new set of data in dashboard.
        this.props.updateCurrentCity( cityToDisplay );
    };
    render() {
        const { cityHistoric } = this.props;
        return (
            <HistoricPresentational historics={cityHistoric} clickHandler={this.clickHandler} />
        )
    }
}

const Historic = connect(mapStateToProps, mapDispatchToProps)(HistoricContainer);
export default Historic;