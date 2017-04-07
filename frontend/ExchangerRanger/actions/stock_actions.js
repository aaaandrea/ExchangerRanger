import * as APIUtil from '../util/company_api_util'

export const RECEIVE_COMPANIES = "RECEIVE_COMPANIES";
export const RECEIVE_COMPANY = "RECEIVE_COMPANY";
export const RECEIVE_HOLDING = "RECEIVE_HOLDING";

export const updateHolding = holding => dispatch => (
  APIUtil.updateHolding(holding)
    .then(holding => dispatch(receiveHolding(holding)))
);

export const updatePrice = company => dispatch => (
  APIUtil.updatePrice(company)
    .then(company => dispatch(receiveCompany(company)))
);

export const createHolding = holding => dispatch => (
  APIUtil.createHolding(holding)
    .then(holding => dispatch(receiveHolding(holding)))
);
//filters are for search bar
export const fetchCompanies = filters => dispatch => (
  APIUtil.fetchCompanies(filters)
    .then(companies => dispatch(receiveCompanies(companies)))
);

export const fetchCompany = id => dispatch => (
  APIUtil.fetchCompany(id)
    .then(company => dispatch(receiveCompany(company)))
);

export const createCompany = company => dispatch => (
  APIUtil.createCompany(company)
    .then(company => dispatch(receiveCompany(company)))
);

export const receiveCompanies = companies => ({
  type: RECEIVE_COMPANIES,
  companies
});

export const receiveCompany = company => ({
  type: RECEIVE_COMPANY,
  company
});

export const receiveHolding = holding => ({
  type: RECEIVE_HOLDING,
  booking
});
