import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Container from '../components/Container';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

import { contactsOperations, } from '../redux/contacts';

export default function ContactsPage(params) {
  const dispatch = useDispatch();

  useEffect(() =>
    dispatch(contactsOperations.getContacts()), [dispatch]);

  return (
    <Container>
      <Section>
        <ContactForm />
      </Section>
      
      <Section>
        <h2>Контакты</h2>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
};