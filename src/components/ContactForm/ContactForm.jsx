import React from "react";
import css from './ContactForm.module.css';



export default class ContactForm extends React.Component {
    state = {
   name: '',
  number: '',
    }

    handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value
    })}
    
     handleSubmit = event => {
         event.preventDefault();
         this.props.onSubmitForm(this.state); 
         this.resetInputsForm();
    }
    
    // метод очистки формы после отправки
    resetInputsForm = () => {
        this.setState({ name: '',
     number: '',})
    }

  render() {
        return (
            <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label__wrapper} > 
          Name <input type="text"
            value={this.state.name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
                onChange={this.handleChange}
              />
        </label>

         <label className={css.label__wrapper} > 
          Number
          <input 
          type="tel"
          value={this.state.number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
                onChange={this.handleChange}
                
          />
        </label>

            <button className={css.btn}
              type="submit"
            >Add contact</button>
      </form>
        )
    }
}

// export default ContactForm;
