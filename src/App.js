import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Gallery from './containers/Gallery/Gallery';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <Gallery />
        </Layout>
      </div>
    );
  }
}

export default App;
