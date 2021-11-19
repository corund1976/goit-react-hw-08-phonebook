import axios from 'axios';

axios.defaults.baseURL = 'https://goit-react-hw-07-phonebo-3e645-default-rtdb.europe-west1.firebasedatabase.app/';

export async function getContactsAPI() {
  const { data } = await axios.get("/contacts.json");
  return data;
};

// axios
//     .get(`/contacts`)
//     .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
//     .catch(error => dispatch(contactsActions.fetchContactsError(error)));

// export const getTodosApi = () => {
//   return axios
//     .get("/todos.json")
//     .then(({ data }) => data)
//     .catch((err) => {
//       throw err;
//     });
// };

export async function addContactAPI(contact) {
  await axios.post("/contacts.json", contact);
  return contact;
};

// axios
//     .post(`/contacts`, contact)
//     .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
//     .catch(error => dispatch(contactsActions.addContactError(error)));

// export const addTodoApi = (todo) => {
//   return axios
//     .post("/todos.json", todo)
//     .then(({ data }) => ({ ...todo, id: data.name }))
//     .catch((err) => {
//       throw err;
//     });
// };

export async function deleteContactAPI(id) {
  await axios.delete("/contacts/" + id + ".json");
  return id;
};

// axios
//   .delete(`/contacts/${id}`)
//   .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
//   .catch(error => dispatch(contactsActions.deleteContactError(error)));

// export const removeTodoApi = (id) => {
//   return axios
//     .delete("/todos/" + id + ".json") // null
//     .then(() => id) // data = null
//     .catch((err) => {
//       throw err;
//     });
// };