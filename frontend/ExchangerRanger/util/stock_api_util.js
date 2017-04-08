
export const fetchCompanies = (data) => {
  return fetch('http://localhost:3000/api/companies', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: '',
      symbol: '',
      share_price: ''
    })
  });
};

export const fetchCompany = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/companies/${id}`
  });
};
//make new holding
export const createHolding = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/holdings',
    data
  });
};

export const receiveHolding = (data) => {
  return $.ajax({
    method: 'GET',
    url: `api/holdings/${data.id}`,
    data
  });
};
//change holding amount
export const updateHolding = (data) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/holdings/${data.id}`,
    data
  });
};
//update company price
export const updatePrice = (data) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/companies/${data.id}`,
    data
  });
};
