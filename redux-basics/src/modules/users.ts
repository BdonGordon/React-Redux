import { IUser } from '../models/User';

/**
 * This is the actioncreator.
 * All this does is just let the application know that an action has OCCURRED. The REDUCERS are
 * responsible for taking care of what to do with these actions. 
 * @param user
 */
export function selectUser(user: IUser) {
    //selectUser = (user) => {}
    console.log("Selected user: " + user.first + " " + user.last);

    //the action inside this actionCreator. It will have type and payload in this case
    return {
        type: "USER_SELECTED", //type of action that has occurred
        payload: user
    };
}


/**
* Determines which user is selected. It's listening for the "announcement" made by /actions/index
* ACTIONS WILL BE SENT TO ALL REDUCERS
**/
export function activeUserReducer(state = {}, action) {
    switch (action.type) {
        case "USER_SELECTED":
            //return some piece of data - ALWAYS. In this case, we are returning the payload (the user) 
            return action.payload;
            //break would be unreachable because it gets to return

        default:
            break;
    }

    return state;
}