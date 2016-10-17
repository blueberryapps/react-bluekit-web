import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Demo from './components/demo/Page';
import Index from './components/Index/Index';
import './styles/main.sass';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Index} />
    <Route path="/demo" component={Demo} />
  </Router>
), document.getElementById('js-main'))
