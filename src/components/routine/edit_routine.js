import React, { Component } from 'react';
import Search from '../search/search';
import Notification from '../notification/notification';
import PageHeader from '../common/page_header/page_header';
import Routine from '../routine/routine';

class EditRoutine extends Component {
  constructor() {
    super();

    this.state = {
      searchOpen: false
    };
  }

  handleToggleSearch = () => {
    let currentSearchState = this.state.searchOpen;

    this.setState({
      searchOpen: !currentSearchState
    });

    document.body.classList.toggle('prevent-scroll');
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.notification.show();
    this.props.addLabel(this.props.params.day, this.labelInput.value);
  };

  render() {
    const routine = this.props.routine[this.props.params.day];

    return (
      <div>
        <Notification
          ref={(notification) => { this.notification = notification; } }>
          Label saved
        </Notification>

        <PageHeader>
          Edit {routine.fullDayName} routine
        </PageHeader>

        <form onSubmit={this.handleSubmit} className="routine__label">
          <div className="form-group">
            <label className="label">
              Add a label
            </label>

            <input defaultValue={routine.label}
              ref={(labelInput) => this.labelInput = labelInput}
              className="input" type="text"
              placeholder="e.g. I hate leg day" />
          </div>

          <button type="submit" className="button routine__label__button">
            Save
          </button>
        </form>

        <Routine routine={routine} readonly={false} addable={false}
          day={this.props.params.day} editable={true} deleteExercise={this.props.deleteExercise} handleToggleSearch={this.handleToggleSearch} />

        <Search day={this.props.params.day} open={this.state.searchOpen}
          handleToggleSearch={this.handleToggleSearch} {...this.props} />
      </div>
    );
  }
}

export default EditRoutine;
