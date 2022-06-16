import userSlice from "..";
import { selectUserByIds } from "../selectors";

export const loadUsersIfNotExist = () => {
  return function (dispatch, getState) {
    if (selectUserByIds(getState())?.length > 0) {
      console.log("Users loaded");

      return;
    }

    dispatch(userSlice.actions.startLoading());

    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((users) => {
        dispatch(userSlice.actions.successLoading(users));
      })
      .catch(() => {
        dispatch(userSlice.actions.failLoading());
      });
  };
};
