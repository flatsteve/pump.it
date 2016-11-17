import React, { Component } from 'react';
import Exercise from '../exercise/exercise';
import TextSearch from './text_search';
import Categories from './categories';
import './search.css';
import '../../styles/input.css';

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
    return (
      <div>
        <Categories categoryChange={this.categoryChange}
          selectedCategory={this.state.selectedCategory} />

        <TextSearch searchChange={this.searchChange}
          selectedCategory={this.state.selectedCategory} />

        <div className="search__results">
          {this.state.results.map((exercise, index) => {
            return <Exercise readonly={false} index={index} key={exercise.data.id} exercise={exercise.data} day={this.props.day} addExercise={this.props.addExercise} removeExercise={this.removeExercise} />;
          })}
        </div>
      </div>
    );
  }
}

export default Search;