export const CLEAR_ERRORS= 'CLEAR_ERRORS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
  errors: {}
});


export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
