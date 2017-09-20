import React, {Component} from 'react';

import Home from './components/home.jsx'

class App extends Component {

  render() {
    return (
      <div className='app'>
        <div>
          <img
            className='background-logo'
            src="../../build/PW_apple.png"
          />
        </div>
        <Home />
        <button className='continue-button'></button>
      </div>
    );
  }
}

export default App;
