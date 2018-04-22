import React from 'react';
import classNames from 'classnames';
import iconToTheme from './Shared/iconToTheme';
import Widget from './Widget/Widget';

import styles from './App.scss';
import theme from './Shared/Color.scss';

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
          });
      });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    console.log('currently', this.state.currently);
    console.log('location', this.state.location);
    console.log('value', this.state.value);
    const { currently, loading, value } = this.state;
    const active = currently !== undefined;
    const iconTheme = iconToTheme[currently.icon];
    const formClasses = classNames(
      styles.form,
      theme[iconTheme],
    );

    return (
      loading ? null :
      <div className={styles.app}>
        <form className={formClasses} >
          <label className={styles.label} htmlFor='city'>
            Type in a city:
          </label>
          <input className={styles.input} name='city' type="text" value={value} onChange={e => this.handleChange(e)} />
        </form>
        <Widget active={active}>{currently}</Widget>
      </div>
    );
  }
}

export default App;
