import React, { Component } from 'react';
import Routine from '../routine/routine';
import './schedule.css';

class Schedule extends Component {
  render() {
    const activeRoutines = Object.keys(this.props.routine).filter(day => {
      return this.props.routine[day].active;
    });

    return (
      <div className="schedule">
        {activeRoutines.map((day) => {
          const routine = this.props.routine[day];

          return <Routine routine={routine} day={day} key={day} />;
        })}
      </div>
    );
  };
};

export default Schedule;