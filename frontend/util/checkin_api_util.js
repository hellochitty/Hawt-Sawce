export const fetchCheckins = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/checkins'
  });
};


export const fetchCheckin = (checkinId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/checkins/${checkinId}`
  });
};


export const removeCheckin = (checkinId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/checkins/${checkinId}`
  });
};
