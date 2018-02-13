/**
 * This is the actioncreator
 * @param user
 */
export function selectUser(user) { 
    //selectUser = (user) => {}
    console.log("Selected user: " + user.first + " " + user.last); 
    //the action inside this actionCreator. It will have type and payload in this case
    return {
        type: "USER_SELECTED", //type of action that has occurred
        payload: user
    };
}