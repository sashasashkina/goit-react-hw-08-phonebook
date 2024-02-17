import { nanoid } from 'nanoid';

const menuItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home page',
    private: false,
  },
  {
    id: nanoid(),
    to: '/my-contacts',
    text: 'My Contacts',
    private: true,
  },
];
export default menuItems;
