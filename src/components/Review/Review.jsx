import React from 'react';
import {Rate} from "../Rate/Rate";



export const Review = ({review}) =>   {
    console.log(review)
    return(
        <div>
            <h3>{review.user}</h3>
            <p>{review.text}</p>
            <Rate rate={review.rating}/>
            
        </div>
    )
}
    
    