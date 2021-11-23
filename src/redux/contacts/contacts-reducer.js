import { createReducer, combineReducers } from '@reduxjs/toolkit';

import { changeFilter } from './contacts-actions';
import contactsOperations from './contacts-operations';

const initialState = {
  contacts: {
    items: [],
    filter: '',
    error: null
  },
};
  
const contactsItemsReducer = createReducer(initialState.contacts.items, {
  [contactsOperations.getContacts.fulfilled]: (_, { payload }) => payload,
  [contactsOperations.addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [contactsOperations.deleteContact.fulfilled]: (state, { payload }) => state.filter(({ id }) => id !== payload),
  [contactsOperations.editContact.fulfilled]: (state, { payload }) => [...state.filter(({ id }) => id !== payload.id), payload],
});

const contactsFilterReducer = createReducer(initialState.contacts.filter, {
  [changeFilter]: (_, { payload }) => payload,
});

const contactsErrorReducer = createReducer(initialState.contacts.error, {
  [contactsOperations.getContacts.rejected]: (_, { payload }) => payload,
  [contactsOperations.getContacts.pending]: () => null, //стираем ошибку, чтоб не висела перед глазами всё время
  [contactsOperations.addContact.rejected]: (_, { payload }) => payload,
  [contactsOperations.addContact.pending]: () => null,
  [contactsOperations.deleteContact.rejected]: (_, { payload }) => payload,
  [contactsOperations.deleteContact.pending]: () => null,
});

export default combineReducers({
  items: contactsItemsReducer,
  filter: contactsFilterReducer,
  error: contactsErrorReducer,
});

// Проба createSlice()
// 
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { items: [], filter: '', error: null },
//   extraReducers: {
//     [getContacts.fulfilled]: (state, { payload }) => (state.items = payload),
//     [addContact.fulfilled]: (state, { payload }) => (state.items = payload),
//     [deleteContact.fulfilled]: (state, { payload }) => (state.items = state.filter(({ id }) => id !== payload)),
//     [changeFilter]: (state, { payload }) => (state.filter = payload),
//     // редьюсеры для обработки ошибок:
//     [getContacts.rejected]: (state, { payload }) => (state.error = payload),
//     [getContacts.pending]: (state) => (state.error = null), //стираем ошибку, чтоб не висела перед глазами всё время
//     [addContact.rejected]: (state, { payload }) => (state.error = payload),
//     [addContact.pending]: (state) => (state.error = null),
//     [deleteContact.rejected]: (state, { payload }) => (state.error = payload),
//     [deleteContact.pending]: (state) => (state.error = null),
//   }
// });
