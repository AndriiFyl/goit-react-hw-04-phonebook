import React from "react";
import { nanoid } from 'nanoid';
import css from './App.module.css';
import ContactsList  from "./ContactsList";
import ContactForm from "./ContactForm";
import Filter from "./Filter/Filter";



class App extends React.Component  {

state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }
  
  // contactId = nanoid();

  // Методы обработки разной инфы записываем там, где у нас state
   // Метод удаления контакта из списка при нажатии на кнопку================================================
  // передаем id нужной кнопки из компонента ContactsLis
  deleteContactItem = (contactId) => {
    this.setState(prevstate => ({
      // перезаписываем наш state (не мутируя его): в contacts записываем предыдущее
      // состояние, которое отфильтровываем при условии, что оставляем только тот контакт,
      // который не совпадает по id с тем контактом, на который мы нажали (удалили)
      contacts: prevstate.contacts.filter(contact => contact.id !== contactId),
    }))
  }
  // ........................................................................................................

  addContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number, 
    }
    
    const repeatingName = this.state.contacts.find(contact =>
      contact.name.toLowerCase() === name.toLowerCase() )

 
    
        if (repeatingName) {
      alert(`${name} is already in contacts.`);
      return;
    }


    this.setState(prevstate => ({
      contacts: [contact, ...prevstate.contacts ]
    }))
  }
  
  changeFilter = event => {
    this.setState({filter: event.currentTarget.value})
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normilizedFilter = filter.toLowerCase();
    
    return  contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)); 
  }

  render() {
  
  // деструктуризирую свойство filter (чтобы не писать постоянно this.state.filter)
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts(); 
    
  return (
    <div className={css.container}>
      <h1 className={css.head_title}>Phonebook</h1>
      <ContactForm onSubmitForm={this.addContact} />
      <h1 className={css.head_title}>Contacts</h1>
      <Filter value={filter} onChange = {this.changeFilter}  />
      <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContactItem} />
    </div>
  )
}
}
export default App;

