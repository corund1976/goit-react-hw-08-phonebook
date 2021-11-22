import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import s from './ContactList.module.css';
import Contact from '../Contact';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

function ContactList() {
  const contactsToContactList = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() =>
  dispatch(contactsOperations.getContacts()), [dispatch]);

  return (
    <ul className={s.contactList}>
      {contactsToContactList.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contactItem}>
            <Contact
              name={name}
              number={number}
              id={id}>
            </Contact>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;