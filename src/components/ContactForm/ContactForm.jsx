import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import s from './ContactForm.module.css';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

function ContactForm() {
  const [name,setName] = useState('');
  const [number, setNumber] = useState('');
  
  const contactsToContactForm = useSelector(contactsSelectors.getItems);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    //Создаём новый контакт
    const contact = { name, number };
    // Проверка на повторный ввод существующего контакта
    const normalizedName = name.toLowerCase();
    
    contactsToContactForm.some(contact =>
      contact.name.toLowerCase() === normalizedName ||
      contact.number === number)
      ?
      alert(`${name} is already in contacts.`)
      :
      dispatch(contactsOperations.addContact(contact));
    
    alert(`${name} successfully added.`)
    resetLocalState();
  };

  const resetLocalState = () => {
    setName('');
    setNumber('');
  };

  return (
    <form
      onSubmit={handleSubmit} 
      className={s.form} 
      autoComplete="on">
      Add contact

      <label className={s.label}>
        Name
        <input
          name="name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
            value={name}
            onChange={handleChange}
            className={s.input}
        />
      </label>

      <label className={s.label}>
        Phone
        <input
          name="number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
            value={number}
            onChange={handleChange}
            className={s.input}
        />
      </label>        

      <button type="submit" className={s.btn}>Add new contact</button>
    </form>
  );
};

export default ContactForm;