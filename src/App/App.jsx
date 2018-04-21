import React from 'react';
import Widget from './Widget/Widget';

import styles from './App.scss';

class App extends React.Component {
  state = {
    currently: {},
    loading: true,
    location: {},
    value: window.location.search && window.location.search.split('=')[1].replace('+', ' '),
  }

  componentDidMount() {
    const city = window.location.search ? window.location.search.split('=')[1] : '?city=boulder';
    fetch(`/location/${city}`)
      .then(res => res.json())
      .then((loc) => {
        this.setState({ location: loc });
        fetch(`/api/weather/${loc.lat}/${loc.lng}`)
          .then(res => res.json())
          .then((data) => {
            this.setState({ currently: data.currently });
            this.setState({ loading: false });
          })
          .catch(error => console.log(error));
      });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    console.log('currently', this.state.currently);
    console.log('location', this.state.location);
    console.log('value', this.state.value);
    return (
      <div className={styles.app}>
        <form>
          <label htmlFor='city'>
            Type in a city name:
          </label>
          <input name='city' type="text" value={this.state.value} onChange={e => this.handleChange(e)} />
          <input type="submit" value="Submit" />
        </form>
        <Widget>{this.state.currently}</Widget>
      </div>
    );
  }
}

export default App;
