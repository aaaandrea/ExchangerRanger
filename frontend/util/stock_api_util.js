export const fetchStocks = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/stocks',
    data
  });
};

export const fetchStock = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/stocks/${id}`
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
