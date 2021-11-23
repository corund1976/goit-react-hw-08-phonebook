import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaWindowClose, FaSave } from 'react-icons/fa';

import s from './ContactEdit.module.css';
import { contactsOperations } from 'redux/contacts';

function ContactEdit({ contactToEdit, onCloseModal }) {
  const {name: oldName, number: oldNumber, id } = contactToEdit;

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const handlePressEsc = e => {
      if (e.code === 'Escape') {
        onCloseModal(false);
      }
    };

    window.addEventListener('keydown', handlePressEsc);
    return () => {
      window.removeEventListener('keydown', handlePressEsc);
    };
  });

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  const handleSave = () => {
    const editedContact = {
      id: id,
      name: name ? name : oldName,
      number: number ? number : oldNumber,
    };

    dispatch(contactsOperations.editContact(editedContact));
    
    onCloseModal(false);
  };

  return (
    <div className={s.overlay} onClick={e => handleBackDropClick(e)}>
      <div className={s.modal}>

        <button
          className={s.close}
          type="button"
          onClick={() => onCloseModal(false)}>
          <FaWindowClose size="25" className={s.closeIcon} />
        </button>

        <form className={s.form}>
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              placeholder={oldName}
              onChange={({ target: { value } }) => setName(value)}
            />

            <input
              className={s.input}
              type="tel"
              name="number"
              value={number}
              placeholder={oldNumber}
              onChange={({ target: { value } }) => setNumber(value)}
            />

          <button
            className={s.button}
            type="button"
            onClick={handleSave}>
            Save...
            <FaSave size="15" className={s.saveIcon}/>
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactEdit;