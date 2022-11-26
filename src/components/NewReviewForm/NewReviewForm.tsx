import styles from "./styles.module.css";
import { useReducer } from "react";
import React from "react";
import {Review} from "../../store/review";
import StarRating from "../StarRating/StarRating";
import {User} from "../../store/user";

enum CountActionKind {
  changeName = "changeName",
  changeText = "changeText",
  changeRating = "changeRating",
}

interface CountAction {
  type: CountActionKind;
  payload: any;
}

interface CountState {
  name?: string;
  text?: string;
  rating?: number;
}

// const actionTypes = {
//     changeName: 'changeName',
//     changeText: 'changeText',
//     changeRating: 'changeRating',
// }

// const DEFAULT_STATE = {name: 'Default name', text: '', rating: 0};

const reducer = (state: CountState, action: CountAction) => {
  switch (action.type) {
    case CountActionKind.changeName:
      return { ...state, name: action.payload };

    case CountActionKind.changeText:
      return { ...state, text: action.payload };

    case CountActionKind.changeRating:
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};
interface NewReviewFormProps {
    onAdd:  (f: { NewReview: Review, NewUser: User }) => { NewReview: Review, NewUser: User };
    reviewIds: (string | undefined)[];

}
export const NewReviewForm: React.FC<NewReviewFormProps> = ({onAdd = (f) => f, reviewIds}) => {
  const [state, dispatch] = useReducer(reducer, {
    name: "Default name",
    text: "",
    rating: 0,
  });
  const NewReview: Review = {
    id: (reviewIds.length + 1).toString(),
    userId: (reviewIds.length + 1).toString(),
    text: state.text,
    rating: state.rating,
    };
    const NewUser: User = {
        id: (reviewIds.length + 1).toString(),
        name: state.name,
    }

  return (
    <div className={styles.root}>
      <h3 style={{margin: "0 0"}}>New Review</h3>
      <span className={styles.title}>Name</span>
      <input
        className={styles.name}
        placeholder="Default name"
        // value={state.name}
        onChange={(event) => {
          dispatch({
            type: CountActionKind.changeName,
            payload: event.target.value,
          });
        }}
      />

      <span className={styles.title}>Text</span>
        <textarea
            className={styles.text}
            placeholder="Default text"
            // value={state.text}
            onChange={(event) => {
                dispatch({
                    type: CountActionKind.changeText,
                    payload: event.target.value,
                });
            }}
        >

        </textarea>

      <span className={styles.title}>Rating</span>
      {/*<input*/}
      {/*  value={state.rating}*/}
      {/*  type="number"*/}
      {/*  max="5"*/}
      {/*  min="0"*/}
      {/*  onChange={(event) => {*/}
      {/*    dispatch({*/}
      {/*      type: CountActionKind.changeRating,*/}
      {/*      payload: Number(event.target.value),*/}
      {/*    });*/}
      {/*  }}*/}
      {/*/>*/}

        <StarRating
            selectedStars={state.rating}
            onRate={(rating) => {
                dispatch({
                type: CountActionKind.changeRating,
                payload: Number(rating),
            }); return rating;
            }}
        />

      <button type="submit" onClick={() => onAdd({NewReview, NewUser})} className={styles.submitButton}>
        PUBLISH REVIEW
      </button>
    </div>
  );
};
