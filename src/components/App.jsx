import { Component } from 'react';
import { NameForm } from './Form/Form';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  };
  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  render() {
    return (
      <div>
        <h1>Phoenbook</h1>
        <NameForm addContact={this.addContact} />
        <div>
          <h2>Contacts</h2>
          {this.state.contacts.map(contact => (
            <p key={nanoid()}>{contact}</p>
          ))}
        </div>
      </div>
    );
  }
}
