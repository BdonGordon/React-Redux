import * as React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div className="App">
                <h4> Username List: </h4>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
                <hr />
                <h4> User Details: </h4>
            </div>
        );
    }
}

export default Home;