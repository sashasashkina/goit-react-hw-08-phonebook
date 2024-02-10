export const selectAllContacts = store => store.contacts;

export const selectFilteredContacts = store => {
  const { contacts, filter } = store;

  const normalizedFilter = filter.toLocaleLowerCase();

  const filteredContacts = contacts.items.filter(({ name }) => {
    const normalizedName = name;

    return normalizedName.includes(normalizedFilter);
  });

  return filteredContacts;
};
