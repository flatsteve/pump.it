import React, { Component } from 'react';
import './days.css';
import '../../../styles/checkbox.css';

class Days extends Component {
  toggleDay = (day) => {
    this.props.toggleDay(day);
  }

  render() {
    return (
      <div className="days">
        <h4>Gym dayz</h4>

        <div className="days__options">
          {Object.keys(this.props.routine).map(day => {
            return (
              <div key={day} className="checkbox">
                <input type="checkbox" id={day} className="checkbox__input"
                  checked={this.props.routine[day].active} onChange={this.toggleDay.bind(null, day)} />

                <label htmlFor={day} className="checkbox__label days__checkbox__label">
                  {day}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Days;
