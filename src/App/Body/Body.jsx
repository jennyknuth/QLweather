import React from 'react';
// import PropTypes from 'proptypes';

import styles from './Body.scss';

const Body = () => {
  console.log('body');
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>This could be a title component</h1>
      <hr />
      <div className="wi wi-night-sleet" />
      <p className={styles.intro}>
        To get started, add components to <code>src/Body/Body.jsx</code> and save to reload.
      </p>
    </div>
  );
};

export default Body;
