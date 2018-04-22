import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import moment from 'moment';
import iconToTheme from '../Shared/iconToTheme';

import styles from './Body.scss';
import theme from '../Shared/Background.scss';

const Body = ({
  icon,
  temperature,
  time,
  precipProbability,
  precipType,
}) => {
  const iconTheme = iconToTheme[icon];
  const bodyClasses = classNames(
    styles.body,
    theme[iconTheme],
  );
  return (
    <div className={bodyClasses}>
      <div className={styles.time}>{moment(time).format('ddd, MMM Do, h:mm a').toUpperCase()}</div>
      <div className={styles.temperature}>{temperature}°F</div>
      <div className={styles.precip}>{precipProbability * 100}% chance of {precipType}</div>
    </div>
  );
};

Body.propTypes = {
  icon: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  precipProbability: PropTypes.number.isRequired,
  precipType: PropTypes.string.isRequired,
};


export default Body;
