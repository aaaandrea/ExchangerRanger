
import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const login = user => {
  console.log(user);
  return fetch(`http://localhost:3000/api/session`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      user
    )
  }).then((response) => response.json());
};

export const logout = user => {
  return fetch(`http://localhost:3000/api/session/${user.id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      user
    )
  });
};

export const signup = user => {
  return fetch('http://localhost:3000/api/users', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      user
    )
  }).then((response) => response.json());
};
