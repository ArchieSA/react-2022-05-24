import { Review } from "../Review/Review";

export const Reviews = ({messages}) => {
    return <>
            <h2>Reviews</h2>
            {messages.map(
                (msg, i) => <Review key={i} message={msg} />
            )}
        </>;
}