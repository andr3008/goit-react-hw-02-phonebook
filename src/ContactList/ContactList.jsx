import PropTypes from 'prop-types';
import { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {' '}
            {name}: {number}
          </li>
        ))}
      </ul>
    );
  }
}
export default ContactList;
