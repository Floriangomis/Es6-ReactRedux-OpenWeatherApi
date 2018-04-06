import React from 'react';
import { connect } from 'react-redux';

import DataDashboardPresentational from './datadashboard.presentational';

const mapStateToProps = state => {
    return { 
        currentCityDisplay: state.currentCityDisplay
    };
};

class DataDashboardContainer extends React.Component {
    render() {
        const { currentCityDisplay } = this.props;

        return (
            <DataDashboardPresentational currentCity={currentCityDisplay} />
        )
    }
}

const Dashboard = connect(mapStateToProps)(DataDashboardContainer);
export default Dashboard;