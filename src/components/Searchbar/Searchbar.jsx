import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { CustomHeader } from './Searchbar.styled';

class Searchbar extends Component {
  state = { query: '' };

  handleInputChange = ({ target }) => {
    const inputName = target.name;
    const inputValue = target.value;
    this.setState({ [inputName]: inputValue });
  };

  handleSearchImage = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <CustomHeader>
        <form>
          <button type="submit" onClick={this.handleSearchImage}>
            <span>Search</span>
          </button>

          <input
            type="text"
            placeholder="Search images and photos"
            name="query"
            onChange={this.handleInputChange}
          />
        </form>
      </CustomHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
