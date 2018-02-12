import { combineReducers } from 'redux';
import UserReducer from './reducer-users';
/**
* This is where all the reducers in the application will be combined (just like SRED)
*/

//any time another reducer is made, make sure to add it into this variable below (find out in the future tutorials
const allReducers = combineReducers({
    users: UserReducer
});

export default allReducers;