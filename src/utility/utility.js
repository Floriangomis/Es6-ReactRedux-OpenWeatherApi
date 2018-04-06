import moment  from 'moment';
import uuid from 'uuid4';

export let formatDate = ( timestamp ) => {
    return moment(timestamp).format("MMM Do YY");  
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
    return array.filter( item => { 
        console.log(item.cityName);
        return item.cityName === name 
    } );
};