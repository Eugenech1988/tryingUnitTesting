import React, { Component, Fragment } from 'react';

import styles from 'styles/modules/timer.module.scss';
import Button from 'components/Button';
import TimerResult from 'components/TimerResult';
import LapResults from 'components/LapResults';
import {BTN_TEXT} from '../../constants';

class StopWatch extends Component {
  state = this.initialState = {
    isRunning: false,
    lapTimes: [],
    timeSpent: 0
  };

  handleToggleClick = () => {
    this.setState({ isRunning: !this.state.isRunning }, () => {
      this.state.isRunning ? this.startTimer() : clearInterval(this.timer);
    });
  };

  handleAddLap = () => {
    const { lapTimes, timeSpent } = this.state;
    this.setState({ lapTimes: lapTimes.concat(timeSpent) });
  };

  handleReset = () => {
    clearInterval(this.timer);
    this.setState(this.initialState);
  };

  startTimer = () => {
    this.startTime = Date.now();
    this.timer = setInterval(this.handleUpdate, 10);
  };

  handleUpdate = () => {
    const delta = Date.now() - this.startTime;
    this.setState({ timeSpent: this.state.timeSpent + delta });
    this.startTime = Date.now();
  };

  render() {
    const { isRunning, timeSpent, lapTimes } = this.state;
    return (
      <Fragment>
        <TimerResult
          id='timer'
          timerCls={styles.timerWrapper}
          timeSpent={timeSpent}
        />
        <Button
          btnText={isRunning ? BTN_TEXT.STOP : BTN_TEXT.START}
          btnClick={this.handleToggleClick}
        />
        <Button
          btnText={BTN_TEXT.RESET}
          btnClick={this.handleReset}
          disabled={!timeSpent && !isRunning}
        />
        <Button
          btnText={BTN_TEXT.LAP}
          btnClick={this.handleAddLap}
          disabled={!timeSpent || !isRunning}
        />
        {(lapTimes.length > 0) && <LapResults lapTimes={lapTimes}/>}
      </Fragment>
    );
  }
}

StopWatch.propTypes = {};

export default StopWatch;
