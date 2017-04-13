export const fetchCompanies = () => {
  return fetch('https://exchanger-ranger.herokuapp.com/api/companies', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json());
};

export const fetchCompany = (company) => {
  return fetch(`https://exchanger-ranger.herokuapp.com/api/companies/${company.id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json());

};

export const createHolding = (data) => {
  return fetch(`https://exchanger-ranger.herokuapp.com/api/holdings`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      data
    )
  }).then((response) => response.json());
};

export const receiveHolding = (data) => {
  return fetch(`https://exchanger-ranger.herokuapp.com/api/holdings/${data.id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      data
    )
  });
};
//change holding amount
export const updateHolding = (data) => {
  return fetch(`https://exchanger-ranger.herokuapp.com/api/holdings/${data.id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      data
    )
  });
};

export const updatePrice = (company) => {
  return fetch(`https://exchanger-ranger.herokuapp.com/api/companies/${company.id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      company
    })
  }).then((response) => response.json());
};
