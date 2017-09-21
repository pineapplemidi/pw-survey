require("../styles/application.scss")

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom'

// import AboutYou from './components/aboutYou.jsx'
import App from './app.jsx'
import SurveyContainer from './containers/surveyContainer.jsx'
import { NotFound } from './components/errors.jsx'

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/survey" component={SurveyContainer}/>
    </div>
  </BrowserRouter>
), document.getElementById('react-root'));
