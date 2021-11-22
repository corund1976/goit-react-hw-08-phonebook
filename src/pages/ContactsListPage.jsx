import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Container from 'components/Container';
import Section from 'components/Section';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import { contactsOperations, } from 'redux/contacts';

function ContactsListPage() {
  const dispatch = useDispatch();

  useEffect(() =>
    dispatch(contactsOperations.getContacts()), [dispatch]);

  return (
    <Container>
      <Section>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
};

export default ContactsListPage;