import userSlice from "..";
import { selectUserIds } from "../selectors";

export function loadUsers() {
    return function(dispatch, getState) {
        if(selectUserIds(getState())?.length > 0){
            console.log('Users are already loaded!')
            return;
        }

        dispatch(userSlice.actions.startLoading());

        fetch('http://localhost:3001/api/users')
        .then((responce) => responce.json())
        .then((users) => {
            dispatch(userSlice.actions.successLoading(users));
        })
        .catch(() => {
            dispatch(userSlice.actions.failLoading());
        })
    }
}