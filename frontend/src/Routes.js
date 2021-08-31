import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProductList from './components/ProductList';


class Routes extends Component {
    render() {
      return (
        <Router >
          <div>
            <Switch>
              <Route path="/">
                <ProductList />
              </Route>
            </Switch>
          </div>
        </Router>
      )
    }
  }
  
  export default Routes