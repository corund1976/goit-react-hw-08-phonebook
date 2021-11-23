import { useSelector } from 'react-redux';

import s from './ContactList.module.css';
import Contact from 'components/Contact';
import { contactsSelectors } from 'redux/contacts';

function ContactList({onEditContact}) {
  const contactsToContactList = useSelector(contactsSelectors.getVisibleContacts);

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