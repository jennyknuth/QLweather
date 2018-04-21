import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Header.scss';

const Header = () => {
  console.log('header');
  return (
    <div className={styles.title}>
      This could be a header
    </div>
  );
};

export default Header;
