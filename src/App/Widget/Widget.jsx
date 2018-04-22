import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from '../Header/Header';
import Body from '../Body/Body';
import iconToTheme from '../Shared/iconToTheme';

import styles from './Widget.scss';
import theme from '../Shared/Border.scss';

const Widget = ({ active, children }) => {
  const {
    icon,
    precipProbability,
    precipType,
    summary,
    temperature,
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
        temperature={temperature}
      />
      <Body
        icon={icon}
        precipProbability={precipProbability}
        precipType={precipType}
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
    summary: PropTypes.string,
    icon: PropTypes.string,
    precipProbability: PropTypes.number,
    precipType: PropTypes.string,
    temperature: PropTypes.number,
  }),
};

export default Widget;
