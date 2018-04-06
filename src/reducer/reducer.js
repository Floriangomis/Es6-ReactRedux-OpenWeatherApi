export const reducer = (state = {}, action) => {
    switch (action.type) {
        
        case 'SEARCH_CITY':
            return {
                ...state,
                cityHistoric: [
                    ...state.cityHistoric,
                    action.payload
                ]
            };

        case 'STORE_DATA_CITY':
            return {
                ...state,
                datacity: [
                    ...state.datacity,
                    action.payload
                ]
            };

        case 'UPDATE_CURRENT_CITY':
            return {
                ...state,
                currentCityDisplay: action.payload
            };

        case 'CLICK_HISTORIC':
            return {
                ...state,
            };
        default:
            return state;
    }
};