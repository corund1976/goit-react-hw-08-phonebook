import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Container from 'components/Container';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';

import { contactsOperations, } from 'redux/contacts';

function ContactFormPage() {
  const dispatch = useDispatch();

  useEffect(() =>
    dispatch(contactsOperations.getContacts()), [dispatch]);

  return (
    <Container>
      <Section>
        <ContactForm />
      </Section>
    </Container>
  );
};

export default ContactFormPage;