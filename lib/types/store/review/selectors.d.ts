import { RootState } from "../store";
export declare const selectReviewState: (state: RootState) => import(".").ReviewState;
export declare const selectReviewIds: (state: RootState) => string[];
export declare const selectReviewById: (state: RootState, id: string) => import(".").Review;
export declare const selectReviewByIds: (state: RootState, ids: string[]) => import(".").Review[];
export declare const selectIsReviewsLoading: (state: RootState) => boolean;
export declare const selectIsReviewsFailed: (state: RootState) => boolean;
