import React from "react";
interface ReviewProps {
    className: string;
    user: string;
    text: string;
    rating: number;
}
export declare const MemoReview: React.MemoExoticComponent<({ user, text, rating, className }: ReviewProps) => JSX.Element>;
export {};
