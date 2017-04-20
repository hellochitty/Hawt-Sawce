import * as SauceAPIUtil from '../util/sauce_api_util';

export const RECEIVE_ALL_SAUCES= 'RECEIVE_ALL_SAUCES';


const receiveSauces = sauces => ({
  type: RECEIVE_ALL_SAUCES,
  sauces
});


export const getSauces = () => dispatch => {
  return SauceAPIUtil.fetchSauces()
    .then((res) => dispatch(receiveSauces(res)));
};
