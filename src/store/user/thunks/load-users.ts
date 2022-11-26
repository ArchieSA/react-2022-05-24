import { selectUserIds } from "../selectors";
import userSlice from "../index";
import { RootState } from "../../store";
import { useAppDispatch } from "../../../hooks/hook_ts";
import { Dispatch } from "redux";

export function loadUsersIfNotExist() {
  return function (dispatch: Dispatch, getState: () => RootState) {
    if (selectUserIds(getState())?.length > 0) {
      console.log("already loaded");

      return;
    }

    dispatch(userSlice.actions.startLoading(null));

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
