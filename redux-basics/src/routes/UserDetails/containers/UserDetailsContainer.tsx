import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IUser } from '../../../models/User';
import UserDetails from '../components/UserDetails';


export namespace UserDetailProps {
    export interface IStateProps {
        user: IUser;
    }

    export interface IProps extends IStateProps { }

    export interface IState {

    }
}

function mapStateToProps(state: any) {
    return {
        user: state.activeUser
    };
}


export default connect(mapStateToProps)(UserDetails);