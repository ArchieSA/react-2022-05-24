export const Review = ({ review }) => {
  return (
    <li>
      {review.name ?? 'Unknown reviewer'}:&nbsp;
      <q>{review.comment ?? 'No review yet'}</q>
    </li>
  );
};
