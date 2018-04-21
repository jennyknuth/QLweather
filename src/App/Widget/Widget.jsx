import React from 'react';
// import PropTypes from 'proptypes';

import styles from './Widget.scss';

const Widget = () => {
  console.log('widget');
  return (
    <div className={styles.widget}>
      widget
    </div>
  );
};

// Widget.defaultProps = {
//   children: 'hello world',
// };
//
// Widget.propTypes = {
//   children: PropTypes.string(),
// };

export default Widget;
