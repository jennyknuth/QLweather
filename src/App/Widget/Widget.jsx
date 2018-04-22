import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from '../Header/Header';
import Body from '../Body/Body';
import iconToTheme from '../Shared/iconToTheme';

import styles from './Widget.scss';
import theme from '../Shared/Color.scss';

const Widget = ({ active, children }) => {
  const {
    icon,
    precipProbability,
    precipType,
    summary,
    temperature,
    time,
  } = children;

  const iconTheme = iconToTheme[icon];

  const widgetClasses = classNames(
    styles.widget,
    active && styles.active,
    icon && theme[iconTheme],
  );

  return (
    <div className={widgetClasses}>
      <Header
        icon={icon}
        summary={summary}
      />
      <Body
        precipProbability={precipProbability}
        precipType={precipType}
        time={time}
        temperature={temperature}
      />
    </div>
  );
};

Widget.defaultProps = {
  children: {},
};

Widget.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.shape({
    time: PropTypes.number,
    summary: PropTypes.string,
    icon: PropTypes.string,
    nearestStormDistance: PropTypes.number,
    precipIntensity: PropTypes.number,
    precipIntensityError: PropTypes.number,
    precipProbability: PropTypes.number,
    precipType: PropTypes.string,
    temperature: PropTypes.number,
    apparentTemperature: PropTypes.number,
    dewPoint: PropTypes.number,
    humidity: PropTypes.number,
    pressure: PropTypes.number,
    windSpeed: PropTypes.number,
    windGust: PropTypes.number,
    windBearing: PropTypes.number,
    cloudCover: PropTypes.number,
    uvIndex: PropTypes.number,
    visibility: PropTypes.number,
    ozone: PropTypes.number,
  }),
};

export default Widget;
