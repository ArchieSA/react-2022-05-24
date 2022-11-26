import { PayloadAction } from "@reduxjs/toolkit";
export declare type ReviewState = {
    entities: Record<string, Review>;
    ids: string[];
    status: string;
};
export interface Review {
    id: string;
    userId: string;
    text: string;
    rating: number;
}
declare const reviewSlice: import("@reduxjs/toolkit").Slice<ReviewState, {
    startLoading: (state: ReviewState, action: PayloadAction<null>) => void;
    failLoading: (state: ReviewState, action: PayloadAction<{}>) => void;
    successLoading: (state: ReviewState, action: PayloadAction<Review[]>) => void;
}, "review">;
export default reviewSlice;
