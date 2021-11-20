const getItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getVisibleContacts = ({ contacts: { items, filter } }) => {
  const normalizedFilter = filter.trim().toLowerCase();

  return items.filter(({ name, number }) =>
    name.toLowerCase().includes(normalizedFilter) ||
    number.includes(filter.trim())
  );
};

const contactsSelectors = {
  getItems,
  getFilter,
  getVisibleContacts,
};

export default contactsSelectors;