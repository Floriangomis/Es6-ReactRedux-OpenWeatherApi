import React from 'react';

import Header from './header/header';
import Historic from './historic-panel/historic.container';
import Dashboard from './data-dashboard/datadashboard.container';

 class App extends React.Component {
    render() {
        const { title, subtitle, btns } = {
            title: 'W e a t h l y',
            subtitle: 'Type a city name and let\'s see how is the weather',
            btns: [
            ]
        };
        return (
            <React.Fragment>
                <Header title={title} btns={btns} subtitle={subtitle}/>
                <Historic /> 
                <Dashboard />
            </React.Fragment>        
        )
    }
}

export default App;