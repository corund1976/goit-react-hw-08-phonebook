import { useSelector } from 'react-redux';

import s from './ContactList.module.css';
import Contact from '../Contact';
import { visibleContacts } from '../../redux/contacts/contactsSelectors';

function ContactList() {
  const contactsToContactList = useSelector(visibleContacts);

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