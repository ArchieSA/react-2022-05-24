import { RootState } from "../../store";
import { Dispatch } from "redux";
export declare function loadReviewsIfNotExist(restaurantId: string): (dispatch: Dispatch<import("redux").AnyAction> | undefined, getState: () => RootState) => void;
