import React, { Component } from 'react';
import classNames from 'classnames';
import CloseButton from '../common/close_button/close_button';
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
          ? <CloseButton closeAction={this.handleDelete.bind(this, exercise)}
            className="exercise__action" />
          : null
        }
      </div>
    );
  }
}

export default Exercise;