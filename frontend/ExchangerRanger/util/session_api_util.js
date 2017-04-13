export const login = user => {
  return fetch(`https://exchanger-ranger.herokuapp.com/api/session`, {
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
  return fetch(`https://exchanger-ranger.herokuapp.com/api/session/${user.id}`, {
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
  return fetch('https://exchanger-ranger.herokuapp.com/api/users', {
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
