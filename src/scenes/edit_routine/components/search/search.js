import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import ExerciseSearchResult from '../../../../components/exercise/exercise_search_result';
import TextSearch from './text_search';
import Categories from './categories';
import CloseButton from '../../../../components/close_button/close_button';
import './search.css';
import '../../../../styles/input.css';

export class Search extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
      selectedCategory: 0
    };
  }

  searchChange = (results) => {
    this.setState({
      results
    });
  };

  categoryChange = (categoryId) => {
    this.setState({
      selectedCategory: categoryId
    });
  }

  removeExercise = (clickedExercise) => {
    let newResults = this.state.results.filter((exercise) => {
      return exercise.data.id !== clickedExercise.id;
    });

    this.setState({
      results: newResults
    });
  }

  render() {
    let searchClasses = classNames({
      'search': true,
      'search--open': this.props.open
    });

    return (
      <div className={searchClasses}>
        <CloseButton closeAction={this.props.handleToggleSearch}
          className="search__close" />

        <div className="search__controls">
          <TextSearch searchChange={this.searchChange}
            selectedCategory={this.state.selectedCategory} />

          <Categories categoryChange={this.categoryChange}
            selectedCategory={this.state.selectedCategory} />
        </div>

        <div className="search__results">
          {this.state.results.length > 0 ?
            this.state.results.map((exercise, index) => {
              return (
                <ReactCSSTransitionGroup
                  transitionName="search__results__item"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}
                  transitionAppear={true}
                  transitionAppearTimeout={500} key={exercise.data.id}>
                  <ExerciseSearchResult index={index} exercise={exercise.data}
                    day={this.props.day} addExercise={this.props.addExercise} removeExercise={this.removeExercise} />
                </ReactCSSTransitionGroup>
              );
            })
            : <h4>Search for an exercise to get started...</h4>
          }
        </div>
      </div>
    );
  }
}

export default Search;
