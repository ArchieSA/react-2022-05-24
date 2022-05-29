import { Review } from '../Review/Review';

export const Reviews = ({ reviews }) => (
  <>
    <h3>Reviews</h3>
    {reviews.map(review => (
      <Review review={review} key={review.id} />
    ))}
  </>
);
