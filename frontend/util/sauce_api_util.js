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

export const deleteSauce = (sauceId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/sauces/${sauceId}`
  });
};

export const addSauce = (sauce) => {
  return $.ajax({
    method: 'POST',
    url: '/api/sauces',
    data: {sauce}
  });
};

export const updateSauce = (sauce) => {
  return $.ajax({
    method: 'POST',
    url: `/api/sauces/${sauce.id}`,
    data: {sauce}
  });
};
