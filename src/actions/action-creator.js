export const searchCity = (city) => {
    return { 
        type: 'SEARCH_CITY',
        payload: city
    }
};

export const storeDataForCity = (data) => {
    return {
        type: 'STORE_DATA_CITY',
        payload: data
    }
};

export const updateCurrentCityDisplayed = (city) =>  {
    return {
        type: 'UPDATE_CURRENT_CITY',
        payload: city
    };
};