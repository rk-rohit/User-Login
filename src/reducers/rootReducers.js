import employeeReducers from './employeeReducers';
import authReducers from './authReducers';
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    auth: authReducers,
    employee : employeeReducers
})

export default rootReducers;