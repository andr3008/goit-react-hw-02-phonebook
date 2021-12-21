import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
class Filter extends Component {
  filterInputId = nanoid();
  render() {
    return (
      <label htmlFor={this.filterInputId}>
        Find contacts by name
        <input
          type="text"
          name="name"
          id={this.filterInputId}
          onChange={this.handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    );
  }
}
export default Filter;
