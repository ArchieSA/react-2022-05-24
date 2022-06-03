import {Component, useState} from "react";

import { Rating } from "../Rating/Rating";

export function inputRating(WrappedComponent) {
    const WrapperComponent = ({ value, changeRating, ...props }) => {
        const [rating, setRating] = useState(0);

        const chooseRating = (numberRating) => {
            setRating(numberRating);
            changeRating(numberRating);
        }

        return <WrappedComponent value = {rating} onClick={chooseRating} {...props} />;
    }

    WrapperComponent.displayName = `Wrapper${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`;

    return WrapperComponent;
}

export const InputRating = inputRating(Rating);
