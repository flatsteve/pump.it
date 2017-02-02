import React from 'react';
import ExerciseEdit from '../exercise/exercise_edit';
import Alert from '../alert/alert';
import './routine.css';

const RoutineEdit = (props) => {
  let {routine, day} = props;

  return (
    <div className="routine__item" key={day}>
      <h4 className="routine__item__day">
        {routine.fullDayName}{routine.label ? ': ' + routine.label : null}
      </h4>

      <a className="button button--circle routine__edit"
        onClick={props.handleToggleSearch}>
        Add
        </a>

      {
        routine.exercises.length > 0
          ? routine.exercises.map((exercise) => {
            return (
              <ExerciseEdit key={exercise.id} exercise={exercise}
                day={day}
                deleteExercise={props.deleteExercise} />
            );
          })
          : <Alert>You are puny! Add some exercises you wimp.</Alert>
      }
    </div>
  );
};

export default RoutineEdit;
