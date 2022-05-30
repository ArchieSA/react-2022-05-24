import { Review } from "../Review/Review";

export const Reviews = ({ reviews }) => {
    return (<div>
        {
            reviews.map((review) => <Review key={review.id} rating={review.rating} userName={review.user} content={review.text} />)
        }
    </div>)
}