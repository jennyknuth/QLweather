import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import iconToTheme from '../Shared/iconToTheme';

import styles from './Header.scss';
import theme from '../Shared/Image.scss';

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

const Header = ({ icon, summary, temperature }) => {
  const isCold = temperature < 35;
  const isCool = temperature >= 35 && temperature < 60;
  const isWarm = temperature >= 60 && temperature < 80;
  const isHot = temperature >= 80;
  const themeIcon = iconToTheme[icon];

  const headerClasses = classNames(
    styles.header,
    themeIcon === 'clearDay' && (isCold || isCool) && theme.clearDay,
    themeIcon === 'clearDay' && isWarm && theme.warmDay,
    themeIcon === 'clearDay' && isHot && theme.hotDay,
    theme[themeIcon],
  );

  const iconClasses = classNames(
    iconToClass[icon] || 'wi wi-moon-new',
    styles.icon,
  );

  return (
    <div className={headerClasses}>
      <div className={iconClasses} />
      <div className={styles.summary}>{summary}</div>
    </div>
  );
};

Header.propTypes = {
  icon: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

export default Header;
