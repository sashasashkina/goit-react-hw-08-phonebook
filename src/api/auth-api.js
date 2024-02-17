import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signupRequest = async body => {
  const { data } = await authInstance.post('/users/signup', body);
  return data;
};
