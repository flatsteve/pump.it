import React, { Component } from 'react';
import { search } from '../../services/wger';

class TextSearch extends Component {

  search = async (event) => {
    let searchTerm = event.target.value;
    let categoryId = this.props.selectedCategory;
    const minimumSearchLength = 2;

    if (searchTerm.length > minimumSearchLength) {
      try {
        let searchResults = await search(searchTerm, categoryId);

        if (searchResults.length > 0) {
          this.props.searchChange(searchResults);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    return (
      <div className="form-group">
        <h4>
          Search by name
        </h4>

        <input className="input" type="text"
          defaultValue="Biceps" onChange={this.search} />
      </div>
    );
  }

}

export default TextSearch;
