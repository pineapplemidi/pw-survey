require("../styles/application.scss")

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import AboutYou from './components/aboutYou.jsx'
import App from './app.jsx'
import SurveyContainer from './containers/surveyContainer.jsx'

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/survey/:page" component={SurveyContainer} />
      </Switch>
    </div>
  </BrowserRouter>
), document.getElementById('react-root'));
