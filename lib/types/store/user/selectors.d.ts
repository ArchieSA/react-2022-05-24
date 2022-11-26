import { RootState } from "../store";
export declare const selectUserState: (state: RootState) => import(".").UserState;
export declare const selectUserIds: (state: RootState) => string[];
export declare const selectUserById: (state: RootState, id: string) => import(".").User;
export declare const selectUserNameById: (state: RootState, id: string) => string;
export declare const selectIsUsersLoading: (state: RootState) => boolean;
export declare const selectIsUsersFailed: (state: RootState) => boolean;
