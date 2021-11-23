import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/contacts`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      await axios.post(`/contacts`, contact);
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      await axios.patch(`/contacts/${id}`, { name, number });
      return {id, name, number};
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const contactsOperations = {
  getContacts,
  addContact,
  deleteContact,
  editContact,
};

export default contactsOperations;