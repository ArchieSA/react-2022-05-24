import styles from './styles.module.css'
import {useReducer} from "react";

const actionTypes = {
    changeName: 'changeName',
    changeText: 'changeText',
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.changeName:
            return { name: action.payload, text: '', rate: ''};

        case actionTypes.changeText:
            return {...state, text: action.payload };

        case actionTypes.changeRate:
            return { rate: action.payload}

        default:
            return state;
    }
}

export const NewReviewForm = () => {
    const [formState, dispatch] = useReducer(reducer, {name: 'Default name', text: ''});

      return (
          <div className={styles.root}>
              <h3>New Review</h3>
              <span className={styles.title}>Name</span>
              <input value={formState.name} onChange={(event) => {
                  dispatch({type: actionTypes.changeName, payload: event.target.value});
              }}/>

              <span className={styles.title}>Text</span>
              <input value={formState.text} onChange={(event) => {
                  dispatch({type: actionTypes.changeText, payload: event.target.value});
              }}/>

              <span className={styles.title}>Rate</span>
              <input value={formState.rate} onChange={(event) => {
                  dispatch({type: actionTypes.changeRate, payload: +event.target.value})
              }} />
          </div>
      );
}