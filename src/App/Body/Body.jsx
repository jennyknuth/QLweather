import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import iconToTheme from '../Shared/iconToTheme';

import styles from './Body.scss';
import theme from '../Shared/Background.scss';

const Body = ({
  icon,
  temperature,
  precipProbability,
  precipType,
}) => {
  const iconTheme = iconToTheme[icon];
  const bodyClasses = classNames(
    styles.body,
    theme[iconTheme],
  );
  const precip = precipProbability.toFixed(0) * 100;
  const temp = temperature.toFixed(0);
  return (
    <div className={bodyClasses}>
      <div className={styles.title}>currently</div>
      <div className={styles.temperature}>{temp}°F</div>
      <div className={styles.precip}>{precip}% chance of {precipType || 'precip'}</div>
    </div>
  );
};

Body.propTypes = {
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  precipProbability: PropTypes.number.isRequired,
  precipType: PropTypes.string.isRequired,
};


export default Body;
