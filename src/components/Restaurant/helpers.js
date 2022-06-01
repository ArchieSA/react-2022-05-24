export default function getAverageRating(reviews) {
    //let sum = 0;
   // const sum = reviews.reduce((total, {rating}) => (total + rating)); 
    let result = reviews.reduce((sum, {rating}) => {
        return sum + rating;
    }, 0);
    return Math.round(result/reviews.length)
}
