export const fetchSauces = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/sauces'
  });
};


export const fetchSauce = (sauceId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/sauces/${sauceId}`
  });
};



export const fetchSauceCompanies = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/sauce_companies'
  });
};
