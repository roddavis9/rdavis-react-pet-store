import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Button from './common/UI/Button/Button';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <Button label={`continue`} fill={true} active={true} />
        </Layout>
      </div>
    );
  }
}

export default App;
