import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import s from './Contact.module.css';
import { contactsOperations } from '../../redux/contacts';

function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <>
      <p className={s.contact}>• {name}: {number}</p>
      <button className={s.btn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};