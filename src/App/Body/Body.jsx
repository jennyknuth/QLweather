import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Body.scss';

const Body = () => {
  console.log('body');
  return (
    <div className={styles.body}>
      <div className="wi wi-night-sleet" />
    </div>
  );
};

export default Body;
