import { combineReducers } from 'redux';
import UserReducer from '../data/user-base';
import { activeUserReducer } from '../modules/users';

/**
* This is where all the reducers in the application will be combined (just like SRED)
*/

//any time another reducer is made, make sure to add it into this variable below (find out in the future tutorials
const allReducers = combineReducers({
    users: UserReducer,
    activeUser: activeUserReducer
});

export default allReducers;