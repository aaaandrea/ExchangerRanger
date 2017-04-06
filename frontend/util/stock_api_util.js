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

export const createHolding = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/holdings',
    data
  });
};

export const createBooking = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/bookings',
    data
  });
};

export const createSpot = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/spots',
    data
  });
};
