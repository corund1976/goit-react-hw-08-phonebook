import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Container from 'components/Container';
import Section from 'components/Section';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import ContactEdit from 'components/ContactEdit';

import { contactsOperations } from 'redux/contacts';

function ContactsListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToEdit, setContactToEdit] = useState({});
   
  const onEditContact = (contact) => {
    setIsModalOpen(true);
    setContactToEdit(contact);
  };

  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.getContacts()), [dispatch]);

  return (
    <Container>
      <Section>
        <Filter />
        <ContactList onEditContact={onEditContact}/>
        {isModalOpen && (
          <ContactEdit
            contactToEdit={contactToEdit}
            onCloseModal={setIsModalOpen}
          />
        )}
      </Section>
    </Container>
  );
};

export default ContactsListPage;