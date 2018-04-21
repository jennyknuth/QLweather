import React from 'react';
// import PropTypes from 'proptypes';

import styles from './App.scss';
import Widget from './Widget/Widget';

class App extends React.Component {
  state = {
    currently: {},
  }

  async componentDidMount() {
    fetch('/api/weather')
      .then(res => res.json())
      .then(data => this.setState({ currently: data.currently }));
  }

  render() {
    console.log('currently', this.state.currently);
    return (
      <div className={styles.app}>
        <Widget>{this.state.currently}</Widget>
      </div>
    );
  }
}

export default App;
