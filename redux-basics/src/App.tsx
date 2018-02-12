import * as React from 'react';
import './App.css';
import Header from './header';
import AppContainer from './containers/AppContainer';

class App extends React.Component {
  render() {
    return (
      <div>
            <Header />
            <AppContainer />
      </div>
    );
  }
}

export default App;
