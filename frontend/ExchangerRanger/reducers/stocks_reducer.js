import { RECEIVE_COMPANIES,
RECEIVE_COMPANY,
RECEIVE_HOLDING } from '../actions/stock_actions';

import merge from 'lodash/merge';

const CompaniesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_COMPANIES:
      console.log(action.companies);
      return action.companies;
    case RECEIVE_COMPANY:
      const newCompany = {[action.company.id]: action.company};
      return merge({}, state, newCompany);
    case RECEIVE_HOLDING:
      const holding = action.holding;
      newState[holding.company_id].holdings[holding.id]=holding;
      return newState;
    default:
      return state;
  }
};

export default CompaniesReducer;
