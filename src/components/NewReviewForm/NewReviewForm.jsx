import styles from './styles.module.css'
import {useReducer} from "react";
import {NewRating} from "../NewRating/NewRating"

const actionTypes = {
    changeName: 'changeName',
    changeText: 'changeText',
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.changeName:

            return { name: action.payload, text: ''};
        case actionTypes.changeText:

            return {...state, text: action.payload };
        default:
            return state;
    }
}

export const NewReviewForm = () => {
    const [formState, dispatch] = useReducer(reducer, {name: 'Default name', text: '', value: 0});    
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

                
                <NewRating />
                    

            
          </div>
      );
}