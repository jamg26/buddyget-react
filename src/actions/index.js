export const createToast = (toast) => (dispatch) => {
  dispatch({ type: "SET_TOAST", payload: toast });
};
