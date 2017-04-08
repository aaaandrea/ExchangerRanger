
import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const login = (user) => {
  return fetch('http://localhost:3000/api/users/:id', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: 'user.username',
      password: 'user.password',
    })
  });
};

export const logout = () => {
  return fetch('http://localhost:3000/api/users/:id', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: 'user.username',
      password: 'user.password',
    })
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
      username: 'user.username',
      password: 'user.password',
    })
  });
};
