import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://65c3d2114ac991e8059b1bfe.mockapi.io/contacts/contacts',
});

export const requestFetchContacts = async () => {
  const { data } = await contactsInstance.get('/');

  return data;
};

export const requestAddContacts = async body => {
  const { data } = await contactsInstance.post('/', body);
  return data;
};

export const requestDeleteContacts = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
