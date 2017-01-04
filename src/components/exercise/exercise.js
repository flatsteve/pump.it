import React, { Component } from 'react';
import classNames from 'classnames';
import './exercise.css';

class Exercise extends Component {
  handleClick = (exercise) => {
    this.props.removeExercise(exercise);
    this.props.addExercise(this.props.day, exercise);
  }

  handleDelete = (exercise) => {
    this.props.deleteExercise(this.props.day, exercise);
  }

  render() {
    let exercise = this.props.exercise;
    let exerciseClasses = classNames({
      'exercise': true,
      'exercise--readonly': this.props.readonly
    });

    return (
      <div className={exerciseClasses}>
        <p className="exercise__title">{exercise.name}</p>
        <p className="exercise__category">({exercise.category})</p>

        {this.props.addable
          ? <button onClick={this.handleClick.bind(this, exercise)} className="button exercise__action">Add</button>
          : null
        }

        {this.props.editable
          ? <button className="button"
            onClick={this.handleDelete.bind(this, exercise)}>
            Delete
            </button>
          : null
        }
      </div>
    );
  }
}

export default Exercise;