import React from 'react';
import { nanoid } from 'nanoid';
import FormContact from 'components/FormContact/FormContact';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { Wrapper, Title } from './App.styled';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    // const contactsParsed = JSON.parse(contacts);
    if (contacts?.length) {
      //contacts && contacts.length
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    // contacts !== prevState.contacts
    if (contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  formSubmit = data => {
    const normalizedName = data.name.toLowerCase();

    const checkName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (checkName) {
      return alert(` ${data.name} is alredy in contacts`);
    }
    const checkNumber = this.state.contacts.find(
      contact => contact.number === data.number
    );
    if (checkNumber) {
      return alert(`${data.number} is already  in contacts`);
    }

    const id = nanoid();
    const contact = { id, ...data };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    const lowerCaseFilterText = filter.toLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilterText)
    );

    return filteredContacts;
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <Wrapper>
          <Title>Phonebook</Title>
          <FormContact onSubmit={this.formSubmit} />

          <Title>Contacts</Title>
          <Filter filter={filter} onChange={this.changeFilter} />
          <Contacts
            contacts={this.getFilteredContacts()}
            onChange={this.deleteContacts}
          />
        </Wrapper>
      </div>
    );
  }
}

export default App;
