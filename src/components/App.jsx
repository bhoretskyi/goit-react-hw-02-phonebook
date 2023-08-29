import { Component } from 'react';
import { UserForm } from './Form/Form';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  };
  addName = newName => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newName],
    }));
  };
  render() {
    return (
      <div>
        <h1>Phoenbook</h1>
        <UserForm addName={this.addName} />
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
