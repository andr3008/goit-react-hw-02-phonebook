import { Component } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';

import { Title, TitleContacts, Wrapper, P } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast.success(`${name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      toast.success(`${number} is already in contacts.`);
    } else if (name.trim() === '' || number.trim() === '') {
      toast.error("Enter the contact's name and number phone!");
    } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
      toast.error('Enter the correct number phone!');
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Wrapper>
        <Toaster />
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <TitleContacts>Contacts</TitleContacts>
        {contacts.length > 1 && (
          <Filter value={filter} onChange={this.changeFilter} />
        )}
        {contacts.length > 0 ? (
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        ) : (
          <P>Your phonebook is empty.</P>
        )}
      </Wrapper>
    );
  }
}

export default App;
