import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from 'styles/modules/timer.module.scss';
import Timer from 'components/Timer';

class MainPage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Stop watch</h1>
        <Timer/>
      </div>
    );
  }
}

MainPage.propTypes = {
  loading: PropTypes.bool,
  headerText: PropTypes.string
};

export default MainPage;
