import React, { Component } from 'react';
import { Link } from 'react-router';
import Exercise from '../exercise/exercise';
import Alert from '../alert/alert';
import './routine.css';

class Routine extends Component {
  render() {
    let routine = this.props.routine;
    let day = this.props.day;

    return (
      <div className="routine__item" key={day}>
        <h4 className="routine__item__day">
          {routine.fullDayName}{routine.label ? ': ' + routine.label : null}
        </h4>

        <Link to={`/edit/${day}`} className="button button--circle routine__edit">
          Edit
        </Link>

        {routine.exercises.length > 0
          ? routine.exercises.map((exercise) => {
            return <Exercise key={exercise.id}
              exercise={exercise} readonly={true} />;
          })
          : <Alert>You are puny! Add some exercises you wimp.</Alert>}
      </div>
    );
  }
}

export default Routine;