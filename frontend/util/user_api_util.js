export const fetchUser = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  });
};


// export const updateUser = (user) => {
//   return $.ajax({
//     method: 'PATCH',
//     url: `/api/users/${user.id}`,
//     data: {user}
//   });
// };


export const updateUser = (formData, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};
