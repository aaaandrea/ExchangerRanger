
export const fetchCompanies = () => {
  return fetch('http://localhost:3000/api/companies', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json());
};

export const fetchCompany = (company) => {
  return fetch(`http://localhost:3000/api/companies/${company.id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json());

};
//make new holding
export const createHolding = (data) => {
  return fetch(`http://localhost:3000/api/holdings`, {
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
  return fetch(`http://localhost:3000/api/holdings/${data.id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      data
    )
  }).then((response) => response.json());
};
//change holding amount
export const updateHolding = (data) => {
  return fetch(`http://localhost:3000/api/holdings/${data.id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      data
    )
  }).then((response) => response.json());
};
//update company price
export const updatePrice = (company) => {
  return fetch(`http://localhost:3000/api/companies/${company.id}`, {
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
