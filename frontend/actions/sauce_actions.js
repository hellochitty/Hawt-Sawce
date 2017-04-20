import * as SauceAPIUtil from '../util/sauce_api_util';

export const RECEIVE_ALL_SAUCES= 'RECEIVE_ALL_SAUCES';
export const RECEIVE_SAUCE= 'RECEIVE_SAUCE';


const receiveSauces = sauces => ({
  type: RECEIVE_ALL_SAUCES,
  sauces
});

const receiveSauce = sauce => ({
  type: RECEIVE_SAUCE,
  sauce
});

export const getSauces = () => dispatch => {
  return SauceAPIUtil.fetchSauces()
    .then((res) => dispatch(receiveSauces(res)));
};

export const getSauce = (sauceId) => dispatch => {
  return SauceAPIUtil.fetchSauce(sauceId)
    .then((res) => dispatch(receiveSauce(res)));
};
