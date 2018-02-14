import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UserDetailProps } from '../containers/UserDetailsContainer';

/*const initialState: UserDetailProps.IState = {
    id: 0,
    first: '',
    last: '',
    age: 0,
    description: ''
};*/

//<UserDetailProps.IProps, UserDetailProps.IState>

class UserDetails extends React.Component<UserDetailProps.IProps, null> {
    constructor(props: UserDetailProps.IProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <h5>Brandon Gordon </h5>
                <h5> {this.props.user.first} </h5>
            </div>
        );
    }
}
//<h5> {this.props.user.first} </h5>
export default UserDetails;