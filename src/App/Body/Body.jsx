import React from 'react';
import PropTypes from 'prop-types';

import styles from './Body.scss';

const Body = ({
  temperature,
  time,
  precipProbability,
  precipType,
}) => (
  <div className={styles.title}>
    <div>{time}</div>
    <div>{temperature}°F</div>
    <div>{precipProbability * 100}% chance of {precipType}</div>
  </div>
);

Body.propTypes = {
  time: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  precipProbability: PropTypes.number.isRequired,
  precipType: PropTypes.string.isRequired,
};


export default Body;
