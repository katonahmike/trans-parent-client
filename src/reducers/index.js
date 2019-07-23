import {combineReducers} from 'redux';
import transparentReducer from './transparentReducer';


export default combineReducers({
        procState:transparentReducer
});