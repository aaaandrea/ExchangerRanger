export const fetchUsers = () => {
  return fetch(`http://exchanger-ranger.herokuapp.com/api/users`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json());
};
