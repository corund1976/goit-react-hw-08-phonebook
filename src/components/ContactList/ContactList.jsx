import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s from './ContactList.module.css';
import Contact from 'components/Contact';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

function ContactList({onEditContact}) {
  const contactsToContactList = useSelector(contactsSelectors.getVisibleContacts);

  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.getContacts()), [dispatch]);

  return (
    <ul className={s.contactList}>
      {contactsToContactList.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contactItem}>
            <Contact
              name={name}
              number={number}
              id={id}
              onEditContact={onEditContact}>
            </Contact>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;