import React, { Component } from 'react';
import ActionButton from '../action_button/action_button';
import './exercise.css';

class ExerciseEditable extends Component {
  handleClick = (exercise) => {
    this.props.removeExercise(exercise);
    this.props.addExercise(this.props.day, exercise);
  }

  handleDelete = (exercise) => {
    this.props.deleteExercise(this.props.day, exercise);
  }

  render() {
    let { exercise } = this.props;

    return (
      <div className="exercise">
        <p className="exercise__title">{exercise.name}</p>
        <p className="exercise__category">({exercise.category})</p>

        <ActionButton closeAction={this.handleDelete.bind(this, exercise)}
          className="exercise__action" />
      </div>
    );
  }
}

export default ExerciseEditable;
