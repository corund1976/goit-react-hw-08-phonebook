import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaUserEdit, FaTrashAlt } from 'react-icons/fa';

import s from './Contact.module.css';
import { contactsOperations } from 'redux/contacts';

function Contact({ name, number, id, onEditContact }) {
  const dispatch = useDispatch();
  const onDeleteContact = id =>
    dispatch(contactsOperations.deleteContact(id));
  
  return (
    <>
      <p className={s.contact}>• {name}: {number}</p>
      <button className={s.btn} onClick={() => onEditContact({ name, number, id })}>
        <FaUserEdit size="20" />
      </button>
      <button className={s.btn} onClick={() => onDeleteContact(id)}>
        <FaTrashAlt size="20" className={s.delete} />
      </button>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onEditContact: PropTypes.func.isRequired,
};