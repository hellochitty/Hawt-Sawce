import * as SauceAPIUtil from '../util/sauce_api_util';

export const RECEIVE_ALL_SAUCES= 'RECEIVE_ALL_SAUCES';
export const RECEIVE_SAUCE= 'RECEIVE_SAUCE';
export const RECEIVE_SAUCE_COMPANIES= 'RECEIVE_SAUCE_COMPANIES';


const receiveSauces = sauces => ({
  type: RECEIVE_ALL_SAUCES,
  sauces
});

const receiveSauce = sauce => ({
  type: RECEIVE_SAUCE,
  sauce
});

const receiveSauceCompanies = companies => ({
  type: RECEIVE_SAUCE_COMPANIES,
  companies
});

export const getSauces = () => dispatch => {
  return SauceAPIUtil.fetchSauces()
    .then((res) => dispatch(receiveSauces(res)));
};

export const getSauce = (sauceId) => dispatch => {
  return SauceAPIUtil.fetchSauce(sauceId)
    .then((res) => dispatch(receiveSauce(res)));
};

export const getSauceCompanies = () => dispatch => {
  return SauceAPIUtil.fetchSauceCompanies()
    .then((res) => dispatch(receiveSauceCompanies(res)));
};
