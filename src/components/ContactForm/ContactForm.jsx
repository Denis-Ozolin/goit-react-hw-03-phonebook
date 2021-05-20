import { Component } from "react";
import PropTypes from 'prop-types';
import styles from "./ContactForm.module.css";


class ContactForm extends Component{
  state = {
    name: '',
    number: ''
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({[name]: value})
  }

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    this.props.onSubmit({
      name,
      number
    });

    this.reset();
  }

  reset = () => {
    this.setState({ name: '', number: '' });
  }

  render() {
    return(
    <form className={styles.form} action="" onSubmit={this.handleSubmit}>
      <p className={styles.form__inputName}>Name:</p>
      <input
        className={styles.form__input}
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />      
      <p className={styles.form__inputName}>Number:</p>
        <input
          className={styles.form__input}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      <p className={styles.form__inputName}>Push button:</p>
      <button className={styles.form__btn} type="submit">Add contact</button>
  </form >
    )
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default ContactForm;