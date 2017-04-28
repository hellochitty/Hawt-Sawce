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


// export const addCheckin = (checkin) => {
//   return $.ajax({
//     method: 'POST',
//     url: '/api/checkins',
//     data: {checkin}
//   });
// };

export const addCheckin = (formData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/checkins',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};

export const addComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: {comment}
  });
};

export const removeComment = (comment) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${comment.comment_id}`,
    data: {
        comment_id: comment.comment_id,
        checkin_id: comment.checkin_id,
    }
  });
};
