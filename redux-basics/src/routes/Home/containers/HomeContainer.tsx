import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import { selectUser } from '../../../actions/index';

//Resource: https://www.youtube.com/watch?v=IIMUXbkKzW0

/**
 * This namespace is a good convention to follow as it will allow me to utilize the IProps, which extends
 * all the interfaces, to use the properties within each one. 
 */
export namespace HomeProps {
    export interface SampleProps {
        users: Array<any>;
    }

    export interface IDispatchProps {
        selectUser: (user: any) => { selectUser } ; 
    }

    export interface IProps extends SampleProps, IDispatchProps { }
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
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser: selectUser }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);