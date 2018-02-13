import * as React from 'react';
import UserNames from '../routes/User/index';

/**
* This would call the /routes/index but I'm not implementing routing just yet.
**/
class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <h4>User Names </h4>
                <UserNames />
                <hr />
                <h4>User Details </h4>
            </div>
            );
    }
}

export default Home;