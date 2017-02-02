import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../../profile.css';

class ProfileForm extends Component {
  componentDidMount() {
    const initData = {
      name: this.props.profile.name,
      age: this.props.profile.age,
      height: this.props.profile.height,
      weight: this.props.profile.weight
    };

    this.props.initialize(initData);
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div className="profile__form">
          <div className="form-group">
            <label htmlFor="name" className="label">
              Name
          </label>

            <Field component="input" className="input" type="text" name="name" placeholder="e.g. Franco Columbu" />
          </div>

          <div className="form-group">
            <label htmlFor="age" className="label">
              Age
          </label>

            <Field component="input" className="input" type="number" name="age" max="100" placeholder="e.g. 28" />
          </div>

          <div className="form-group">
            <label htmlFor="height" className="label">
              Height (ft)
          </label>

            <Field component="input" className="input" type="number" name="height" placeholder="e.g. 5.5" />
          </div>

          <div className="form-group">
            <label htmlFor="weight" className="label">
              Weight (kg)
          </label>

            <Field component="input" className="input" type="number" name="weight" placeholder="e.g. 90" />
          </div>
        </div>

        <button className="button" disabled={pristine || submitting}>
          Submit details
        </button>
      </form>
    );
  };
}

ProfileForm = reduxForm({
  form: 'profile'
})(ProfileForm);

export default ProfileForm;
