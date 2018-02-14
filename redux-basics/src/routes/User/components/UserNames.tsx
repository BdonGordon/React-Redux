import * as React from 'react';
import { UserNameProps } from '../containers/UserNamesContainer';

class UserNames extends React.Component<UserNameProps.IProps, null> {
    constructor(props: any) {
        super(props);
    }

    createList() {
        return this.props.users.map((user) => { //this was a problem since users property from SampleProps is option and CAN be undefined ? , therefore falsified strictNullChecks in tsconfig
            return (
                <li key={user.id} onClick={() => this.props.selectUser(user)} >
                    {user.first} {user.last}
                </li>
            );
        });
    }

    render() {
        return (
            <div className="App">
                <ul>
                    {this.createList()}
                </ul>
            </div>
        );
    }
}

export default UserNames;