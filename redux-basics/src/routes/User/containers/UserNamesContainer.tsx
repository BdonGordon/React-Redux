import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserNames from '../components/UserNames';
import { selectUser } from '../../../modules/users';
import { IUser } from '../../../models/User';

//Resource: https://www.youtube.com/watch?v=IIMUXbkKzW0

/**
 * This namespace is a good convention to follow as it will allow me to utilize the IProps, which extends
 * all the interfaces, to use the properties within each one. 
 */
export namespace UserNameProps {
    export interface IStateProps {
        users: Array<IUser>;
    }

    export interface IDispatchProps {
        selectUser: (user: IUser) => { selectUser }; 
    }

    export interface IProps extends IStateProps, IDispatchProps { }
}

/**
 * State should have a type based off of some props made, but we're not going to do that yet
 * @param state
 */
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

/**
 *Instead of passing selectUser directly, we're going to be passing it in as a prop to utilize
 * the Redux
 * @param dispatch ==> just calling a function
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser: selectUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNames);