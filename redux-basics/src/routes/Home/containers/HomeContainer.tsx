import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';

//Resource: https://www.youtube.com/watch?v=IIMUXbkKzW0

export interface SampleProps {
    users: Array<any>;
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

export default connect(mapStateToProps)(Home);