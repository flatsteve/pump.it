import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Routine from '../routine/routine';
import PageHeader from '../common/page_header/page_header';
import { getDayOfWeek, scrollToRoutine } from '../../services/utils';
import './schedule.css';

class Schedule extends Component {
  componentDidMount() {
    const day = getDayOfWeek();

    if (this.refs[day]) {
      const scheduleElem = ReactDOM.findDOMNode(this).getElementsByClassName('schedule')[0];
      const routineElem = ReactDOM.findDOMNode(this.refs[day]);
      scrollToRoutine(scheduleElem, routineElem);
    }
  }

  render() {
    const activeRoutines = Object.keys(this.props.routine).filter(day => {
      return this.props.routine[day].active;
    });

    return (
      <div>
        <PageHeader>
          Gym Schedule
        </PageHeader>

        <div className="schedule">
          {activeRoutines.map((day) => {
            const routine = this.props.routine[day];

            return <Routine routine={routine} day={day} key={day} readonly={true}
              ref={day} />;
          })}
        </div>
      </div>
    );
  };
};

export default Schedule;
