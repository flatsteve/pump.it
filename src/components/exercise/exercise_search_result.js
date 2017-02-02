import React, { Component } from 'react';
import './exercise.css';

class ExerciseSearchResult extends Component {
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

        <button onClick={this.handleClick.bind(this, exercise)} className="button exercise__action">Add</button>
      </div>
    );
  }
}

export default ExerciseSearchResult;
