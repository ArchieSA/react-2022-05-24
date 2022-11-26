import { PayloadAction } from "@reduxjs/toolkit";
export declare type UserState = {
    entities: Record<string, User>;
    ids: string[];
    status: string;
};
export interface User {
    id: string;
    name: string;
}
declare const userSlice: import("@reduxjs/toolkit").Slice<UserState, {
    startLoading: (state: UserState, action: PayloadAction<null>) => void;
    failLoading: (state: UserState) => void;
    successLoading: (state: UserState, action: PayloadAction<User[]>) => void;
}, "user">;
export default userSlice;
