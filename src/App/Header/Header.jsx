import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.scss';

const iconToClass = {
  'clear-day': 'wi wi-sunny-day',
  'clear-night': 'wi wi-night-clear',
  rain: 'wi wi-rain',
  snow: 'wi wi-snow',
  sleet: 'wi wi-sleet',
  wind: 'wi wi-strong-wind',
  fog: 'wi wi-fog',
  cloudy: 'wi wi-cloudy',
  'partly-cloudy-day': 'wi wi-day-cloudy',
  'partly-cloudy-night': 'wi wi-night-cloudy',
};

const Header = ({ icon, summary }) => (
  <div className={styles.body}>
    <div className={iconToClass[icon] || 'wi wi-moon-new'} />
    <div>{summary}</div>
  </div>
);

Header.propTypes = {
  icon: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Header;
