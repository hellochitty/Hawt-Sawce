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

export const fetchSaucesOrder = (orderId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/sauces/order/${orderId}`
  });
};

export const addSauce = (formData) => {
  return $.ajax({
     url: '/api/sauces',
     type: 'POST',
     processData: false,
     contentType: false,
     dataType: 'json',
     data: formData
  });
};

export const updateSauce = (formData, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/sauces/${id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};
