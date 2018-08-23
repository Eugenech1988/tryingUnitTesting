import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {timeCell} from './helpers';

class TimerResult extends Component {
  getTimeCells() {
    const seconds = this.props.timeSpent / 1000;
    return {
      min: Math.floor(seconds / 60).toString(),
      sec: Math.floor(seconds % 60).toString(),
      msec: (seconds % 1).toFixed(3).substring(2)
    };
  }
  render() {
    const cells = this.getTimeCells();
    return (
      <div id={this.props.id} className={this.props.timerCls}>
        <span style={this.props.cellCls}>{timeCell(2, cells.min)}:</span>
        <span style={this.props.cellCls}>{timeCell(2, cells.sec)}.</span>
        <span style={this.props.cellCls}>{cells.msec}</span>
      </div>
    );
  }
}

TimerResult.propTypes = {
  timerCls: PropTypes.string,
  cellCls: PropTypes.string
};

export default TimerResult;
