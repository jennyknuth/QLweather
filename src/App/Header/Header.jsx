import React from 'react';
// import PropTypes from 'proptypes';

import styles from './Header.scss';

const Header = () => {
  console.log('header');
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>This could be a title component</h1>
      <hr />
      <div className="wi wi-night-sleet" />
      <p className={styles.intro}>
        To get started, add components to <code>src/Header/Header.jsx</code> and save to reload.
      </p>
    </div>
  );
};

export default Header;
