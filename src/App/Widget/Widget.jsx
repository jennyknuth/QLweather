import React from 'react';
import PropTypes from 'prop-types';
import Body from '../Body/Body';

import styles from './Widget.scss';

const Widget = (props) => {
  console.log('widget', props);
  return (
    <div className={styles.widget}>
      widget {props.children && props.children.summary}
      <Body />
    </div>
  );
};

Widget.defaultProps = {
  children: {},
};

Widget.propTypes = {
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
