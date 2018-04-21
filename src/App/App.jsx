import React from 'react';
// import PropTypes from 'proptypes';

import styles from './App.scss';
import Widget from './Widget/Widget';

class App extends React.Component {
  state = {
    currently: {},
    location: { lat: 40.0164, lon: -105.2858 },
  }

  componentDidMount() {
    fetch(`/api/weather/${this.state.location.lat}/${this.state.location.lon}`)
      .then(res => res.json())
      .then(data => this.setState({ currently: data.currently }));
  }

  render() {
    console.log('currently', this.state.currently);
    console.log('location', this.state.location);
    return (
      <div className={styles.app}>
        <Widget>{this.state.currently}</Widget>
      </div>
    );
  }
}

export default App;
