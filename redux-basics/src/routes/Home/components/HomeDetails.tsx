import * as React from 'react';
import { connect } from 'react-redux';

class UserDetail extends React.Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

/**
 * Put this in container later
 * @param state
 */
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}