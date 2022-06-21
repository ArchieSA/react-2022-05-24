import userSlice from "..";
import { selectUserIds } from "../selectors";

export const loadUsersIfNotExist = () => (dispatch, getState) => {
    if (selectUserIds(getState())?.length > 0) {
        console.log("already loaded");
  
        return;
      }

    dispatch(userSlice.actions.loading());

    fetch(`http://localhost:3001/api/users`)
        .then((response) => response.json())
        .then((users) => {
            dispatch(userSlice.actions.successfullyLoaded(users));
        })
        .catch(() => {
            dispatch(userSlice.actions.loadingFailed());
        });
};

