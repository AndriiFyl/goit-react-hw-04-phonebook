import React from "react";
import css from './ContactsList.module.css';
import PropTypes from 'prop-types';


const ContactsList = ({ contacts, onDeleteContact }) => (
   
    <ul className={css.list__container} >
        {/* Деструктуризируем contacts -> id, name */}
        {contacts.map(({id, name, number}) => (
            <li className={css.item} key={id}>
                <p className={css.name}>{name}:</p>
                <p className={css.number}>{number}</p>
                <button className={css.btn__delete} type="button"
                onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
        )   
        )}   
        </ul>
      
)

export default ContactsList;


ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}





