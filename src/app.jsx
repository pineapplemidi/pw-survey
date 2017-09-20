import React, { Component } from 'react';

import Home from './components/home.jsx'

class App extends Component {

  // render() {
  //   return (
  //     <div className='app'>
  //       <Switch>
  //         <Route path='/' component={Home} />
  //         <Route path='/test' component={NotFound} />
  //       </Switch>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className='app'>
        <Home />
      </div>
    )
  }
}

export default App;
