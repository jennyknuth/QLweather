import React from 'react';
// import PropTypes from 'proptypes';

import api from '../data/api';

import styles from './App.scss';
import Widget from './Widget/Widget';

class App extends React.Component {
  state = {
    currently: {},
  }

  async componentWillMount() {
    const { currently } = await api.fetchWeatherData();
    this.setState({ currently });
  }

  render() {
    return (
      <div className={styles.app}>
        <Widget>{this.state.currently}</Widget>
      </div>
    );
  }
}

export default App;
