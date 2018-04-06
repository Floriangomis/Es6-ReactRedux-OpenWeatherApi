import moment  from 'moment';
import uuid from 'uuid4';

import * as cloudyIcon from '../style/icons/cloud.svg';
import * as sunnyIcon from '../style/icons/sun.svg';
import * as rainyIcon from '../style/icons/icon.svg';
import * as snowyIcon from '../style/icons/ice-crystal.svg';

export let formatDate = ( timestamp ) => {
    return moment(timestamp).format("LLLL");  
};

export let generateUniqueId = () => {
    return uuid();
};

export let checkThatACityIsNotInHistorics = (cityName, cityHistorics) => {
    let occurence = 0;
    cityHistorics.map( (historicValue) => {
        if(cityName === historicValue.cityName) {
            occurence++;
        }
    });
    return occurence;
};

export let findObjectFromIdInArray = (id, array) => {
    return array.filter( item => item.id === id);
};

export let findObjectFromNameInarray = (name, array) => {
    return array.filter( item => item.cityName === name );
};

export let stringToIcon = (string) => {
        if(string.includes('sky')){
            return sunnyIcon;
        } else if( string.includes('snow') ) {
            return snowyIcon;
        } else if(string.includes('rain')) {
            return rainyIcon;
        } else if (string.includes('cloud')) {
            return cloudyIcon;
        }
};