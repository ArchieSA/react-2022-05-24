import userSlice from "../index";
import { selectUserIds } from "../selectors";

export function loadUsersIfNotExist() {
  
  return function (dispatch, getState) {
    if (selectUserIds(getState())?.length > 0) {
      return;
    }

    dispatch(userSlice.actions.startLoading());

    fetch(`http://localhost:3001/api/users`)
      .then((response) => response.json())
      .then((users) => {
        dispatch(userSlice.actions.successLoading(users));
      })
      .catch(() => {
        dispatch(userSlice.actions.failLoading());
      });
  };
} 
