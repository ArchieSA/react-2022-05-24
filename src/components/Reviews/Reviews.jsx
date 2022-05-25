import { Review } from '../Review/Review';

export const Reviews = ({ reviews }) => {
  return (
    <>
      <p>Reviews:</p>
      <ul>
        {reviews.map(review => (
          <Review review={review} key={review.id} />
        ))}
      </ul>
    </>
  );
};
