import { createStore, combineReducers } from 'redux';
import Basket from './basket';


const ConfigureStore = () => {
    return createStore(
        combineReducers({
            basket: Basket
        })
    );
}

export default ConfigureStore;