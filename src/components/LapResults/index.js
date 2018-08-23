import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeReslut from 'components/TimerResult';

import styles from 'styles/modules/timer.module.scss';

class LapResults extends Component {
  render() {
    const rows = this.props.lapTimes.map((lapTime, index) =>
      <tr key={++index}>
        <td>{index}</td>
        <td><TimeReslut timerCls={styles.timeResultWrapper} timeSpent={lapTime} /></td>
      </tr>
    );
    return (
      <table id="lap-times">
        <thead>
        <th>Lap</th>
        <th>Time</th>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

LapResults.propTypes = {
  lapTimes: PropTypes.array
};

export default LapResults;
