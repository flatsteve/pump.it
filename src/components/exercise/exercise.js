import React, { Component } from 'react';
import classNames from 'classnames';
import './exercise.css';

class Exercise extends Component {
  handleClick = (exercise) => {
    this.props.removeExercise(exercise);
    this.props.addExercise(this.props.day, exercise);
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

        {this.props.readonly
          ? null
          : <p onClick={this.handleClick.bind(this, exercise)} className="exercise__action"> Add + </p>
        }
      </div>
    );
  }
}

export default Exercise;