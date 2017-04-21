import * as SauceAPIUtil from '../util/sauce_api_util';
import {receiveErrors} from './util_actions';

export const RECEIVE_ALL_SAUCES= 'RECEIVE_ALL_SAUCES';
export const RECEIVE_SAUCE= 'RECEIVE_SAUCE';
export const RECEIVE_SAUCE_COMPANIES= 'RECEIVE_SAUCE_COMPANIES';
export const REMOVE_SAUCE= 'RECEIVE_SAUCE_COMPANIES';


const receiveSauces = sauces => ({
  type: RECEIVE_ALL_SAUCES,
  sauces
});

const receiveSauceCompanies = companies => ({
  type: RECEIVE_SAUCE_COMPANIES,
  companies
});

const receiveSauce = sauce => ({
  type: RECEIVE_SAUCE,
  sauce
});

const removeSauce = sauce => ({
  type: RECEIVE_SAUCE,
  sauce
});

export const getSauces = () => dispatch => {
  return SauceAPIUtil.fetchSauces()
    .then((res) => dispatch(receiveSauces(res)));
};

export const getSauceCompanies = () => dispatch => {
  return SauceAPIUtil.fetchSauceCompanies()
    .then((res) => dispatch(receiveSauceCompanies(res)));
};

export const getSauce = (sauceId) => dispatch => {
  return SauceAPIUtil.fetchSauce(sauceId)
    .then((res) => dispatch(receiveSauce(res)));
};

export const deleteSauce = (sauceId) => dispatch => {
  return SauceAPIUtil.deleteSauce(sauceId)
    .then((res) => dispatch(removeSauce(res)),
    (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const addSauce = (sauce) => dispatch => {
  return SauceAPIUtil.addSauce(sauce)
    .then((res) => dispatch(receiveSauce(res)),
    (err) => dispatch(receiveErrors(err.responseJSON)));
};
