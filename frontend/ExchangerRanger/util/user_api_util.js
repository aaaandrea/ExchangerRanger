export const fetchUsers = () => {
  return fetch(`http://localhost:3000/api/users`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json());
};
