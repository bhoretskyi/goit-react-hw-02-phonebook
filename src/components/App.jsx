import { Component } from 'react';
import { UserForm } from './Form/Form';
import { nanoid } from 'nanoid';
import { ContactFilter } from './ContactFilter/ContactFilter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  addName = newName => {
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newName.name.toLowerCase()
    );
    if (existingContact) {
      window.alert(`Contact with name '${newName.name}' already exists!`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: newName.name,
      number: newName.number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  updateFilter = filterText => {
    this.setState({ filter: filterText });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <UserForm addName={this.addName} />

        <div>
          <h2>Contacts</h2>
          <ContactFilter filter={filter} updateFilter={this.updateFilter} />

          <ul>
            {filteredContacts.map(contact => (
              <li key={contact.id}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                <button onClick={() => this.deleteContact(contact.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
