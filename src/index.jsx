require("../styles/application.scss")

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom'

import AboutYou from './components/aboutYou.jsx'
import App from './app.jsx'
import { NotFound } from './components/errors.jsx'

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/test" component={AboutYou}/>
    </div>
  </BrowserRouter>
), document.getElementById('react-root'));
