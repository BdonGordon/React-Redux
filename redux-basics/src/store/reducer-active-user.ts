/**
* Determines which user is selected. It's listening for the "announcement" made by /actions/index
* ACTIONS WILL BE SENT TO ALL REDUCERS
**/

function activeUserReducer(state=null, action) {
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

export default activeUserReducer;