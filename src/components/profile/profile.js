import React, { Component } from 'react';
import ProfileForm from './form/profile_form';
import Days from './days/days';
import Notification from '../notification/notification';

class Profile extends Component {
  handleSubmit = (values) => {
    this.notification.show();
    this.props.updateProfile(values);
  }

  render() {
    return (
      <div>
        <Notification
          ref={(notification) => { this.notification = notification; } }>
          Profile updated
        </Notification>

        <Days {...this.props} />

        <ProfileForm {...this.props} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Profile;