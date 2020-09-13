import * as ActionTypes from './ActionTypes';

const Basket = (state = {
    items: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_TO_BASKET:
            return { ...state, items: state.items.concat(action.payload)};
        
        default:
            return state;
    }
}

export default Basket;