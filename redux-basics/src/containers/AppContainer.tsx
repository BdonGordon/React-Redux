import * as React from 'react';
import { createStore } from 'redux';
import allReducers from '../store/reducers';
import Home from '../routes/Home/index'; //Grabbing it from index gets rid of the error "property 'users' is missing in type '{}'." 
import { Provider } from 'react-redux';

//create a constant variable that refers to the createStore method from redux
const store = createStore(allReducers);

/**
 * The <Provider store={store} is taking the store and making it available to every single component
 * in the application. Every component and container will have access to all the app's data
 */
class AppContainer extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Home />
                </Provider>
            </div>
        );
    }
}

export default AppContainer;