import { createAsyncThunk } from '@reduxjs/toolkit';

// import * as contactsActions from './contactsActions';
import * as contactsAPI from '../../services/contactsApi';

// export const getContacts = () => async dispatch => {
//   dispatch(contactsActions.getContactsRequest());

//   try {
//     const contacts = await contactsAPI.getContactsAPI();
//     dispatch(contactsActions.getContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactsActions.getContactsError(error))
//   }
// };
export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.getContactsAPI();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// export const addContact = ({ name, number }) => async dispatch => {
//   dispatch(contactsActions.addContactRequest());

//   try {
//     const contact = { name, number };
//     await contactsAPI.addContactAPI(contact);
//     dispatch(contactsActions.addContactSuccess(contact));
//   } catch (error) {
//     dispatch(contactsActions.addContactError(error))
//   }
// };
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      await contactsAPI.addContactAPI(contact);
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// export const deleteContact = id => async dispatch => {
//   dispatch(contactsActions.deleteContactRequest());

//   try {
//     await contactsAPI.deleteContactAPI(id);
//     dispatch(contactsActions.deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(contactsActions.deleteContactError(error))
//   }
// };
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await contactsAPI.deleteContactAPI(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);