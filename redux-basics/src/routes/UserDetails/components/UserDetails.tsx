import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

interface IProps {
    user: string;
}

class UserDetails extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <p> User details are here</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetails);