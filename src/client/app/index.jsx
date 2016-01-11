import 'babel-polyfill'
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link} from 'react-router'
import {Provider} from 'react-redux';
import configureStore from './store/configureStore.js'
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/App.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'

const store = configureStore()
injectTapEventPlugin();

render(( 
        <Router>
          <Route path="/" component={App}>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Route>
        </Router>
       ), document.getElementById('root'))
