export const getAllContacts = store => store.contacts;

export const getFilteredContacts = store => {
  const { contacts, filter } = store;
  const normalizedFilter = filter.toLocaleLowerCase();

  const filteredContacts = contacts.filter(({ name, number }) => {
    const normalizedName = name.toLocaleLowerCase();
    const normalizedNumber = number.toLocaleLowerCase();
    return (
      normalizedName.includes(normalizedFilter) ||
      normalizedNumber.includes(normalizedFilter)
    );
  });

  return filteredContacts;
};
