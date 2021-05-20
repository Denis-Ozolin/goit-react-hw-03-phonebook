import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import styles from "./App.module.css";

class App extends Component{
  state = {
    contacts: [
      {id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: uuidv4(), name: 'Hermione Kline', number: '443-89-12'},
      {id: uuidv4(), name: 'Eden Clements', number: '645-17-79'},
      {id: uuidv4(), name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({contacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  formSubmitHandler = data => {   
    this.onCheckName(data.name)?alert(data.name + ' is alredy in contacts'):
    this.setState(({ contacts }) =>
      ({ contacts: [data, ...contacts] }));
  }

  onCheckName = name => {
    return this.state.contacts.find(contact => 
      contact.name.toLowerCase() === name.toLowerCase()
    )
  }

  changeFilter = (e) => {
      this.setState({ filter: e.currentTarget.value });
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return (contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
    )
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className={styles.phonebook}>
        <h1 className={styles.phonebook__title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2 className={styles.contacts__title}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList arr={filteredContacts} onClick={this.deleteContact}/>
      </div>
    )
  }
}

export default App;