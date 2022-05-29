import React from "react";

import { Review } from "../Review/Review";

export const Reviews = ({reviews}) => {
    return (
        <div>
            {
                reviews.map((review) => <Review key={review.id} review={review}/>)
            }
        </div>
    );
}