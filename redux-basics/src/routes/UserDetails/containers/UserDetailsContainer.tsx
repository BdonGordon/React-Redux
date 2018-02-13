import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';

export namespace UserDetailProps {
    export interface SampleProps {
        
    }

}


function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}
