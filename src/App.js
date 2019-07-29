import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Supplies from './containers/Supplies/Supplies';
import Dogs from './containers/Dogs/Dogs';
import Cats from './containers/Cats/Cats';
import Home from './containers/Home/Home';
// import Gallery from './containers/Gallery/Gallery';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <Switch>
                <Route path="/supplies" component={Supplies} />
                <Route path="/dogs" component={Dogs} />
                <Route path="/cats" component={Cats} />
                <Route path="/" exact component={Home} />
            </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
