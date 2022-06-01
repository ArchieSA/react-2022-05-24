import styles from './styles.module.css'
import { useReducer, useState } from "react";
import { Rating } from "../Rating/Rating";

const actionTypes = {
    changeName: 'changeName',
    changeText: 'changeText',
    changeRating: 'changeRating',
}

const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case actionTypes.changeName:
            return { name: action.payload, text: '', rating: '' };
        case actionTypes.changeText:
            return { ...state, text: action.payload };
        case actionTypes.changeRating:
            return { ...state, rating: action.payload };
        default:
            return state;
    }
}
function checkRating(e, dispatch) {
    if (!e.target.closest('img')) return;
    dispatch({ type: actionTypes.changeRating, payload: e.target.dataset.value });
}

export const NewReviewForm = () => {
    const [formState, dispatch] = useReducer(reducer, { name: 'Default name', text: '', rating: 0 });
    //const [checkRaiting, setCheckRaiting] = useState(0);

    return (
        <div className={styles.root}>
            <h3>New Review</h3>
            <span className={styles.title}>Name</span>
            <input value={formState.name} onChange={(event) => {
                dispatch({ type: actionTypes.changeName, payload: event.target.value });
            }} />

            <span className={styles.title}>Text</span>
            <input value={formState.text} onChange={(event) => {
                dispatch({ type: actionTypes.changeText, payload: event.target.value });
            }} />

            {/*<span className={styles.rating}>Rating</span>
            <input type="number" value={formState.rating} onChange={(event) => {
                dispatch({ type: actionTypes.changeRaiting, payload: event.target.value });
            }} /> */}

            <span onClick={(e) => checkRating(e, dispatch)}><Rating value={formState.rating} size="medium" /></span>

        </div>
    );
}