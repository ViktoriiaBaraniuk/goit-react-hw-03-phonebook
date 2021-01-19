import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const INITIAL_STATE = { name: '', number: '' };

class Form extends Component {
  state = { ...INITIAL_STATE };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  contactCheck = () => {
    const { name, number } = this.state;
    const { contacts } = this.props;
    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      return true;
    }

    if (name === '' || number === '') {
      alert('Please fill in all the fields');
      return true;
    }
  };
  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    if (this.contactCheck()) {
      this.reset();
      return;
    }

    this.props.onSubmit(name, number);

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={this.handleChange}
            className={s.name}
          />
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            placeholder="Enter your mobile number"
            value={number}
            onChange={this.handleChange}
            className={s.number}
          />
        </label>

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
