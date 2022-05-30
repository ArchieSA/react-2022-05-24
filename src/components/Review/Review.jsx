import { Rate } from "../Rate/Rate";

export const Review = ({userName, content, rating}) => {

 return (<div>
     <h4>{userName}</h4>
     <span>{content}</span>
     <Rate countStar={rating}/>
     </div>)
}