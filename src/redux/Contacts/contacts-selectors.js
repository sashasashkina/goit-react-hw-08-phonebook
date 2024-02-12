//  export const selectAllContacts = store => store.contacts;

// export const selectFilteredContacts = store => {
//   const { contacts, filter } = store;

//   const normalizedFilter = filter.toLocaleLowerCase();

//   const filteredContacts = contacts.items.filter(({ name }) => {
//     const normalizedName = name;

//     return normalizedName.includes(normalizedFilter);
//   });

//   return filteredContacts;
// };
import { createSelector } from '@reduxjs/toolkit';
export const selectAllContacts = store => store.contacts;

export const selectFilter = store => store.filter;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectContacts = store => store.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
