
import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};

export const signup = user => {
  return fetch('http://localhost:3000/api/users', {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'aaron',
    password: 'typicode',
  })
});
};
