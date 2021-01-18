import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//tailwind css
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";

import './App.css';
import Index from "./views/Index.js";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              {/*<Route exact path ='/' component={Landing} />*/}

              <Route path="/" exact component={Index} />
              {/* add redirect for first page */}
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
