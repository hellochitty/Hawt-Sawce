export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/user',
    data: {user}
  });
};



export const fetchUser = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  });
};
