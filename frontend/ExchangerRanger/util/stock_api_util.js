
export const fetchCompanies = (data) => {
  return fetch('http://localhost:3000/api/companies', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'data.name',
      symbol: 'data.symbol',
      sharePrice: 'data.share_price'
    })
  });
};

export const fetchCompany = (id) => {
  return fetch(`http://localhost:3000/api/companies/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'data.name',
      symbol: 'data.symbol',
      sharePrice: 'data.share_price'
    })
  });

};
//make new holding
export const createHolding = (data) => {
  return fetch(`http://localhost:3000/api/holdings`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId: 'data.user_id',
      companyId: 'data.company_id',
      amount: 'data.amount'
    })
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
