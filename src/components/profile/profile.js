import React, { Component } from 'react';
import ProfileForm from './form/profile_form';
import Days from './days/days';

class Profile extends Component {
  handleSubmit = (values) => {
    this.props.updateProfile(values);
  }

  render() {
    return (
      <div>
        <Days {...this.props} />

        <ProfileForm {...this.props} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Profile;