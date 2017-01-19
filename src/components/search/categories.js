import React, { Component } from 'react';
import { getCategories } from '../../services/wger';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categories: []
    };
  };

  componentDidMount = async () => {
    const DEFAULT_CHOICE = { id: 0, name: 'All exercises' };

    try {
      let categories = await getCategories();
      let newCategories = [
        DEFAULT_CHOICE, ...categories
      ];

      this.setState({
        categories: newCategories
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleCategoryChange = (event) => {
    this.props.categoryChange(event.target.value);
  }

  render() {
    return (
      <div className="form-group">
        <h4>
          Category (optional)
        </h4>

        <select className="input input--select"
          onChange={this.handleCategoryChange}
          value={this.props.selectedCategory.id}>
          {this.state.categories.map((category, index) => {
            return (
              <option value={category.id} key={index}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  };
};

export default Categories;
