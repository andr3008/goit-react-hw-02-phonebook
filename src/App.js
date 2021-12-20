import { Component } from 'react';
import './App.css';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
  };
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
      </div>
    );
  }
}

export default App;
