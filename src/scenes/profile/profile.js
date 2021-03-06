import React, { Component } from 'react';
import ProfileForm from './components/profile_form/profile_form';
import Days from './components/days/days';
import Notification from '../../components/notification/notification';
import PageHeader from '../../components/page_header/page_header';

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

        <PageHeader>
          Edit profile
        </PageHeader>

        <Days {...this.props} />

        <ProfileForm {...this.props} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Profile;
