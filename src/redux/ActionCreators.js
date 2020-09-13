import * as ActionTypes from './ActionTypes';


export const addToBasket = (item) => ({
    type: ActionTypes.ADD_TO_BASKET,
    payload: item
})