import userSlice from "../index";
import { selectUsersExist, selectUserIsLoading } from "../selectors";

function loadUsersIfNotExist() {
  return function (dispatch, getState) {
    if (selectUserIsLoading(getState()))
    {
      console.log("users already loading");
      return;
    }

    if (selectUsersExist(getState())) {
      console.log("users already loaded");
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
}

export default loadUsersIfNotExist;
