import React, { Component } from 'react';
import classNames from 'classnames';
import './notification.css';

class Notification extends Component {
  constructor() {
    super();

    this.state = {
      show: false
    };
  }

  show() {
    const notificationTime = 2000;

    if (!this.state.show) {
      this.setState({
        show: true
      });

      setTimeout(() => {
        this.setState({
          show: false
        });
      }, notificationTime);
    }
  }

  render() {
    let notificationClasses = classNames({
      'notification': true,
      'notification--show': this.state.show
    });

    return (
      <div className={notificationClasses}>
        <p className="notification__message">
          {this.props.children}
        </p>
      </div>
    );
  }
}

export default Notification;